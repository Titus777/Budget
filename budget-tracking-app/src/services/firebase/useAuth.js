import { useState, useEffect } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = getAuth();

	useEffect(() => {
	  
		onAuthStateChanged(auth, (user) => {
			if (user) {
			
				setIsAuthenticated(true);
				return;
			}
			setIsAuthenticated(false);
			
			return;
		});
	  
	}, [setIsAuthenticated, auth])
	
	

	const createUser = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const signIn = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	const signUserOut = () => signOut(auth);

	return { createUser, isAuthenticated, signIn, signUserOut };

}
export default useAuth;
