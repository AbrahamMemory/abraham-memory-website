import { NextResponse } from "next/server"

// HARUS SAMA seperti memory (sementara prototype)
const memoryStore = new Map<string, any[]>()

export async function POST(req: Request) {
  const { userId, message } = await req.json()

  if (!userId || !message) {
    return NextResponse.json(
      { error: "userId and message required" },
      { status: 400 }
    )
  }

  // ambil memory user
  const memories = memoryStore.get(userId) || []

  // bikin context AI dari memory
  const context = memories
    .slice(-5)
    .map((m) => `- ${m.content}`)
    .join("\n")

  // AI response (dummy logic dulu)
  const response = `
AI Agent Response:

Memory yang aku ingat:
${context || "No memory yet"}

User berkata:
"${message}"

→ AI sekarang sudah pakai memory kamu.
  `.trim()

  return NextResponse.json({
    response,
    memoryCount: memories.length,
  })
}