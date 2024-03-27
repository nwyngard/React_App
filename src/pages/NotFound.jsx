import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="notFoundWrapper">
      <Container>     
        <h2>Uh Oh!</h2>
        <p>The page you were looking for doesn't exist</p>
        <Link to="/" className="homeBtn">
          <FiHome id="btn-icon" />
        </Link>
      </Container>
    </div>
  )
}

export default NotFound;