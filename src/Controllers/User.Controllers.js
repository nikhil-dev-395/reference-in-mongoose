import UserModel from "../Models/Users.Models.js";

const CreateUser = async (req, res) => {
  try {
    let { userName, email, password } = req.body;

    if (!userName || !email || !password) {
      res.status(400).json({ message: "please enter form elements properly ..." });
    }
    let createUserData = UserModel({
      userName,
      email,
      password,
    });

    let saveUser = await createUserData.save();
    res.status(200).json({ message: "user data saved successfully", saveUser });
    console.log("data saved successfully");

  } catch (error) {

    console.log("error is occurred at creating user ", error.message);
    if (error.code === 11000) {

      return res.status(400).json({ error: "Email already exists" });

    }
    
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { CreateUser };
