import holviVideo from '../../../public/static/holvi-en.mp4'
import Video from './video';

function BodySix() {
   
    return(
        <div className="container">
    <h1 className="text-center fw-bold display-5 mt-5 pt-5">What is Holvi?</h1>
    <Video websiteVideos={holviVideo}/>
  </div>
    );
}
export default BodySix;