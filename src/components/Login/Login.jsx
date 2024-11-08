import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-success text-white"
      >
        {" "}
        Login with google
      </button>
      {user && <div>
            <h3>{user.displayName}</h3>
            <p>Email : {user.email}</p>
        </div>}
    </div>
  );
}
