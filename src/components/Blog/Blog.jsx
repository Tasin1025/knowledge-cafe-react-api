import PropTypes from 'prop-types';
import { FiBookmark } from 'react-icons/fi';

const Blog = ({blog,handleBookmarks,handleMarkAsRead}) => {
    const {title,cover,author,author_img,reading_time,posted_date,hashtags} = blog;
    return (
        <div className='space-y-5 ml-4' >
            <img className='w-full max-h-[450px] ' src={cover} alt="" />
            <div className='flex justify-between py-8'>
                <div className='flex gap-4'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div >
                        <h3 className='text-2xl font-bold' > {author} </h3>
                        <p > {posted_date} </p>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <span className='text-base'> {reading_time} Minutes Read </span>
                    <button onClick={() => handleBookmarks(blog)} className='ml-2 '>  <FiBookmark> </FiBookmark></button>
                </div>
            </div>

            <h2 className="text-4xl font-bold"> {title} </h2>

            <p className='mt-8 text-gray-500'>
                {
                    hashtags.map((hash,idx) => <span key={idx} ><a href="">{hash} </a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-violet-600 font-bold  pb-4 underline'> Mark as Read </button>

        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleBookmarks: PropTypes.function,
    handleMarkAsRead : PropTypes.func
}
export default Blog;