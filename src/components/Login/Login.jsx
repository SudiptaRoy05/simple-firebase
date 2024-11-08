import { GoogleAuthProvider } from "firebase/auth/web-extension"

export default function Login() {
    const handleGoogleSignIn = () =>{
        console.log('google signin coming soon')
        const provider = new GoogleAuthProvider();
    }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn btn-success text-white"> Login with google</button>
    </div>
  )
}
