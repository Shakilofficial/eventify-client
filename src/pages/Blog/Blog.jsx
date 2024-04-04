import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="w-full mx-auto grid grid-cols-1 gap-5 my-8 px-4">
      <Helmet>
        <title>EventiFy | Blogs</title>
      </Helmet>
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="p-2 flex flex-col md:flex-row  max-w-5xl mx-auto overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out bg-gradient-to-l from-rose-50 to-amber-100"
        >
          <div className="p-2 sm:w-1/2">
            <img
              className="rounded object-cover w-full sm:h-80 h-60"
              src={blog.image}
              alt="Blog Article"
            />
          </div>
          <div className="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
            <div className="flex items-center mb-1">
              <h1 className="font-mons sm:mt-2 text-xl font-semibold">
                {blog.title}
              </h1>
            </div>
            <div className="">
              <p className="font-mons">
                {blog.description.substring(0, 400)}...
                <span className="ml-2">
                  <Link
                    className="hover:text-rose-500 text-amber-600 font-semibold"
                    to={`${blog._id}`}
                  >
                    Read More
                  </Link>
                </span>
              </p>
            </div>
            <div className="mt-4 font-mons flex items-center">
              <div className="flex items-center gap-1 mr-6">
                <img
                  className="object-cover h-10 w-10 rounded-full"
                  src={blog.author_img}
                  alt="Author Avatar"
                />
                <p className="mx-2 text-lg font-semibold">{blog.author_name}</p>
              </div>
              <span className="font-semibold">{blog.date}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
