
import './App.css'
import Header from "./components/Header/Header"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleMarkAsRead = time => {
    setReadingTime(readingTime+time);
  }

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    
  }

  return (
    <>
     <Header> </Header>
     <div className='flex max-w-7xl mx-auto gap-8 my-10'>
     <Blogs handleBookmarks={handleBookmarks} handleMarkAsRead={handleMarkAsRead} ></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
     </div>

    </>
  )
}

export default App
