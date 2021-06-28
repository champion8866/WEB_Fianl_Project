export default function SignUpSec({ handleSignUp, setUserName, setPassword, setPassword2, setEmail }) {
  const handleChange = (func) => (event) => {
    func(event.target.value)
  }
  return (
      <div className='signIn-sec'>
        <div className='signIn-input-wrapper'>
          <span className='signIn-input'>
            <label for='username'>Username</label>
            <input
              type="text"
              id="username"
              onChange={handleChange(setUserName)}/>
          </span>
          <span className='signIn-input'>
            <label for='email'>Email</label>
            <input
              type="email"
              id="email"
              onChange={handleChange(setEmail)}/>
          </span>
          <span className='signIn-input'>
            <label for='password'>Password</label>
            <input
              type="password"
              id="password"
              onChange={handleChange(setPassword)}/>
          </span>
          <span className='signIn-input'>
            <label for='password2'>Confirm Password</label>
            <input
              type="password"
              id="password2"
              onChange={handleChange(setPassword2)}/>
          </span>
        </div>
        <div className='signIn-button-wrapper'>
          <span
          className='signUp-button text-button'
          onClick={handleSignUp}>
            Sign Up
          </span>
        </div>
      </div>
    )
}
