import React from "react";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import LoginSchema from "./LoginSchema.jsx";
import loginApi from "./LoginApi";
import { yupResolver } from "@hookform/resolvers/yup";
import MainHeader from "../components/header/MainHeader";
import MainFooter from "../components/footer/MainFooter";
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
      </motion.form>
    </div>
  );
}

export default RegistrationForm;
