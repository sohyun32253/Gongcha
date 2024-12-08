import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence, browserLocalPersistence } from 'firebase/auth';
import { auth } from '../firebase';
import '../Login.css'
import h1Login from '../images/h1_logo.png'

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('로그인 성공');
      setIsAuthenticated(true); // Update login state on successful login
      navigate('/Mypage'); // Redirect after login
    } catch (error) {
      alert('로그인 실패: ' + error.message);
    }
  };

  return (
    <main className='login'>
      <div className='login_banner'>
          <h2>로그인</h2>
      </div>

      <div className='login_form'>
        <h1><img src={h1Login} alt="logo" /></h1>
        <form onSubmit={handleLogin}>
          <p>
            <input type="email"
            placeholder="이메일" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            autoComplete="email" />
          </p>

          <p>
          <input type="password" 
            placeholder="비밀번호" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            autoComplete="current-password"
          />
          </p>

          <p>
            <label className='remember_login'>
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)
                } 
              />
              로그인 상태 유지
            </label>
          </p>
          <button type="submit" className='join_btn'>로그인</button>
        </form>
      </div>
    </main>
  );
}

export default Login;
