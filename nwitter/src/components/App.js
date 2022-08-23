import React, { useState } from 'react';
import AppRouter from './Router';
import firebase from "firebase/compat/app"
import "firebase/compat/auth";

function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  return <AppRouter isLogIn={isLogIn}/>;

}

export default App;
