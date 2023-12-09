import { connectDB } from "@/util/database"

export default async function handler(요청, 응답) {

  const client = await connectDB;
  const db = client.db("forum")
  // mongodb안에 있는 데이터들을 가져와서 모두 array로 변환
  let result: string[] = await db.collection('post').find().toArray()

  if(요청.method == 'POST') {
    return 응답.status(200).json(result)
  }

  
}