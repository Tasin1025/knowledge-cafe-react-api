
import PropTypes from "prop-types"; 
const Bookmark = ({title}) => {
    
    return (
        <div>
            <h2 className="bg-white rounded-lg p-4 m-4"> {title} </h2>
        </div>
    );
};

Bookmark.propTypes = {
    title : PropTypes.array.isRequired
}

export default Bookmark;