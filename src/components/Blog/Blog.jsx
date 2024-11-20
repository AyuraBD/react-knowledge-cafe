const Blog = ({blog}) => {
    const {title, cover, author_img, author, published_date, description, hash_tags, reading_time} = blog;
  return (
    <div className="mb-12">
        <img src={cover} alt={`cover picture  of ${title}`} />
        <div className="flex justify-between items-center mt-5">
            <div className="flex items-center">
                <img className="mr-6" src={author_img} alt="" />
                <div>
                    <h3 className="tex-2xl font-bold">{author}</h3>
                    <p>{published_date}</p>
                </div>

            </div>
            <div>
                <p>0{reading_time} minutes read</p>
            </div>

        </div>
        <h2 className="text-4xl font-semibold">{title}</h2>
        <p className="text-gray-400">
            {
                hash_tags.map((hash, idx) => <span key={idx} className="mr-3"><a href="">{hash}</a></span>)
            }
        </p>
    </div>
  )
}

export default Blog;