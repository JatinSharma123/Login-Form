import { useContext } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import StateContext from "../context/StateContext";
import StateProvider from "../context/StateProvider";

const Auth = () => {
  const [step, setStep] = useState(0);
  const [hideButton, setHideButton] = useState(0);
  const step_form = step + 1;
  const Form = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [cpassword, setCpassword] = useState("");

    //login hooks

    if (step === 0) {
      return <Login />;
    } else if (step === 1) {
      return <Contact />;
    } else if (step === 2) {
      return <Social />;
    } else if (step === 3) {
      return <Welcome />;
    }
  };

  const Login = () => {
    const {
      name,
      email,
      password,
      cpassword,
      setName,
      setEmail,
      setPassword,
      setCpassword,
    } = useContext(StateContext);
    const validate = () => {
      if (!name || !email || !password || !cpassword) {
        return toast.error("Fields cannot be empty!!!");
      }
      if (cpassword !== password) {
        return toast.error("Password Not Matched!!!");
      }

      setStep(step + 1);
    };
    return (
      <>
        <div className="form_body">
          <div className="header">
            <h1>Basic Details</h1>
            <span>{step_form}</span>
          </div>
          <div className="form_data">
            <div className="input_field">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span>Name</span>
            </div>

            <div className="input_field">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Email</span>
            </div>

            <div className="input_field">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span>Password</span>
            </div>

            <div className="input_field">
              <input
                type="password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
              <span>Repeat password</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <button onClick={validate}>Next</button>
        </div>
      </>
    );
  };

  const Contact = () => {
    const {
      country,
      state,
      address1,
      address2,
      setCountry,
      setState,
      setAddress1,
      setAddress2,
    } = useContext(StateContext);
    const validate = () => {
      if (!country || !state || !address1) {
        return toast.error("Fields cannot be empty!!!");
      }

      setStep(step + 1);
    };

    return (
      <>
        <div className="form_body">
          <div className="header">
            <h1>Contact Info</h1>
            <span>{step_form}</span>
          </div>
          <div className="form_data">
            <div className="input_field">
              <input
                type="text"
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <span>Country</span>
            </div>

            <div className="input_field">
              <input
                type="text"
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              <span>State</span>
            </div>

            <div className="input_field">
              <input
                type="text"
                required
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
              <span>Address Line 1</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              validate();
            }}
          >
            Next
          </button>
        </div>
      </>
    );
  };

  const Social = () => {
    const {
      linkedin,
      instagram,
      facebook,
      twitter,
      setLinkedin,
      setInstagram,
      setFacebook,
      setTwitter,
    } = useContext(StateContext);

    const validate = () => {
      if (facebook || instagram || linkedin || twitter) {
        setStep(step + 1);
      } else {
        return toast.error("At least one social media account is needed!!!");
      }
    };

    return (
      <>
        <div className="form_body">
          <div className="header">
            <h1>Social Info</h1>
            <span>{step_form}</span>
          </div>
          <div className="form_data">
            <div className="input_field">
              <input
                type="text"
                required
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
              />
              <span>Facebook</span>
            </div>

            <div className="input_field">
              <input
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
              />
              <span>Instgram</span>
            </div>

            <div className="input_field">
              <input
                type="text"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
              <span>Linkedin</span>
            </div>

            <div className="input_field">
              <input
                type="text"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
              />
              <span>Twitter</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              validate();
            }}
          >
            Finish
          </button>
        </div>
      </>
    );
  };

  const Welcome = () => {
    const { name, email, password, cpassword, country, state, address1 } =
      useContext(StateContext);
    return (
      <>
        <div className="final">
          <div className="final_content">
            <span className="check">
              <i className="fa fa-check"></i>
            </span>

            <h2>Your Name:{name}</h2>

            <h2>Your Email:{email}</h2>
            <h4> Address:{address1}</h4>
            <h4> State:{state}</h4>
            <h4> Country:{country}</h4>

            <p>
              Your Information has been submitted! We will contact you soon!
            </p>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="form">
        <div className="card">
          <div>{<Form />}</div>
        </div>
      </div>
    </>
  );
};

export default Auth;
