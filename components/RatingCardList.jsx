import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

const RatingCardList = ({ dishes, removeItem, setMessage, handleRating }) => {
  return (
    <>
      {dishes.map((dish, index) => (
        <motion.div
          className="card bg-gray-700 shadow-xl"
          key={index}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          whileDrag={{ scale: 1.05 }}
          dragSnapToOrigin={true}
          dragElastic={0.5}
          onDragStart={(event, info) => console.log(info.point.x, info.point.y)}
          onDragEnd={(event, info) => {
            if (info.offset.x > 150) {
              removeItem(dish.id);
              setMessage("Liked");
              handleRating(1);
            }
            if (info.offset.x < -150) {
              removeItem(dish.id);
              setMessage("Disliked");
              handleRating(0);
            }
          }}
        >
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body cursor-pointer">
            <h2 className="card-title">
              {dish.name}
              <div className="badge badge-accent badge-outline">
                {" "}
                {dish.type}
              </div>
            </h2>

            <p>內容物: {dish.ingredients}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
};

export default RatingCardList;
