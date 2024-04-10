import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
// import { useAuth } from '../utils/context/authContext';

function Signout() {
  // const { user } = useAuth();

  return (
    <div>
      <Button type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
    </div>
  );
}

export default Signout;
