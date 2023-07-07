import React from "react";
import styles from "../styles/Login.module.css";
import { useForm } from "react-hook-form";
import LoginSchema from "../schema/LoginSchema";
import loginApi from "../api/LoginAPI";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function RegistrationForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const onSubmit = async (data) => {
    const result = await loginApi(data);
    if (result == true) {
      alert("Login Successful.");
      navigate("/HomePage");
    } else if (result == false) {
      alert("Invalid credentials");
    } else {
      alert("Login failed");
    }
  };

  const Name = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
      },
    },
  };
  const Email = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
      },
    },
  };
  const Password = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
      },
    },
  };
  const myRegister = () => {
    navigate("/");
  };

  const myForgot = () => {
    navigate("/ForgotPassword");
  };

  return (
    <div className={styles.body}>
      <div className={styles.register}>Login</div>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
        autoComplete="off"
        // drag
        animate={{
          x: 660,
        }}
        whileHover={{
          scale: 1.1,
        }}
      >
        <div>
          <motion.label
            className={styles.label}
            animate="visible"
            variants={Email}
            initial="hidden"
          >
            Email
          </motion.label>
          <motion.input
            className={styles.input}
            animate="visible"
            variants={Email}
            initial="hidden"
            {...register("email")}
            placeholder="E-mail"
          />
          {errors.email && (
            <p className={styles.message}>{errors.email.message}</p>
          )}
        </div>
        <div>
          <motion.label
            className={styles.label}
            animate="visible"
            variants={Password}
            initial="hidden"
          >
            Password
          </motion.label>
          <motion.input
            className={styles.input}
            animate="visible"
            variants={Password}
            initial="hidden"
            type="password"
            {...register("password")}
            placeholder="Password"
          />
          {errors.password && (
            <p className={styles.message}>{errors.password.message}</p>
          )}
        </div>

        <button className={styles.button} type="submit">
          Submit
        </button>
        <text className={styles.forgot} onClick={myForgot}>
          Forgot password
        </text>
      </motion.form>
      <div className={styles.anchor}>
        <text>Don't have an account yet</text> &nbsp;
        <text className={styles.login} onClick={myRegister}>
          Register
        </text>
      </div>
    </div>
  );
}

export default RegistrationForm;
