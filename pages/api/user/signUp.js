// api route for signing up a user with prisma

import { prisma } from "../../../lib/prisma";
import { checkIfUserExists } from "../../../utils/checkIfUserExists";
export default async function handler(req, res) {
  const { studentId, password } = req.body;
  const userExists = await checkIfUserExists(studentId);
  if (userExists) {
    res.json({ error: "User already exists" });
    return;
  }
  const user = await prisma.user.create({
    data: {
      studentId: studentId,
      Password: password,
    },
  });
  res.json(user);
}
