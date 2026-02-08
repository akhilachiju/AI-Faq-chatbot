import { QdrantClient } from '@qdrant/js-client-rest';
import { GoogleGenAI } from '@google/genai';
import { faqData } from '../data/avaFaqData';

const qdrant = new QdrantClient({ url: process.env.QDRANT_URL || 'http://localhost:6333' });
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const COLLECTION_NAME = 'ava_faqs';
const VECTOR_SIZE = 768;

interface FAQEntry {
  id: string;
  question: string;
  answer: string;
  category: string;
  language: string;
}

async function generateEmbedding(text: string): Promise<number[]> {
  const result = await ai.models.embedContent({
    model: 'text-embedding-004',
    content: text
  });
  return result.embedding.values;
}

export async function initializeVectorDB(): Promise<void> {
  try {
    const collections = await qdrant.getCollections();
    const exists = collections.collections.some(c => c.name === COLLECTION_NAME);

    if (!exists) {
      await qdrant.createCollection(COLLECTION_NAME, {
        vectors: { size: VECTOR_SIZE, distance: 'Cosine' }
      });
      console.log('✅ Collection created');
    }

    const { count } = await qdrant.count(COLLECTION_NAME);
    if (count === 0) {
      await indexFAQs();
    }
  } catch (error) {
    console.error('Vector DB init error:', error);
  }
}

async function indexFAQs(): Promise<void> {
  const entries: FAQEntry[] = [];
  let id = 0;

  for (const lang of ['en', 'de'] as const) {
    for (const [category, faqs] of Object.entries(faqData[lang])) {
      for (const faq of faqs) {
        entries.push({
          id: String(id++),
          question: faq.question,
          answer: faq.answer,
          category,
          language: lang
        });
      }
    }
  }

  const points = await Promise.all(
    entries.map(async (entry) => ({
      id: entry.id,
      vector: await generateEmbedding(`${entry.question} ${entry.answer}`),
      payload: entry
    }))
  );

  await qdrant.upsert(COLLECTION_NAME, { points });
  console.log(`✅ Indexed ${entries.length} FAQs`);
}

export async function searchSimilarFAQs(query: string, language: string, limit = 3): Promise<FAQEntry[]> {
  try {
    const queryVector = await generateEmbedding(query);
    
    const results = await qdrant.search(COLLECTION_NAME, {
      vector: queryVector,
      limit,
      filter: {
        must: [{ key: 'language', match: { value: language } }]
      }
    });

    return results.map(r => r.payload as FAQEntry);
  } catch (error) {
    console.error('Search error:', error);
    return [];
  }
}
