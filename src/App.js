import React from 'react'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import './styles/styles.css';


function App() {

  const [authorized, setAuthorized] = React.useState(false)
  const [user, setUser] = React.useState("")

  return (
    <div className="App">
      {!authorized && <Login setAuthorized={setAuthorized} setUser={setUser}></Login>}

      {authorized && <Dashboard userName={user} setAuthorized={setAuthorized}></Dashboard>}
    </div>
  );
}

export default App;
