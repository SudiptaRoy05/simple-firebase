import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.init";

export default function Login() {
    const handleGoogleSignIn = () =>{
        // console.log('google signin coming soon')
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result)
        }).catch(error => {
            console.log('ERROR',error)
        })
    }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-success text-white"> Login with google</button>
    </div>
  )
}
