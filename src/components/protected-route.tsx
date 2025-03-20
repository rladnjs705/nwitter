import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({
    children
}: {
    children: React.ReactNode
}) {
    const navigate = useNavigate();
    
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            navigate("/login");
        }
    });

    return children;
}