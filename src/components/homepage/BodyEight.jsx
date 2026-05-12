import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import customerOne from '../../../public/static/customer1.jpg'
import customerTwo from '../../../public/static/customer2.jpg'
import customerThree from '../../../public/static/customer3.jpg'
import Cards from './Cards';
import { Link } from 'react-router-dom';


function BodyEight() {

    return (
        <div className='container'>
            <h1 class="pt-5 mt-5 pb-5 mb-5 text-center fw-bold display-5">Happy Holvi customers</h1>
            <div class="row mb-5 pb-5 mx-5 px-5">
                
                    <Cards cardtitle="A nutritionist shares her recipe for financial wellbeing" cardtext="‘Holvi has been invaluable in helping me follow cash flow in an easy, visual
                                way – in real time!‘" cardimage={customerOne} />
                
                
                <Cards cardtitle="A kombucha startup owner finds balance in work life" cardtext="‘Holvi got our business up and running smoothly – and it’s still making life
                                easier every day.’" cardimage={customerTwo} />
                
                
                <Cards cardtitle="Albert loves marketing. But paperwork? Not so much." cardtext="‘I can manage most of my finances on the go from my phone. No need to put things
                                off till I get home." cardimage={customerThree} />
                
            </div>
       </div>
    );
}
export default BodyEight;