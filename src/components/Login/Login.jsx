import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    // console.log('google signin coming soon')
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log("ERROR", error);
        setUser(null);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signOut successFul");
        setUser(null);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };


  const handleLoginWithGithub =()=>{
    const provider2 = new GithubAuthProvider();
    signInWithPopup(auth,provider2)
    .then(result => {
        console.log(result.user);
        setUser(result.user)
    }).catch(error =>{
        console.log(error)
    })
  }
  return (
    <div>
      {/* <button
        onClick={handleGoogleSignIn}
        className="btn btn-success mr-10 text-white"
      >
        
        Login with google
      </button> */}

      {/* <button onClick={handleSignOut} className="btn btn-info">Sign Out</button> */}

      {/* {user ? (
        <button onClick={handleSignOut} className="btn btn-info">
          Sign Out
        </button>
      ) : (
        <button onClick={handleGoogleSignIn} className="btn btn-success mr-10 text-white">
          Login with Google
        </button>
      )} */}

      {user && (
        <div>
          <h3>{user.displayName}</h3>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}



        
      <button onClick={handleLoginWithGithub} className="btn btn-warning">Login with github</button>


    <button onClick={handleSignOut} className="btn btn-success">Signout</button>







    </div>
  );
}
