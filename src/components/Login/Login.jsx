import styles from "./Login.module.css";
import { useState } from "react";

const validate = (form, setErrors, errors) => {
  if (!form.email) setErrors({ ...errors, email: "Email vacio" });
  else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email))
      setErrors({ ...errors, email: "" });
    else setErrors({ ...errors, email: "Email Invalido" });
  }
};

const Form = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    // if(event.taget.name === 'username'){
    //     setForm({...form, username: event.target.value})
    // }
    // if(event.taget.name === 'password'){
    //     setForm({...form, password: event.target.value})
    // }

    const property = event.target.name;
    const value = event.target.value;

    setForm({ ...form, [property]: value });
    validate({ ...form, [property]: value }, setErrors, errors);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert("loginExitosoide");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? styles.error : styles.succes}
        ></input>
        <span>{errors.email}</span>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
