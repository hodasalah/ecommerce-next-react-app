import { validateEmail } from "@/utils/validation";
import nc from "next-connect";
import db from "../../../utils/db";

const handler = nc()
handler.post(async (req, res) =>
{
  try {
    // connect out database
    await db.connectDb()
    console.log(req.body)
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter your name and email and your password." });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid Email." })
    }
    console.log(validateEmail(email))
    return res.status(200).json({ message: "Sign up successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
export default handler