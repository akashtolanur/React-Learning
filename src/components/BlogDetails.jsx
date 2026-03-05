import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

 function BlogDetails() {
    const {id} = useParams()
    const [blog, setBlogs] = useState()

    useEffect(() => {
        async function getData() {
            const response = await fetch(`http://localhost:8080/api/blogs/${id}`)
            const result = await response.json()
            console.log(result)
            setBlogs(result)
        }
        getData()
    }, [id])

    return (
        <div>
                {blog &&( <article>
                    <h1>{blog.title}</h1>
                    
                    <p>{blog.body}</p>
                    <p>Written by {blog.author_name}</p>
                    {/* <button onClick={handleClick}>Delete</button> */}
                </article>)} 
        </div>
    )
}
export default BlogDetails
