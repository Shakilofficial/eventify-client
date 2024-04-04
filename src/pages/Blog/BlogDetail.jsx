import { useState } from "react";
import { Helmet } from "react-helmet-async";

import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import axiosSecure from "../../api";
import useAuth from "../../hooks/useAuth";

const BlogDetail = () => {
  const blog = useLoaderData();
  const { user } = useAuth();
  const { _id, image, title, description, author_name, author_img, date } =
    blog;

  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await axiosSecure.post("/blog/comment", {
        displayName: user.displayName,
        photoURL: user.photoURL,
        email: user.email,
        blogId: _id,
        comment: comment,
      });
      setComment("");
      setSubmitting(false);
      toast.success("Your comment has been submitted successfully!");
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error(
        "An error occurred while submitting your comment. Please try again later."
      );
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-screen-xl font-mons mx-auto p-4 md:p-6">
      <Helmet>
        <title>EventiFy | Blog: {title} </title>
      </Helmet>
      <div className="overflow-hidden flex flex-col max-w-6xl mx-auto">
        <img
          className="w-full h-[600px]"
          src={image}
          alt="Sunset in the mountains"
        />
        <div className="relative -mt-24 md:-mt-20 lg:-mt-14 px-4 md:px-12 pt-5 md:pt-8 pb-16 bg-gradient-to-b from-rose-50 to-amber-50 m-10">
          <p className="font-semibold text-xl md:text-2xl text-amber-600 hover:text-rose-600 transition duration-500 ease-in-out inline-block">
            {title}
          </p>
          <div className="mt-4 font-mons flex items-center mb-3">
            <div className="flex items-center gap-1 mr-6">
              <img
                className="object-cover h-8 w-8 rounded-full"
                src={author_img}
                alt="Author Avatar"
              />
              <p className="mx-2 font-semibold">{author_name}</p>
            </div>
            <span className="font-semibold">{date}</span>
          </div>
          <p className="text-gray-900 text-justify">{description}</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center items-center gap-5"
      >
        <div className="flex justify-center items-center gap-2">
          <h3 className="text-black font-bold text-xl">{user.displayName}</h3>
          <img
            className="object-cover h-10 w-10 rounded-full"
            src={user.photoURL}
            alt="Author Avatar"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center font-mons">
          <input
            type="text"
            placeholder="Leave your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none mb-2 md:mb-0 md:mr-2"
          />
          <button
            type="submit"
            className="bg-rose-800 font-semibold text-white px-4 py-2 rounded-r-md hover:bg-rose-700 focus:outline-none"
          >
            Comment
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogDetail;
