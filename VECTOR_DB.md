# Vector Database Setup

Qdrant vector database integration for semantic search of FAQs.

## What's Included

- **Qdrant Vector Database** - Docker container for vector storage
- **Gemini Embeddings** - Uses `gemini-embedding-001` model (768 dimensions)
- **Vector Service** - Handles embedding generation and semantic search
- **Test Script** - Verify vector database functionality

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Add to `.env`:
```
QDRANT_URL=http://localhost:6333
```

3. Start Qdrant:
```bash
docker-compose up -d qdrant
```

4. Test vector database:
```bash
cd server
npx ts-node test-vector.ts
```

## How It Works

- **initializeVectorDB()** - Creates collection and indexes all FAQs on first run
- **searchSimilarFAQs()** - Finds top-k similar FAQs using cosine similarity
- **generateEmbedding()** - Converts text to 768-dimensional vectors using Gemini

## API Usage

```typescript
import { searchSimilarFAQs } from './services/vectorService';

// Search for similar FAQs
const results = await searchSimilarFAQs('How much does it cost?', 'en', 3);
```

## Qdrant Dashboard

Access at: http://localhost:6333/dashboard
