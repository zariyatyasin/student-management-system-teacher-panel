import User from "../model/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (req, res) => {
  const { name, email, password } = req.body;
  if(!email || !password ){
    return res.status(404).json("Please fill up all");
  }
  const exists = await User.findOne({ email });

 
  if (exists) {
    return res.status(404).json("user already exits");
  }
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);

  try {
    const saveUser = await User.create({ name, email, password: hash });
    const Token = jwt.sign({ id: saveUser._id }, "shhhhh");
    res.status(200).json({ name, email, Token });
  } catch (error) {
    console.log(error);
  }
};
export const Login = async (req, res) => {
  const { name, email, password } = req.body;
  if(!email || !password ){
    return res.status(404).json("Please fill up all");
  }
  try {
    const exits = await User.findOne({ email });
    !exits && res.status(404).json("user not found");
    const validPassword = bcrypt.compareSync(req.body.password, exits.password);
    !validPassword && res.status(400).json("wrong password");
    const { password, ...others } = exits._doc;
    const Token = jwt.sign({ id: exits._id }, "shhhhh");
    res.status(200).json({ others, Token });
  } catch (error) {
    console.log(error);
  }
};
