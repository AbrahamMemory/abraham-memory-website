import { NextResponse } from "next/server"

// TEMP STORAGE (RAM / prototype only)
const memoryStore = new Map<string, any[]>()

// SAVE MEMORY
export async function POST(req: Request) {
  const body = await req.json()
  const { userId, content, type } = body

  if (!userId || !content) {
    return NextResponse.json(
      { error: "userId and content are required" },
      { status: 400 }
    )
  }

  const existing = memoryStore.get(userId) || []

  const newMemory = {
    id: crypto.randomUUID(),
    userId,
    type: type || "note",
    content,
    createdAt: Date.now(),
  }

  existing.push(newMemory)
  memoryStore.set(userId, existing)

  return NextResponse.json({
    success: true,
    memory: newMemory,
  })
}

// GET MEMORY
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const userId = searchParams.get("userId")

  if (!userId) {
    return NextResponse.json(
      { error: "userId is required" },
      { status: 400 }
    )
  }

  return NextResponse.json({
    memories: memoryStore.get(userId) || [],
  })
}