import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAuth } from "../../modules/auth";
import AuthForm from "../../components/auth/AuthForm";

const RegisterFormContainer = () => {
  const { register, form } = useSelector(({ auth }) => ({
    form: "register",
    register: auth.register
  }));
  const dispatch = useDispatch();

  const onChange = useCallback(e => {

  })

  const onChange = useCallback(e => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log(name, value)
    dispatch(
      createAuth({
        form:"register",
        key: name,
        value
      })
    );
  },[dispatch]);



  return <AuthForm form onChange={onChange} user={register} />;
};

export default RegisterFormContainer;
