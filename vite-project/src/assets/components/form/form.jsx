import useForm from "../../hooks/hooks";
import { useState } from "react";

function BaseForm() {
  const form = useForm({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = form.values;

  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    form.setValue(field, value);

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!username.trim()) newErrors.username = "Username is required";
    else if (username.length < 5)
      newErrors.username = "Username must be at least 5 characters long";

    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email))
      newErrors.email = "Email is not valid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 8)
      newErrors.password = "Password must be at least 8 characters long";
    else if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/.test(password))
      newErrors.password =
        "Password must contain at least one uppercase letter, one number, and one special character";

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Le password non coincidono!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form valido! Registrazione completata.");
      console.log("Dati:", form.values);
    } else {
      alert("Form not Valid! Please correct the errors and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => updateField("username", e.target.value)}
          style={{
            border: errors.username ? "2px solid red" : "1px solid gray",
          }}
        />
        {errors.username && (
          <span style={{ color: "red" }}>{errors.username}</span>
        )}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => updateField("email", e.target.value)}
          style={{
            border: errors.email ? "2px solid red" : "1px solid gray",
          }}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => updateField("password", e.target.value)}
          style={{
            border: errors.password ? "2px solid red" : "1px solid gray",
          }}
        />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </div>

      <div>
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            form.setValue("confirmPassword", e.target.value);
            if (errors.confirmPassword) {
              setErrors((prev) => ({ ...prev, confirmPassword: "" }));
            }
          }}
          style={{
            border: errors.confirmPassword ? "2px solid red" : "1px solid gray",
          }}
        />
        {errors.confirmPassword && (
          <span style={{ color: "red" }}>{errors.confirmPassword}</span>
        )}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default BaseForm;
