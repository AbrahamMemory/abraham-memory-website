import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

// TEMP MEMORY STORE (Phase 1 - no DB yet)
const memoryStore: {
  id: number
  userId: string
  message: string
  embedding: number[]
  timestamp: Date
}[] = []

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { message, userId = "default" } = body

    if (!message) {
      return Response.json({ error: "Message required" }, { status: 400 })
    }

    function cosineSimilarity(a: number[], b: number[]) {
  let dot = 0
  let normA = 0
  let normB = 0

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }

  return dot / (Math.sqrt(normA) * Math.sqrt(normB))
}

    // 1. CREATE EMBEDDING (MEMORY VECTOR)
    const embeddingRes = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: message,
    })

    const vector = embeddingRes.data[0].embedding

    // 2. STORE MEMORY
    const memory = {
      id: Date.now(),
      userId,
      message,
      embedding: vector,
      timestamp: new Date(),
    }

    memoryStore.push(memory)

    // 3. SEMANTIC MEMORY RETRIEVAL (STEP 2)

const scoredMemories = memoryStore.map((m) => {
  return {
    ...m,
    score: cosineSimilarity(vector, m.embedding),
  }
})

// sort berdasarkan relevansi
scoredMemories.sort((a, b) => b.score - a.score)

// ambil TOP 5 memory paling relevan
const topMemories = scoredMemories.slice(0, 5)

const recentMemories = topMemories.map(
  (m) => `- ${m.message}`
)

    // 4. OPENAI REASONING (WITH MEMORY CONTEXT)
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
You are Abraham Memory AI System.

You are not a chatbot.
You are a persistent memory intelligence layer.

You remember user context across interactions.

Stored memory context:
${recentMemories.join("\n")}

Rules:
- Use memory context when relevant
- If user provides new info, acknowledge and store it mentally
- Maintain continuity of identity
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    })

    const reply = completion.choices[0].message.content

    return Response.json({
      reply,
      memoryStored: true,
      memoryCount: memoryStore.length,
      recentMemories,
    })
  } catch (err: any) {
    return Response.json(
      { error: err.message || "Server error" },
      { status: 500 }
    )
  }
}