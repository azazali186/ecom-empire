import ReduxProvider from '@/store/ReduxProvider'
import React from 'react'
import RegisterForm from './Form'

const RegisterComponent = () => {
  return (
    <div className="h-screen w-full flex bg-orange-50">
      <div className="m-auto">
        <div className="flex justify-center">
          <h1 className="font-bold text-3xl text-orange-500">Sign Up</h1>
        </div>
        <br />
        <ReduxProvider>
          <RegisterForm />
        </ReduxProvider>
      </div>
    </div>
  )
}

export default RegisterComponent