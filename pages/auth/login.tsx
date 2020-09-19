import Login from '../../feature/auth/Login';
import makeAuthURL from '../../feature/auth/makeAuthURL';

type PropsType = {
  authURL: string | null;
};

export function getServerSideProps() {
  const authURL = makeAuthURL();

  return {
    props: {
      authURL,
    },
  };
}

const LoginPage: React.FC<PropsType> = ({ authURL }) => (
  <Login authURL={authURL} />
);

export default LoginPage;
