import PostModel from "../Models/Post.Models.js";
import UserModel from "../Models/Users.Models.js";

const CreatePost = async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("User ID:", req.params.id);

    let postData = PostModel({
      post: req.body.post,
      user: req.params.id,
    });

    if (!postData.post || !postData.user) {
      return res
        .status(400)
        .json({ message: "Please enter post and user properly." });
    }

    let savePost = await postData.save();
    res.status(200).json({ message: "Post saved successfully", savePost });
  } catch (error) {
    console.error("Error creating post: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPost = async (req, res) => {
  try {
    let getPostData = await UserModel.findById(req.params.id);
    console.log({ user: req.params.id });
    res.status(200).json({ message: "user", getPostData });
  } catch (error) {
    console.log("error occurred at getting data of post - ", error.message);
    res
      .status(400)
      .json(
        { message: "error occurred at getting data of post" },
        error.message
      );
  }
};

export { CreatePost, getPost };
