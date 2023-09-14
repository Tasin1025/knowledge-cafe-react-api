
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 border-4 bg-slate-200 rounded-lg">
            <h2 className="text-2xl text-left font-bold p-4"> Bookmarks Blogs : {bookmarks.length}  </h2>
           
           {
            bookmarks.map(bookmark => <Bookmark key={bookmarks.id} title={bookmark.title} > </Bookmark> )
           }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired
}

export default Bookmarks;