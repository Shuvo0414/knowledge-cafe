import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarks, readingTime }) => {
  return (
    <div>
      <div className=" bg-[#603BEC25] rounded-lg text-center py-5 px-12 ">
        <h2 className=" text-2xl font-bold text-[#6047EC]">
          Spent time on read : {readingTime} min
        </h2>
      </div>
      <div className=" w-[411px] h-[1352px] bg-[#0B0B0B0D] mt-6 p-7 rounded-lg">
        <h3 className=" text-2xl font-bold">
          Bookmarked Blogs: {bookMarks.length}
        </h3>
        {bookMarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
