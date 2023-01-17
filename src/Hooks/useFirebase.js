import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initAuth from './../Firebase/firebase.init';

initAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [registeredUser, setRegisteredUser] = useState({});
    const [error, setError] = useState("");
    const [registerError, setRegisterError] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    console.log(name, email, password, registeredUser);
    const auth = getAuth();


    // =====> sign up part

    //sign up with email,  password
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateUserProfile();
                setRegisteredUser(result.user);
            })
            .catch(error => {
                setRegisterError(error.message);
            })
    }

    // update profile
    const updateUserProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg"
        })
    }


    //  =====> sign in part

    //sign in  email, password

    const userSignIn = () => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Google Sign in
    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //Github Sign in
    const SignInGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setError(error.message);
            })
    }

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        })
    }, []);

    return { signInGoogle, user, error, logOut, SignInGithub, name, setName, email, setEmail, password, setPassword, registeredUser, createUser, userSignIn, registerError, setUser, setError };
}

export default useFirebase;
