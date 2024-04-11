import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';
// import { getBooksByAuthor } from '../../api/bookData';
import BookCard from '../../components/BookCard';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  // const [books, setBooks] = useState([]);

  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  // const getAllAuthorBooks = () => {
  //   getBooksByAuthor(firebaseKey).then(setBooks);
  // };

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={authorDetails.image} alt={authorDetails.first_name} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h5>
            {authorDetails.first_name} {authorDetails.last_name}
            {authorDetails.favorite ? ' 🤍' : ''}
          </h5>
          Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
        </div>
      </div>
      <div className="text-white ms-5 details">
        <h2>{authorDetails.first_name}&apos;s Book(s)</h2>
        {authorDetails.books?.map((book) => (
          <BookCard bookObj={book} key={book.firebaseKey} />
        ))}
      </div>
    </>
  );
}
