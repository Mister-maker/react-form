import { auth, provider } from "../config/firebase";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, provider);
        navigate("/");
    };

    const signUpForm = async (data) => {
        await createUserWithEmailAndPassword(auth, data?.email, data?.password);
        navigate("/");
    };
    return (
        <div>
            <Form title="Sign Up" signUpForm={signUpForm} />
            <button className="google-btn" onClick={signInWithGoogle}>
                <FaGoogle /> Sign in with Google
            </button>
        </div>
    );
};

export default LoginPage;
