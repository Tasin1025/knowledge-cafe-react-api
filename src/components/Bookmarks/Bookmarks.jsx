
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md: w-1/3">
            <h2 className="text-2xl"> bookmarks: {bookmarks.length}  </h2>
           
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