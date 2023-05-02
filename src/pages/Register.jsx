import React from "react";
import styles from "./Register.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import RegisterSchema from "./RegisterSchema";
import registerApi from "./RegisterAPI";
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
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const onSubmit = async (data) => {
    const result = await registerApi(data);
    if (result == true) {
      alert("Registration Successful.");
      navigate("/LoginPage");
    } else if (result == 0) {
      alert("E-mail already exist");
    } else {
      alert("Registeration failed");
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
  const Confirm = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  };

  return (
    <div className={styles.body}>
      <div className={styles.register}>Registeration</div>
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
            variants={Name}
            initial="hidden"
          >
            Name
          </motion.label>
          <motion.input
            className={styles.input}
            animate="visible"
            variants={Name}
            initial="hidden"
            {...register("name")}
            placeholder="Name"
          />
          {errors.name && (
            <p className={styles.message}>{errors.name.message}</p>
          )}
        </div>
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
        <div>
          <motion.label
            className={styles.label}
            animate="visible"
            variants={Confirm}
            initial="hidden"
          >
            Confirm Password
          </motion.label>
          <motion.input
            className={styles.input}
            animate="visible"
            variants={Confirm}
            initial="hidden"
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm"
          />
          {errors.confirmPassword && (
            <p className={styles.message}>{errors.confirmPassword.message}</p>
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
