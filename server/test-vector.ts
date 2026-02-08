import 'dotenv/config';
import { initializeVectorDB, searchSimilarFAQs } from './services/vectorService';

async function test() {
  console.log('Testing Vector Database...\n');
  
  // Initialize and index FAQs
  console.log('1. Initializing vector DB and indexing FAQs...');
  await initializeVectorDB();
  
  // Test search
  console.log('\n2. Testing semantic search...');
  const query = 'How much does it cost?';
  console.log(`Query: "${query}"\n`);
  
  const results = await searchSimilarFAQs(query, 'en', 3);
  
  console.log('Results:');
  results.forEach((faq, i) => {
    console.log(`\n${i + 1}. ${faq.question}`);
    console.log(`   Answer: ${faq.answer.substring(0, 80)}...`);
    console.log(`   Category: ${faq.category}`);
  });
  
  console.log('\nTest complete!');
  process.exit(0);
}

test().catch(err => {
  console.error('Test failed:', err);
  process.exit(1);
});
