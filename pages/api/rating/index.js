// send the rating and the user to the backend
import { prisma } from "../../../lib/prisma";
export default async function handler(req, res) {
  const { Dish_id, User_studentId, rating } = req.body;

  const order = await prisma.rating.create({
    data: {
      Dish_id,
      User_studentId,
      rating,
    },
  });
  res.json(order);
}
