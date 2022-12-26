// send the order and the user to the backend
import { prisma } from "../../../lib/prisma";
import jwt from "jsonwebtoken";
export default async function handler(req, res) {
  const { Dish_id, date, token } = req.body;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const User_studentId = decoded.studentId;
  const order = await prisma.order.create({
    data: {
      Dish_id,
      User_studentId,
      date,
    },
  });
  res.json(order);
}
