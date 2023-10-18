import React from "react";
import ReduxProvider from "@/store/ReduxProvider";
import LoginForm from "./Form";

const LoginComponent = () => {
  return (
    <div className="h-screen w-full flex bg-orange-50">
      <div className="m-auto">
        <div className="flex justify-center">
          <h1 className="font-bold text-3xl text-orange-500">Login</h1>
        </div>
        <br />
        <ReduxProvider>
          <LoginForm />
        </ReduxProvider>
      </div>
    </div>
  );
};

export default LoginComponent;
