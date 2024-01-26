import { useState } from "react";
import styles from "../styles/Login.module.css";

import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter both username and password");
      return;
    }
    console.log(username);
    console.log(password);
    setUsername("");
    setPassword("");

    router.push("/dashboard");
  };

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h1 className={styles.h1}>Login Page</h1>
        <form onSubmit={handleLogin} className={styles.form}>
          <div>
            <label className={styles.label}>Username:</label>
            <input
              className={styles.input}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label2}>Password:</label>
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className={styles.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
