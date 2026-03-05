import express from "express";
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const app=express()

import { addBlog, getAllBlogs, getOneBlog } from "./controller/blogController.js";
//middleware to parse reqbody into json 
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})

app.use(cors({
    origin: `http://localhost:${process.env.FRONTEND_PORT}`, // allow your frontend
    methods: ["GET", "POST", "PUT", "DELETE"], 
}))



app.post("/api/blogs", addBlog)
app.get("/api/blogs", getAllBlogs)
app.get("/api/blogs/:id", getOneBlog)

app.listen(8080, ()=>{
    console.log("Server is running on port 8080");
})