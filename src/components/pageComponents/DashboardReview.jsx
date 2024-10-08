import { Avatar, Divider } from "@mui/material";
import React from "react";
import { FaStar } from "react-icons/fa";

const DashboardReview = () => {
  return (
    <>
      <div className="main flex flex-col bg-[#20212a] p-2 justify-around gap-4 rounded-md w-[95%]  ml-3 md:ml-0">
        <div className="heading">
          <h2 className="text-2xl font-bold text-[#f8fafd] p-2">
            Customer's Feedback
          </h2>
        </div>
        <div className="reviews">
          <ReviewData />
        </div>
      </div>
    </>
  );
};

export default DashboardReview;

function ReviewData() {
  const reviewList = [
    {
      id: 1,
      name: "Barrett Pace",
      picture: "https://web-images6.pixpa.com/lLlWMdXI8csKLLbkcSEw2G6StDefqr8uWaadqL7vc4k/rs:fit:1200:0/q:80/aHR0cHM6Ly9waXhwYWNvbS1pbWcucGl4cGEuY29tL2NvbS9hcnRpY2xlcy8xNTI1ODkxODc5LTM3OTcyMC13YXJyZW4td29uZy0yNDIyODYtdW5zcGxhc2hqcGcuanBn",
      rating: 4,
      text: "Culpa non consequat fugiat proident qui irure anim dolor Lorem duis. Adipisicing eu minim nulla aute labore excepteur officia nisi proident culpa qui. Minim aliquip ut officia ullamco minim reprehenderit. Deserunt Lorem et labore Lorem esse eu velit. Eu cupidatat enim nisi voluptate mollit.\r\n",
    },
    {
      id: 2,
      name: "Rachael Watkins",
      picture: "https://lifetouch.com/wp-content/uploads/2018/06/Underclass_girlwithbluebg.jpg",
      rating: 5,
      text: "Aliqua duis sint minim cupidatat nulla consectetur occaecat ullamco officia proident. Nostrud dolore pariatur ex nisi. Proident proident id consequat aliqua et eu Lorem consectetur fugiat ipsum. Do velit amet est aliqua duis qui pariatur laboris.\r\n",
    },
    {
      id: 3,
      name: "Tasha Torres",
      picture: "https://i0.wp.com/live.staticflickr.com/4762/39699055175_5876c32612_b.jpg?resize=1024%2C689&ssl=1",
      rating: 5,
      text: "Et pariatur aliqua nulla pariatur nulla ipsum ad. Sint laborum duis laborum mollit deserunt culpa incididunt esse incididunt. Ullamco commodo velit amet proident sint tempor sint. Ad fugiat tempor proident ullamco pariatur laboris non amet commodo est enim dolore esse incididunt.\r\n",
    },
  ];

  return (
    <>
      <div className="w-full bg-[#20202b] p-1 ">
        {reviewList.map((review) => (
          <div className="divide-red-600"  key={review.id}>
            <div
              className="flex flex-col gap-1 p-1 ml-2 m-2 mt-0 divide-gray-300"
             
            >
              <div className="flex items-center gap-2 text-[#f8fafd]">
                <Avatar src={review.picture} />
                <div className="text-[#f8fafd] text-md">{review.name}</div>
              </div>
              <div className="rating flex p-1">
                {[...Array(5)].map((rat, index) => (
                  <FaStar
                    key={index}
                    style={{ color: index < review.rating ? "gold" : "gray" }}
                  />
                ))}
              </div>
              <div className="review-text px-1.5">
                <p className="text-xs">{review.text}</p>
              </div>
            <Divider className="p-1"/>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// function ratingColor(val) {
//   for (let i = 0; i < val; i++) {
//     if (val > i) {
//       <FaRegStar className=" text-yellow-500" />;
//     }
//     <FaRegStar className="text-[#f8fafd]" />;
//   }
// }
