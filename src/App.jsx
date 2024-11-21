
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks ]= useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmark = (blog)=>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = (time) =>{
    const updatedReadingTime = readingTime + time;
    setReadingTime(updatedReadingTime);
  }

  return (
    <>
      <Header></Header>
      <main className='container mx-auto gap-6 lg:flex md:flex-row sm:flex-row max-sm:flex-row md:px-12 sm:px-8 max-sm:px-4'>
        <Blogs handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
