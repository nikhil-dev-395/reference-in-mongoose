import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDatabase from "./src/Database/connect.database.js";
connectDatabase();
const app = express();
const port = process.env.PORT || 4040;
import { PostRouter } from "./src/Routes/Posts.Routes.js";
import { UserRouter } from "./src/Routes/Users.Routes.js";
app.use(express.json());
app.use(cors());

app.use("/api/post", PostRouter);
app.use("/api/user", UserRouter);

const Server = async () => {
  try {
    await app.listen(port, () => {
      console.log("server is listening on - " + port);
    });
  } catch (error) {
    console.log("error occurred at server staring -", error.message);
  }
};

Server();
