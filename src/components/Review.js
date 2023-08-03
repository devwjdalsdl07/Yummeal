import React, { useState } from "react";
import { ReviewWrap } from "../style/ReviewCss";

const Review = () => {
  const initialReviews = [
    {
      title: "좋아요!",
      content: "정말 좋은 제품입니다.",
      image: "https://via.placeholder.com/100",
      id: "qwer1",
      createdate: "2023-08-03",
    },
    {
      title: "만족해요!",
      content:
        "구매한 지 일주일이 지났는데 아직까지 문제없이 잘 사용 중입니다.",
      image: "https://via.placeholder.com/100",
      id: "asdf2",
      createdate: "2023-08-03",
    },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const addReview = newReview => {
    setReviews([...reviews, newReview]);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const newReview = { title, content, image };
  //   addReview(newReview);
  //   setTitle("");
  //   setContent("");
  //   setImage("");
  // };
  
  return (
    <ReviewWrap>
      <h2>상품 리뷰</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <div className="review-info">
              <div>
                <span>{review.createdate}</span>
                <span>{review.id}</span>
              </div>
              <h3>{review.title}</h3>
              <p>{review.content}</p>
            </div>
            {review.image && <img src={review.image} alt="Review" />}
          </div>
        ))}
      </div>
      {/* <form onSubmit={handleSubmit} className="review-textwrap">
        <h3>리뷰 작성하기</h3>
        <div className="review-title">
          <input
            type="text"
            placeholder="제목"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="review-content">
          <textarea
            placeholder="리뷰 내용"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <div>
          <input
            type="file"
            onChange={e => {
              const file = e.target.files[0];
              const reader = new FileReader();
              reader.onloadend = () => {
                setImage(reader.result);
              };
              if (file) {
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>
        <button type="submit">리뷰 작성</button>
      </form> */}
    </ReviewWrap>
  );
};

export default Review;
