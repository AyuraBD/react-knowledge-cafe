import { FaBeer, FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleBookmark, handleReadingTime}) => {
    const {title, cover, author_img, author, published_date, description, hash_tags, reading_time} = blog;
  return (
    <div className="lg:mb-20 md:mb-12 sm:mb-8 max-sm:mb-4">
        <img src={cover} alt={`cover picture  of ${title}`} />
        <div className="flex justify-between items-center mt-5">
            <div className="flex items-center mb-2">
                <img className="mr-6" src={author_img} alt="" />
                <div>
                    <h3 className="tex-2xl font-bold">{author}</h3>
                    <p>{published_date}</p>
                </div>

            </div>
            <div className='flex items-center'>
                <p className='mr-2'>0{reading_time} minutes read</p>
                <button onClick={()=>handleBookmark(blog)}><FaBookmark/></button>
            </div>

        </div>
        <h2 className="text-3xl font-semibold mb-1">{title}</h2>
        <p className="text-gray-400 mb-2">
            {
                hash_tags.map((hash, idx) => <span key={idx} className="mr-3"><a href="">{hash}</a></span>)
            }
        </p>
        <button onClick={()=>handleReadingTime(reading_time)} className='text-purple-600 font-semibold'>Mark as read</button>
    </div>
  )
}

export default Blog;