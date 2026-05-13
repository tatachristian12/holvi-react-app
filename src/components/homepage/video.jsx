import PropTypes from 'prop-types';

function Video(props) {
    
    return(
        <div>
       <video className="w-100 mt-4 pb-5" controls>
             <source src={props.websiteVideos} type="video/mp4"/>
           </video>
           </div>
    );
}

Video.propTypes = {
    websiteVideos: PropTypes.string.isRequired
};
export default Video;