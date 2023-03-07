import User from "@/models/User";
import { createActivationToken } from '@/utils/tokens';
import { validateEmail } from "@/utils/validation";
import bcrypt from "bcrypt";
import nc from "next-connect";
import db from "../../../utils/db";
const handler = nc()
handler.post(async (req, res) =>
{
  try {
    // connect out database
    await db.connectDb()
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please enter your name and email and your password." });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid Email." })
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "This email is already exists." })
    }
    if (password.length < 8) {
      return res.status(400).json({ message: "Password must be at least 8 characters." })
    }
    const cryptedPassword = await bcrypt.hash('password', 12);
    const newUser = new User({ name, email, password: cryptedPassword })
    const addedUser = await newUser.save();

    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    })
    const url = `${ process.env.BASE_URL }/activate/${ activation_token }`
    res.send(url);

    return res.status(200).json({ message: "Sign up successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
export default handler