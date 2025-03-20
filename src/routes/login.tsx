import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Error, Input, Switcher, Title, Wrapper, Form } from "../components/auth-components";
import GithubButton from "../components/github-btn";

export default function Login(){
    
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {target: {name, value}} = e;
        if(name === "email"){
            setEmail (value)
        } else if(name === "password"){
            setPassword (value)
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if(isLoading || email === "" || password == "") return;
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);

            navigate("/");
        } catch (e) {
            if(e instanceof FirebaseError){
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
    }

    return (
    <Wrapper>
        <Title>Join X</Title>
        <Form onSubmit={onSubmit}>
            <Input onChange={onChange} name="email" placeholder="Email" type="email" value={email} required/>
            <Input onChange={onChange} name="password" placeholder="Password" type="password" value={password} required/>
            <Input type="submit" value="Login"/>
        </Form>
        {error !== "" ? <Error>{error}</Error> : null}
        <Switcher>
            Don't have an account?{" "}
            <Link to="/create-account">Create Account &rarr; </Link>
        </Switcher>
        <GithubButton />
    </Wrapper>
    )
}