import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookMarks, setBookMarks] = useState([]);

  // set reading time sate
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMark = (blog) => {
    // console.log(blog);
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  // handle mark as read button click
  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time);

    // remove the read blog from bookmark
    const remainingBookmarks = bookMarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookMarks(remainingBookmarks);
  };

  return (
    <>
      <Header></Header>
      <div className="container mx-auto px-8 md:px-10 lg:px-24 p-5 my-10 flex gap-8">
        <Blogs
          handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
