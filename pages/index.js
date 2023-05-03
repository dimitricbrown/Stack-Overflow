// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  const user = { displayName: 'SDJ Steven Dev Johnson' }; // TODO: COMMENT OUT FOR AUTH
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h1>Group Project Member: {user.displayName}! </h1>
    </div>
  );
}

export default Home;
