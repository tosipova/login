import React from 'react'
import './styles/styles.css';

const VALID_PASSES = ['mannheim', 'infido']

function App() {

  const [authorized, setAuthorized] = React.useState(false)
  const [user, setUser] = React.useState('')
gmail.com
denitattatareturn (
    <div className="App">
      {!authorized && <Login setAuthorized={setAuthorized} setUser={setUser}></Login>}
      {authorized && <Dashboard userName={user} setAuthorized={setAuthorized}></Dashboard>}
    </div>
  );
}
function Login({ setAuthorized, setUser }) {
  const [form, setForm] = React.useState({ userName: '', password: '' });
  const [validation, setValidation] = React.useState('')

  const onChange = (event) => {
    // console.log(event.target.name, event.target.value)
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const onSubmit = (event) => {
    console.log('onSubmit')
    event.preventDefault()
    if (VALID_PASSES.includes(form.password)) {
      setForm({ userName: '', password: '' });
      setAuthorized(true)
      setUser(form.userName)
      setValidation('')
    } else {
      setValidation('Falsches Password.')
    }
  }

  return (
    <form>
      <div >{validation}</div>
      <div className="misc">
        <label>Username</label>
        <input type="userName" name="userName" onChange={onChange} value={form.userName} required />
      </div>
      <div className="misc">
        <label>Password</label>
        <input type="password" name="password" onChange={onChange} value={form.password} required />
      </div>
      <button onClick={onSubmit} type='submit'>Anmelden</button>
    </form>
  );
}

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
export default App;
