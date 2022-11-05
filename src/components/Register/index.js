import { useState } from "react";
import "./style.css";

export default function Register() {
  const [registration, setRegistration] = useState({
    username: "",
    emailid: "",
    phoneno: "",
    password: "",
    confirmpassword: ""
  });

  const [errors, setErrors] = useState({
    username: "",
    emailid: "",
    phoneno: "",
    password: "",
    confirmpassword: ""
  });

  const handleChange = (e) => {
    setRegistration({ ...registration, [e.target.name]: e.target.value });
  };

  const isRegistrationvalid = (registration) => {
    let newErrors = {};
    if (!registration.username) {
      newErrors["username"] = "Please enter Name";
    }

    if (!registration.emailid) {
      newErrors["emailid"] = "Please enter email Id";
    }

    if (!registration.phoneno) {
      newErrors["phoneno"] = "Please enter Phone number";
    }

    if (!registration.password) {
      newErrors["password"] = "Please enter Password";
    }

    if (registration.password !== registration.confirmpassword) {
      newErrors["confirmpassword"] =
        "Password and confirm Password does not match";
    }

    if (newErrors !== {}) {
      setErrors(newErrors);
      return false;
    }
    return true;
  };

  const onRegister = (e) => {
    e.preventDefault();

    if (isRegistrationvalid(registration)) {
      console.log("valid");
    }
  };

  return (
    <div className="container">
      <form className="Register-page" onSubmit={onRegister}>
        <label>
          User Name:
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={registration.username}
          />
          <p className="error"> {errors.username}</p>
        </label>

        <label>
          Email Id:
          <input
            onChange={handleChange}
            type="email"
            name="emailid"
            value={registration.emailid}
          />
          <p className="error"> {errors.emailid}</p>
        </label>

        <label>
          Phone Number:
          <input
            onChange={handleChange}
            type="number"
            name="phoneno"
            value={registration.phoneno}
          />
          <p className="error"> {errors.phoneno}</p>
        </label>

        <label>
          Password:
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={registration.password}
          />
          <p className="error"> {errors.password}</p>
        </label>

        <label>
          Confirm Password:
          <input
            onChange={handleChange}
            type="password"
            name="confirmpassword"
            value={registration.confirmpassword}
          />
          <p className="error"> {errors.confirmpassword}</p>
        </label>

        <input id="submit-button" required type="submit" value="Register" />
      </form>
    </div>
  );
}
