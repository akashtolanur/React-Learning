
import { useState } from "react";
import { BlogList } from "./BlogList";

function BlogForm() {

    const [makeRefresh, setMakeRefresh]=useState(false)

    async function handleSubmit(event) {     
        event.preventDefault();
        const formData = new FormData(event.target)
        const title = formData.get("title")
        const body = formData.get("body")
        const author_name = formData.get("author_name")
        const blog = {
            title, body, author_name
        }
        console.log(blog);

        const response = await fetch("http://localhost:8080/api/blogs", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(blog)
        })
        if(response.ok){
            setMakeRefresh(!makeRefresh)

        }
        const result = await response.json()
       
        event.target.reset()
        console.log(result, "blog added")
    }

    function test(){
        console.log("call from child");
    }

    return (
        <div>
            <div className="max-w-lg m-auto flex justify-center items-center bg-gray-50 my-8 ">
                <form onSubmit={handleSubmit} className=" my-8   bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                    <h2 className="text-center font-bold text-xl ">Add a new Blog</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium text-lg mb-1" htmlFor="title">Title:</label>
                        <input  className="w-full border border-gray-300 focus:border-blue-500 rounded-md p-2 focus:outline-none"
                            type="text"
                            name="title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium text-lg mb-1" htmlFor="body">Body:</label>
                        <textarea className="w-full border border-gray-300 focus:border-blue-500 rounded-md p-2 focus:outline-none" name="body" rows={4}></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium text-lg mb-1" htmlFor="author_name">Author Name:</label>
                        <input className="w-full border border-gray-300 focus:border-blue-500 rounded-md p-2 focus:outline-none"
                            type="text"
                            name="author_name"
                        />
                    </div>
                    <button className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition" type="submit">Submit</button>
                </form>
            </div>

            <div>
                <BlogList      
                makeRefresh={makeRefresh}   
                test={test}        
                />
            </div>
        </div>
    )
}
export default BlogForm