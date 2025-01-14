import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import customerOne from '../../../public/static/customer1.jpg'
import customerTwo from '../../../public/static/customer2.jpg'
import customerThree from '../../../public/static/customer3.jpg'
import { Link } from 'react-router-dom';


function BodyEight() {

    return (
        <div className='container'>
            <h1 class="pt-5 mt-5 pb-5 mb-5 text-center fw-bold display-5">Happy Holvi customers</h1>
            <div class="row mb-5 pb-5 mx-5 px-5">
                <div class="col-md-6 col-lg-4 col-12 mt-5">
                    <Card style={{ width: '90%' }} className="card px-3 pt-4 pb-3 bg-body-tertiary rounded-0 border-0">
                        <Card.Img variant="top" src={customerOne} class="card-img-top rounded-circle" />
                        <Card.Body>
                            <Card.Title>A nutritionist shares her recipe for financial wellbeing</Card.Title>
                            <Card.Text>
                                ‘Holvi has been invaluable in helping me follow cash flow in an easy, visual
                                way – in real time!‘
                            </Card.Text>
                            <Link to="#" class="btn btn-dark rounded-0 w-100 mt-5 mb-3">Read story</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-md-6 col-lg-4 col-12 mt-5">
                    <Card style={{ width: '90%' }} className="card px-3 pt-4 pb-3 bg-body-tertiary rounded-0 border-0">
                        <Card.Img variant="top" class="card-img-top rounded-circle" src={customerTwo} />
                        <Card.Body>
                            <Card.Title>A kombucha startup owner finds balance in work life</Card.Title>
                            <Card.Text class="mt-4">
                                ‘Holvi got our business up and running smoothly – and it’s still making life
                                easier every day.’
                            </Card.Text>
                            <Link to="#" class="btn btn-dark rounded-0 w-100 mt-5 mb-3">Read story</Link>
                        </Card.Body>
                    </Card>
                </div>
                <div class="col-md-6 col-lg-4 col-12 mt-5">
                    <Card style={{ width: '90%' }} className="card px-3 pt-4 pb-3 bg-body-tertiary rounded-0 border-0">
                        <Card.Img variant="top" class="card-img-top rounded-circle" src={customerThree} />
                        <Card.Body>
                            <Card.Title>Albert loves marketing. But paperwork? Not so much.</Card.Title>
                            <Card.Text>
                                ‘I can manage most of my finances on the go from my phone. No need to put things
                                off till I get home.’
                            </Card.Text>
                            <Link to="#" class="btn btn-dark rounded-0 w-100 mt-5 mb-3">Read story</Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}
export default BodyEight;