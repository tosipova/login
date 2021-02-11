import React from 'react';


function Dashboard({ userName, setAuthorized }) {
  const logout = () => setAuthorized(false)
  return (
    <div className="misc">
      <div>Dashboard</div>
      <div>Hallo, {userName} </div>
      <div><button onClick={logout}>Ausloggen</button></div>
    </div>
  );
}
export default Dashboard