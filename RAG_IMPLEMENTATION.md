# RAG Implementation

RAG (Retrieval Augmented Generation) implementation using Qdrant vector database and Gemini AI.

## How It Works

1. **User sends message** → Chat endpoint receives query
2. **Vector search** → Find top 3 most relevant FAQs using semantic similarity
3. **Context building** → Pass relevant FAQs to Gemini AI
4. **AI generation** → Gemini generates response based on retrieved context
5. **Response** → User receives accurate, context-aware answer

## Architecture

```
User Query
    ↓
Vector Search (Qdrant)
    ↓
Top 3 Relevant FAQs
    ↓
Gemini AI (with context)
    ↓
Generated Response
```

## Benefits

- **Better accuracy** - AI only sees relevant FAQs, not all 100+
- **Faster responses** - Smaller context = faster generation
- **Semantic understanding** - Finds FAQs by meaning, not keywords
- **Scalable** - Can handle thousands of FAQs without performance issues

## Example

**User:** "How much does it cost?"

**Vector Search Results:**
1. Q: How much do your services cost? (similarity: 0.92)
2. Q: How do I pay for services? (similarity: 0.78)
3. Q: Do you offer refunds? (similarity: 0.65)

**AI Response:** Uses only these 3 FAQs to generate answer

## Files Changed

- `server/routes/chat.ts` - Use vector search instead of full FAQ context
- `server/server.ts` - Initialize vector DB on startup

## Testing

Start the server and test the chat:

```bash
curl -X POST http://localhost:6001/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What documents do I need?", "language": "en"}'
```

The response will be based on semantically similar FAQs retrieved from the vector database.
