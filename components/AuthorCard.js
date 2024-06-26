import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteAuthorBooks } from '../api/mergedData';
import { updateAuthor } from '../api/authorData';

function AuthorCard({ authorObj, onUpdate }) {
  const toggleFavorite = () => {
    if (authorObj.favorite) {
      updateAuthor({ ...authorObj, favorite: false }).then(onUpdate);
    } else {
      updateAuthor({ ...authorObj, favorite: true }).then(onUpdate);
    }
  };

  const deleteThisAuthor = () => {
    if (window.confirm(`Delete ${authorObj.first_name}?`)) {
      deleteAuthorBooks(authorObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '21rem', margin: '10px' }}>
      <Card.Img variant="top" src={authorObj.image} alt={authorObj.first_name} style={{ height: '400px' }} />
      <Card.Body>
        <Card.Title>{authorObj.first_name} {authorObj.last_name}</Card.Title>
        <p className="card-text bold">{authorObj.email}</p>
        <Button variant="light" className="m-2" onClick={toggleFavorite}>{authorObj.favorite ? '❤️' : '🤍'}</Button>
        <Link href={`/author/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
        {/* DYNAMIC LINK TO EDIT THE BOOK DETAILS  */}
        <Link href={`/author/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" className="m-2" onClick={deleteThisAuthor}>
          DELETE
        </Button>
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
    favorite: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default AuthorCard;
