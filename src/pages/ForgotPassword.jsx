import React from "react";
import styles from "../styles/ForgotPassword.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ForgotSchema from "../schema/ForgotSchema";
import { useState } from "react";
import ForgotPasswordApi from "../api/ForgotPasswordApi";

function ForgotPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ForgotSchema) });

  const onSubmit = async (data) => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const result = await ForgotPasswordApi(data);

    alert("Password reset successful");
    navigate("/LoginPage");
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
      <div className={styles.register}>Reset Password</div>
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
            New Password
          </motion.label>
          <motion.input
            className={styles.input}
            animate="visible"
            variants={Password}
            initial="hidden"
            type="password"
            {...register("password")}
            placeholder="Enter a new password"
            onChange={handlePasswordChange}
          />
          {errors.password && (
            <p className={styles.message}>{errors.password.message}</p>
          )}
        </div>
        <div>
          <motion.label
            className={styles.label}
            animate="visible"
            variants={Password}
            initial="hidden"
          >
            Confirm Password
          </motion.label>
          <motion.input
            className={styles.input}
            animate="visible"
            variants={Password}
            initial="hidden"
            type="password"
            {...register("confirm")}
            placeholder="Same as above"
            onChange={handleConfirmPasswordChange}
          />
          {errors.password && (
            <p className={styles.message}>{errors.password.message}</p>
          )}
        </div>

        <button className={styles.button} type="submit">
          Reset
        </button>
      </motion.form>
    </div>
  );
}

export default ForgotPassword;
