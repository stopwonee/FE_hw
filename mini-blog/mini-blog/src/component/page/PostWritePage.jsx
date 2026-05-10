import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PostWritePage({addPost}) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="container">
      <h2>소플의 미니 블로그</h2>
      <textarea placeholder="글 제목" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <textarea placeholder="내용을 입력하세요" value={content} onChange={(e) => setContent(e.target.value)}/>
      
      <button className="WritingBtn" onClick={() => {
        addPost(title, content);
        navigate("/"); 
      }}>
        글 작성하기
      </button>
    </div>
  );
}

export default PostWritePage;