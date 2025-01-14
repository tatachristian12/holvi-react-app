import holviVideo from '../../../public/static/holvi-en.mp4'

function BodySix() {
   
    return(
        <div class="container">
    <h1 class="text-center fw-bold display-5 mt-5 pt-5">What is Holvi?</h1>
    <video class="w-100 mt-4 pb-5" controls>
      <source src={holviVideo} type="video/mp4"/>
    </video>
  </div>
    );
}
export default BodySix;