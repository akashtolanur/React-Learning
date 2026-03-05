import { createBlog, getBlogs, getBlog } from "../model/blogModel.js"

export async function addBlog(req, res) {
    const { title, body, author_name } = req.body
    console.log("requestedBody", req.body)

    try {
        const newBlog = await createBlog(title, body, author_name)
        res.status(201).json(newBlog)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

export async function getAllBlogs(req, res) {

    try {
        const allblogs = await getBlogs()
        res.status(200).json(allblogs)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }

}

export async function getOneBlog(req, res) {

    try {
        const id=req.params.id
        const blog = await getBlog(id)
        res.status(200).json(blog)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
    
}