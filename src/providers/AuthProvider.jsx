import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from 'prop-types';

export const authContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // User creation
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Log in
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // LOg out
    const logOut = () => {
        return signOut(auth)
    }
    



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log("User in the current auth state", currentUser)
            setUser(currentUser)
        })
        return unSubscribe;
    },[]);


    const authInfo = {
        user,
        createUser,
        logOut,
        logIn
        
    }

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;


AuthProvider.propTypes = {
    children: PropTypes.object,
}