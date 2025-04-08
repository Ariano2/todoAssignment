import { useSelector } from 'react-redux';
import './App.css';
import Auth from './components/Auth';
import NavBar from './components/NavBar';
import QuoteBar from './components/QuoteBar';
import Task from './components/Task';

function App() {
  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);
  return (
    <>
      <NavBar />
      {!isLoggedIn && (
        <div className="h-screen flex items-center">
          <Auth />
        </div>
      )}
      {isLoggedIn && (
        <>
          <QuoteBar />
          <Task />
        </>
      )}
    </>
  );
}

export default App;
