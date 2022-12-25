import { useState } from "react";
import Navbar from "../../components/Navbar";
import RatingCardList from "../../components/RatingCardList";
import { FcLike } from "react-icons/fc";
import { HiXCircle } from "react-icons/hi";
import axios from "axios";
const data = [
  {
    id: 0,
    name: "鍋燒意麵",
    ingredients: "青菜、蝦、蛋、豬肉片、火鍋料、意麵",
    type: "葷",
    image: "",
  },
  {
    id: 1,
    name: "鍋燒意麵2",
    ingredients: "青菜、蝦、蛋、豬肉片、火鍋料、意麵",
    type: "葷",
    image: "",
  },
];
const Rating = () => {
  const handleRating = async (rating) => {
    try {
      const res = await axios.post("/api/rating", {
        rating: rating,
        Dish_id: 0,
        User_studentId: 1,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center p-6 space-y-4 mt-12">
        <div className="flex flex-col space-y-8">
          <h2 className="text-4xl font-bold w-full text-left">Rating</h2>
          <p className="text-xl font-bold w-full text-left">
            Swipe left or right to rate the dishes
          </p>
          <div className="stack">
            <RatingCardList data={data} />
            <div className="w-full text-center">Thanks for your feedback</div>
          </div>
          <div className="flex">
            <HiXCircle
              className="flex-1 w-20 h-20 cursor-pointer"
              onClick={() => handleRating(0)}
            />
            <FcLike
              className="flex-1 w-20 h-20 cursor-pointer"
              onClick={() => handleRating(1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
