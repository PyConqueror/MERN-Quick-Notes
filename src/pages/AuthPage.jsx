import SignUpForm from "../components/SignUpForm"
import LoginForm from "../components/LoginForm"

function AuthPage({ setUser }) {
    return (
        <>
        <h1>AuthPage</h1>
        <SignUpForm setUser={setUser}/>
        <LoginForm setUser={setUser}/>
        </>
    )
}

export default AuthPage