import  {Link}  from "react-router-dom";
import  { useState}  from 'react';


 
function SignUp() {
  const [fname, setFname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resadd, setResadd] = useState("");
  const [box, setBox] = useState(false);
  const [errors, setErrors] = useState({});


  const handleSubmit = (event) => {
    event.preventDefault();
    validateForm();
    
  }
  const handleChange = (e) => {
    
    const { name, value } = e.target;

    if (name === 'fname') {
      setFname(value);
      clearError("fname");
    }
    else if(name === 'username') {
      setUsername(value);
      clearError("username");
    }
    else if (name=== 'email') {
      setEmail(value);
      clearError("email");
    } else if (name === 'password') {
      setPassword(value);
      clearError("password");
    }
    else if (name === 'resadd') {
      setResadd(value);
      clearError("resadd");
    }
    else if (name === 'box') {
      setBox(!box);
      clearError("box");
    }

  };


  const clearError = (fieldName) => {
    const updatedErrors = { ...errors };
    delete updatedErrors[fieldName];
    setErrors(updatedErrors);
  };


  const validateForm = () => {
    let errors = {};
  
    if (!fname) { 
      errors.fname = 'Name is required';
    }
    if (!username) {
      errors.username = 'Username is required';
    }
    if (!resadd) {
      errors.resadd = 'Residential Address is required';
    }
    if (!email) {
      errors.email = 'E-mail is required';
    }
  
    if (!password) {
      errors.password = 'Password is required';
    }
    if (!box) {
      errors.box = 'CheckBox is required';
    }
    if(Object.keys(errors).length>0){
      setErrors(errors);
      return;
    }
    else{
      window.location.href="/home";
    }
  };

  

    return(
        
      <div className="formCenter">

        <form onSubmit={handleSubmit} className="formFields">
          <div className="field-split">
          <div className="formField">
            <label className="formFieldLabel" >
              Full Name
            </label>
            <input
              type="text"
              id="fname"
              className="formFieldInput"
              placeholder="Enter your full name"
              name="fname"
              
              value={fname}
              onChange={handleChange}
            />
            {errors.fname && <div className="label-error">{errors.fname}</div>}
          </div>
          <div className="formField">
            <label className="formFieldLabel" >
              username
            </label>
            <input
              type="text"
              id="username"
              className="formFieldInput"
              placeholder="Enter your username"
              name="username"
              
              value={username}
              onChange={handleChange}
            />
            {errors.username && <div className="label-error">{errors.username}</div>}
          </div>
          </div>
          <div className="formField">
            <label className="formFieldLabel" >
              Residential Address
            </label>
            <input
              type="text"
              id="ress"
              className="formFieldInput"
              placeholder="Enter your Residential Address"
              name="ress"
              
              value={resadd}
              onChange={handleChange}

            />
            {errors.resadd && <div className="label-error">{errors.resadd}</div>}
          </div>
          <div className="formField">
            <label className="formFieldLabel">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              
              value={email}
              onChange={handleChange}
            />
            {errors.email && <div className="label-error">{errors.email}</div>}
          </div>
          <div className="formField">
            <label className="formFieldLabel" >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              
              value={password}
              onChange={handleChange}
            />
            {errors.password && <div className="label-error">{errors.password}</div>}
          </div>

          <div className="formField">
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                onChange={handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink  text-white">
                terms of service
              </a>
            </label>
            {errors.box && <div className="label-error">{errors.box}</div>}
          </div>

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}
            <Link to="/sign-in" className="formFieldLink text-reset ">
                  I'm already a member
            </Link>
          </div>
          
        </form>
      </div>

);
}

export default SignUp

