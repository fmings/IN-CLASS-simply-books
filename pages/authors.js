import React, { useEffect, useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import { getAuthors } from '../api/authorData';
import { useAuth } from '../utils/context/authContext';

function ViewAuthorCards() {
  const [authors, setAuthors] = useState([]);

  const { user } = useAuth();

  const getAllAuthors = () => {
    getAuthors(user.uid).then(setAuthors);
  };

  useEffect(() => {
    getAllAuthors();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="d-flex flex-wrap">
        {authors.map((author) => (
          <AuthorCard authorObj={author} key={author.firebaseKey} onUpdate={getAllAuthors} />
        ))}
      </div>
    </>
  );
}

export default ViewAuthorCards;
