export default function Edit() {
  return (
    <div className="p-20">
    <h4>수정페이지</h4>
    <form action="/api/post/new" method="POST">
      <input name="title" placeholder="글제목" />
      <input name="content" placeholder="글내용" />
      <button type="submit">버튼</button>
    </form>
    <form action="/api/post/new" method="POST">
      <input name="title" placeholder="글제목" />
      <input name="content" placeholder="글내용" />
      <button type="submit">버튼</button>
    </form>
    <form action="/api/post/new" method="POST">
      <input name="title" placeholder="글제목" />
      <input name="content" placeholder="글내용" />
      <button type="submit">버튼</button>
    </form>
    {/* <h4>글작성</h4>
    <form action="/api/date" method="GET">
      <button type="submit">버튼</button>
    </form>
    <br /> */}
    



  </div>
  )
}