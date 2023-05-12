import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useAuth } from './context/authContext';
import Loading from '../components/Loading';
import Signin from '../components/Signin';
import NavBarAuth from '../components/NavBarAuth';
import SideNavBar from '../components/SideNavBar';
import Footer from '../components/Footer';
import RightCard from '../components/rightCard';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const { user, userLoading } = useAuth();

  // if user state is null, then show loader
  if (userLoading) {
    return <Loading />;
  }

  // what the user should see if they are logged in
  if (user) {
    return (
      <>
        <NavBarAuth /> {/* NavBar only visible if user is logged in and is in every view */}
        <div className="main">
          <SideNavBar />
          <div className="container">
            <Row>
              <Col sm={8}>
                <Component {...pageProps} />
              </Col>
              <Col sm={4}>
                <RightCard />
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return <Signin />;
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
