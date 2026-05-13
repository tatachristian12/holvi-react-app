import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Cards(props) {
    return (
        <div className="col-md-6 col-lg-4 col-12 mt-5">
            <Card style={{ width: '90%' }} className="card px-3 pt-4 pb-3 bg-body-tertiary rounded-0 border-0">
                {/* Note: changed 'class' to 'className' to fix React warnings */}
                <Card.Img variant="top" src={props.cardimage} className="card-img-top rounded-circle"/>
                <Card.Body>
                    <Card.Title>{props.cardtitle}</Card.Title>
                    <Card.Text>
                        {props.cardtext}
                    </Card.Text>
                    <Link to="#" className="btn btn-dark rounded-0 w-100 mt-5 mb-3">Read story</Link>
                </Card.Body>
            </Card>
        </div>
    );
}

// Fixed: Target the correct component name and added all missing props
Cards.propTypes = {
    cardimage: PropTypes.string,
    cardtitle: PropTypes.string.isRequired,
    cardtext: PropTypes.string.isRequired
};

export default Cards;
