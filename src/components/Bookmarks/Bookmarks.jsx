
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 border-4 bg-slate-200 rounded-lg">
            <h3 className='text-2xl text-left font-bold p-4 text-violet-600 bg-white m-4 rounded-lg'> Reading time : {readingTime} Minutes </h3>
            <h2 className="text-2xl text-left font-bold p-4"> Bookmarks Blogs : {bookmarks.length}  </h2>
           
           {
            bookmarks.map((bookmark,idx) => <Bookmark key={idx} title={bookmark.title} > </Bookmark> )
           }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired,
    readingTime : PropTypes.number
}

export default Bookmarks;