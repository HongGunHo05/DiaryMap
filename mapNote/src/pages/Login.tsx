import { SideImg } from '../components/loginJoin/SideImg.tsx';
import { LoginInput } from '../components/loginJoin/loginInput/LoginInput.tsx';

const Login = () => {



  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <SideImg />
      <LoginInput />
    </div>
  );
};

export default Login;