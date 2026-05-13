import PropTypes from 'prop-types';

function Image(props) {
    
    return(
        <div>
          <img src={props.websiteImg} alt="second-img" width="90%" height="90%" />
        </div>
    );
}

Image.propTypes = {
    websiteImg: PropTypes.string.isRequired
};
export default Image;