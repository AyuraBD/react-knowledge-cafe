import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {

  return (
    <div>
      <h1 className='text-[20px] font-semibold p-4 text-center border border-purple-600 bg-purple-300 text-purple-700 rounded-md mb-4'>Spent time on read: {readingTime} min</h1>
        <div className='bg-gray-300 px-4 py-6 rounded-md'>
        <h2 className="text-[20px] mb-4">Bookmarked Blogs: {bookmarks.length}</h2>
          {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
          }
        </div>
    </div>
  )
}

export default Bookmarks