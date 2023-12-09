import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"
import Link from 'next/link';
import { Button, Stack, Form } from 'react-bootstrap';

export default async function Home() {

  const client = await connectDB;
  const db = client.db("forum")
  // mongodb안에 있는 데이터들을 가져와서 모두 array로 변환
  let result: string[] = await db.collection('post').find().toArray()
  console.log(result)
  console.log(result[0].title)
  console.log(result[0].content)

  return (
    <div>
      <div className="background">
        <div className="background-body">
          <header className="header">
            <div className="header-inner">  
              <h4>
                
              </h4>
            </div>
          </header>
        </div>
      </div>
      <h4>게시판입니다.</h4>

      <h5>제목 : {result[0].title}</h5>
      <h5>내용 : {result[0].content}</h5>

      <Link href={'/list'}><h4>리스트</h4></Link>
    </div>
  )
}
