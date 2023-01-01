// send the rating and the user to the backend
import { prisma } from "../../../lib/prisma";
import jwt from "jsonwebtoken";
export default async function handler(req, res) {
  const { Dish_id, token, rating } = req.body;
  if (token === null) {
    res.json({ message: "Not authenticated." });
    return;
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  if (!decoded) {
    res.json({ message: "Not authenticated." });
    return;
  }
  const User_studentId = decoded.studentId;
  console.log(User_studentId, Dish_id);
  const order = await prisma.rating.create({
    data: {
      Dish_id,
      User_studentId,
      rating,
    },
  });
  res.json(order);
}
