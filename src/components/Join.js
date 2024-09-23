import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';
import '../Join.css'
import h1Login from '../images/h1_logo.png'

function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Firestore에 사용자 정보 저장
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email
      });

      alert('회원가입 성공');
    } catch (error) {
      alert('회원가입 실패: ' + error.message);
    }
  };

  return (
    <main className='join'>
    <div className='join_banner'>
          <h2>회원가입</h2>
      </div>

      <div className='join_form'>
      <h1><img src={h1Login} alt="logo" /></h1>
    <form onSubmit={handleRegister}>
      <p><input type="text" placeholder="이름" value={name} onChange={(e) => setName(e.target.value)} /></p>
      <p><input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} /></p>
      <p><input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} /></p>
      <button type="submit" className='join_btn'>회원가입</button>
    </form>
    </div>
    </main>
  );
}

export default Join;
