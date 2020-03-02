import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createAuth } from "../../modules/auth";
import AuthForm from '../../components/auth/AuthForm';

const RegisterFormContainer = () => {


    const { register, form } =useSelector(({auth}) => ({
        register: auth.register,
        form:"register",
    })); 
    const dispatch = useDispatch();

    useEffect(() => {
   
    },[form])

    return (
        <AuthForm form />
    );
};

export default RegisterFormContainer;