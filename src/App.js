import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import { useAuth0 } from "@auth0/auth0-react"
import './App.css';

function App() {
  const { isAuthenticated } = useAuth0();
  return (

    <div className="App">
      <header className="App-header">
        <img src={"https://inovecode.com/wp-content/uploads/2023/01/Copia-de-Copia-de-PI-Julio-2021-post-Insta-1080-%C3%97-600-px-1-180x100.png"} className="App-logo" alt="logo" />
        {
          isAuthenticated ? (<>
            <Profile />
            <Logout />
          </>) : (

            <Login />
          )
        }
      </header>
    </div>
  );
}

export default App;
