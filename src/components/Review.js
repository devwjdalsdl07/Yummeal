import React, { useEffect, useState } from "react";
import { ReviewWrap } from "../style/ReviewCss";
import { getReview } from "../api/mainFatch";

const Review = ({pid}) => {
  const [reviewAll, setReviewAll] = useState([]);



  //제일 많이 팔린 상품 가져오기 더보기
  const reviewsData = async () => {
    try {
      const result = await getReview(pid);
      setReviewAll(result);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    reviewsData();
  }, [pid]);

  return (
    <ReviewWrap>
      <div className="review-list">
        {reviewAll?.content?.map((reviewAll, index) => (
          <div key={index} className="review">
            <div className="review-info">
              <div>
                {/* <span>{reviewAll?.content?.createdAt.slice(0, 10)}</span> */}
                <span>{reviewAll?.userName}</span>
              <p>{reviewAll?.ctnt}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </ReviewWrap>
  );
};

export default Review;

// const initialReviews = [
//   {
//     content: "정말 좋은 제품입니다.",
//     id: "qwer1",
//     createdate: "2023-08-03",
//   }
//   // {
//   //   content:
//   //     "구매한 지 일주일이 지났는데 아직까지 문제없이 잘 사용 중입니다.",
//   //   image: "https://via.placeholder.com/100",
//   //   id: "asdf2",
//   //   createdate: "2023-08-03",
//   // },
// ];

// const addReview = newReview => {
//   setReviews([...reviews, newReview]);
// };

// // const handleSubmit = e => {
// //   e.preventDefault();
// //   const newReview = { title, content, image };
// //   addReview(newReview);
// //   setTitle("");
// //   setContent("");
// //   setImage("");
// // };

// useEffect(() => {
//  const fetchReviews() = {
//     try {
//       const reviewsData = await postReview();
//       setReviews(reviewsData);
//     } catch (err) {
//       console.err("리뷰를 가져오는 중에 오류가 발생했습니다.", error);
//     }
//   }
//   fetchReviews();
// }, []);
