import { useEffect, useState } from "react"
import Blog from "../Blog/Blog";
const Blogs = ({handleBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[]);
  return (
    <>
    <div>
      {
        blogs.map(blog => <Blog handleBookmark={handleBookmark} handleReadingTime={handleReadingTime} key={blog.id} blog={blog}></Blog>)
      }

    </div>
    </>

  )
}

export default Blogs