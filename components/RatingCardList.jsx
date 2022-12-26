import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";

const RatingCardList = ({ dishes }) => {
  console.log(dishes)
  const [direction, setDirection] = useState(0);

  return (
    <>
      {dishes.map((dish, index) => (
        <motion.div
          className="card bg-gray-700 shadow-xl"
          key={index}
          drag="x"
          dragConstraints={{ left: -50, right: 50 }}
          initial={{ x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          onDragEnd={(event, info) => {
            if (info.point.x > 150) {
              setDirection(1);
            }
            if (info.point.x < -150) {
              setDirection(-1);
            }
            console.log(info.point.x);
          }}
          exit={{
            x: direction > 0 ? 500 : -500,
            opacity: 0,
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
