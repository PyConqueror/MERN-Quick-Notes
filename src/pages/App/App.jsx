import './App.css';
import { useState } from "react"
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage';
import NavBar from '../../components/NavBar';
import MainPage from '../MainPage';
import AddNotePage from '../AddNotePage';

export default function App() {
  const [user, setUser] = useState(getUser)

  return (
    <main className="App">
      { user ?
      <>
        <NavBar user={user} setUser={setUser}/>
        <Routes>
          <Route path='/' element={<MainPage user={user}/>}/>
          <Route path='/addnote' element={<AddNotePage user={user}/>}/>
        </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>

      }
    </main>
  );
};
  