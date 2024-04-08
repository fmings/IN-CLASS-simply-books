import { useRouter } from 'next/router';
import React from 'react';

export default function ViewAuthor() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  return (
    <div>
      console.warn({ firebaseKey })
    </div>
  );
}
