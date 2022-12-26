// send the order and the user to the backend
import { prisma } from "../../../lib/prisma";
export default async function handler(req, res) {
  const { Dish_id, User_studentId, date } = req.body;
  console.log(Dish_id, User_studentId, date)
  const order = await prisma.order.create({
    data: {
      Dish_id,
      User_studentId,
      date,
    },
  });
  res.json(order);
}
