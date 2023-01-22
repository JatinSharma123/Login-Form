import { useState } from "react";
import StateContext from "./StateContext"

const StateProvider = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    //country hooks
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    //social hooks
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [twitter, setTwitter] = useState("");
    return (<StateContext.Provider value={{ name, email, password, cpassword, setName, setEmail, setPassword, setCpassword, country, state, address1, address2, setCountry, setState, setAddress1, setAddress2, facebook, instagram, linkedin, twitter, setInstagram, setFacebook, setTwitter, setLinkedin }} >
        {props.children}
    </StateContext.Provider>)
}

export default StateProvider;