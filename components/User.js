import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';

function User() {
  const { user } = useAuth();
  console.warn({ user });

  return (
    <Card style={{ width: '20rem', margin: '10px' }}>
      <Card.Img variant="top" src={user.photoURL} alt="profile image" style={{ height: '300px' }} />
      <Card.Body>
        <Card.Title>{user.displayName}</Card.Title>
        <p className="card-text bold">Email Address: {user.email}</p>
        <p className="card-text bold">Last Sign In: {user.metadata.lastSignInTime}</p>
      </Card.Body>
    </Card>
  );
}

User.propTypes = {
  userObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    lastLogin: PropTypes.string,
  }).isRequired,
};

export default User;
