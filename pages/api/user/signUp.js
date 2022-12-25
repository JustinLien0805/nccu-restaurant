// api route for signing up a user with prisma

import { prisma } from "../../../db";

export default async function handler(req, res) {
  const { studentId, password } = req.body;
  const user = await prisma.user.create({
    data: {
      studentId: studentId,
      Password: password,
    },
  });
  res.json(user);
}
