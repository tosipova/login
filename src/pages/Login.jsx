import React from 'react'

const VALID_PASSES = ['mannheim', 'infido']

function Login({ setAuthorized, setUser }) {
    const [form, setForm] = React.useState({ userName: '', password: '' });
    const [validation, setValidation] = React.useState('')
  
    const onChange = (event) => {
     
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
  export default Login