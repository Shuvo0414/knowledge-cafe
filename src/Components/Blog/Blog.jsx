import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  const { id, cover, title, author, author_img, reading_time, hashtags } = blog;
  // console.log(blog);
  return (
    <div className=" mb-10">
      <img src={cover} alt={`Cover ${cover}`} />
      <div className=" flex justify-between items-center">
        <div className=" flex items-center gap-4 mt-8">
          <img className=" w-16" src={author_img} alt="" />
          <h3 className=" text-2xl font-bold">{author}</h3>
        </div>
        <div>
          <p>
            {reading_time} min red{" "}
            <button onClick={() => handleAddToBookMark(blog)}>
              <FaBookmark></FaBookmark>
            </button>
          </p>
        </div>
      </div>
      <h1 className=" font-bold text-4xl mt-4 mb-4">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            {" "}
            <a>#{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className=" mt-5 text-xl font-semibold text-[#6047EC] underline"
      >
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
