type PropsType = {
  authURL: string | null;
};

const Login: React.FC<PropsType> = ({ authURL }) => (
  <div>
    <p>Please login before you proceed</p>
    <a href={authURL}> login </a>
  </div>
);

export default Login;
