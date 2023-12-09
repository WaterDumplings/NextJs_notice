import { connectDB } from "@/util/database"

export default async function handler(요청, 응답) {
  if (요청.method == 'POST') {
    console.log(요청.body)
    if (요청.body.title == '') {
      return 응답.status(500).json('제목을 작성하세요 ^^')
    }
    try {
      const client = await connectDB;
      const db = client.db("forum")
      let result: string[] = await db.collection('post').insertOne(요청.body)
      응답.redirect(302, '/list')
    } catch (error) {
      return (
        <div>
          <h1>DB 오류</h1>
        </div>
      )
    }

  }

}