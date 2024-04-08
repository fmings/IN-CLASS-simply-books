import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function AuthorCard({ authorObj }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={authorObj.image} alt={authorObj.first_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{authorObj.first_name}</Card.Title>
        <p className="card-text bold">{authorObj.email}</p>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    email: PropTypes.string,
    firebaseKey: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default AuthorCard;
