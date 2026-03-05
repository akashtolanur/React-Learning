
import {Link} from "react-router-dom"
import { useEffect, useState } from "react"

export function BlogList({makeRefresh=false, test}){

    
    const [blogs, setBlogs]=useState([])
    useEffect(()=>{
        test()
    },[])
    
    useEffect(()=>{
        async function getData() {
        const response= await fetch("http://localhost:8080/api/blogs")
        const result= await response.json()    
       setBlogs(result) 
    }
    getData()
    }, [makeRefresh])

    

    return(
        <div>
            <h1 className="text-center text-xl text-red-500 font-bold pb-6">All Blogs</h1>
            <div className="flex flex-wrap max-w-lg m-auto" >
                {blogs.length>0 ? 
                ( blogs?.map((blog)=>(
                    <Link to={`/blogs/${blog.id}`} key={blog.id}>
                    <div className="p-2 mx-2 border border-gray-300" key={blog.id}>
                        <h3 className="font-semibold">{blog.title}</h3>
                        <p className="text-sm text-gray-500">{blog.author_name}</p>
                    </div>
                    </Link>  
                ))
                ):(
                    <p className="text-center text-gray-500">Loading blogs...</p>
                )}
            </div>

        </div>
    )
}