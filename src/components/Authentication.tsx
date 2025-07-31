import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Authentication = ({ pageType }: { pageType: boolean }) => {
  interface RegistrationData {
    firstName: string
    lastName: string
    email: string
    password: string
  }

  const [signInPage, setSignInPage] = useState(pageType)

  const [registerData, setRegisterData] = useState<RegistrationData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })

  const signUser = () => {
    // const queryParams = new URLSearchParams(loginData).toString()

    fetch(`http://localhost:8080/auth/login`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then((res) => {
        if (!res.ok) throw new Error('Login failed')
        return res.text()
      })
      .then((message) => {
        alert(message)
      })
      .catch((err) => {
        console.error('Login error:', err)
        alert('Invalid credentials')
      })
  }

  const registerUser = () => {
    fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(registerData),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Registration failed')
        return res.text()
      })
      .then((msg) => {
        alert(msg)
      })
      .catch((err) => {
        console.error('Error registering:', err)
      })
  }

  return (
    <div>
      {signInPage ? (
        <div>
          <div className="text-center my-5 text-2xl">Sign In to Disney</div>
          <div>
            <Input
              placeholder="Email"
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <Input
              placeholder="Password"
              type="password"
              className="my-3"
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
          </div>
          <Button onClick={signUser} className="w-full mt-3">
            Log In
          </Button>
          <p className="mt-3 text-center hover:cursor-pointer" onClick={() => setSignInPage(false)}>
            Don’t have an Account? Create a new one
          </p>
        </div>
      ) : (
        <div>
          <div className="text-center my-5 text-2xl">Create a New Account</div>
          <div className="flex">
            <Input
              placeholder="First Name"
              onChange={(e) => setRegisterData({ ...registerData, firstName: e.target.value })}
              className="mr-2"
            />
            <Input
              placeholder="Last Name"
              onChange={(e) => setRegisterData({ ...registerData, lastName: e.target.value })}
              className="ml-2"
            />
          </div>
          <Input
            placeholder="Email"
            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            className="my-3"
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
          />
          <Button onClick={registerUser} className="w-full mt-3 bg-white border-2 border-white">
            Sign Up
          </Button>
          <p className="mt-3 text-center hover:cursor-pointer" onClick={() => setSignInPage(true)}>
            Already have an Account? Sign in here
          </p>
        </div>
      )}
    </div>
  )
}

export default Authentication
