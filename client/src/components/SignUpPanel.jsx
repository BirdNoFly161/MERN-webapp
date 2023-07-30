import React from 'react';
import { useState, useEffect } from 'react';
import "../styles/SignUp.css"
import { isNotValidPassword, isNotValidEmail } from '../controllers/regexes';
import CorrectIcon from '../correct.svg'

export default function SignUpPanel(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");


    const [isPasswordInvalid, setIsPasswordInvalid] = useState(isNotValidPassword(password));
    const [isPasswordConfirmationInvalid, setIsPasswordConfirmationInvalid] = useState(true);
    const [isEmailInvalid, setIsEmailInvalid] = useState(true);

    const [isPasswordTouched, setIsPasswordTouched] = useState(false);
    const [isPasswordConfirmationTouched, setIsPasswordConfirmationTouched] = useState(false);
    const [isEmailTouched, setIsEmailTouched] = useState(false);

    const passwordOnChange = function (e) {
        setPassword(password => e.target.value);
        if (!isPasswordTouched) setIsPasswordTouched(true)
        let err = isNotValidPassword(e.target.value);
        if (err) {
            setIsPasswordInvalid(err)
        }
        else {
            setIsPasswordInvalid(null)
        }
    };

    const passwordConfirmationOnChange = function (e) {
        setPasswordConfirmation(e.target.value);

        if (!isPasswordConfirmationTouched) setIsPasswordConfirmationTouched(true);
    };

    const emailOnChange = function (e) {
        setEmail(e.target.value);
        if (!isEmailTouched) setIsEmailTouched(true);
        let err = isNotValidEmail(e.target.value);
        if (err) {
            setIsEmailInvalid(err)
        }
        else {
            setIsEmailInvalid(null)
        }
    };

    const onSubmit = async function (e) {
        let formData = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "passwordConfirmation": passwordConfirmation
        }

        if (!isEmailInvalid && !isPasswordInvalid) {
            let response = await fetch("http://localhost:3001/users/", {
                method: "POST",
                header: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            console.log("response from backend: ", response);
        }

    };

    useEffect(() => {
        setIsPasswordConfirmationInvalid(((passwordConfirmation === password) ? false : "Passwords do not match"));
    }, [passwordConfirmation])

    return (
        <>
            <form className='signup-form'>


                <label for="firstname">
                    First name:
                </label>
                <div className='input-field'>
                    <input type="text" id="firstname" placeholder="first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>



                <label for="lastname">
                    Last name:
                </label>
                <div className='input-field'>
                    <input type="text" id="lastname" placeholder="last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>



                <label for="email">
                    e-mail:
                </label>
                <div className='input-field'>
                    <input type="text" id="email" placeholder="e-mail" value={email} onChange={emailOnChange} />
                    {
                        isEmailTouched
                            ? <p className={"input-validation" + (isEmailInvalid ? " invalid" : " valid")}>{isEmailInvalid ? isEmailInvalid : "valid email"}</p>
                            : false
                    }
                </div>



                <label for="password">
                    password:
                </label>
                <div className='input-field'>
                    <input type="text" id="password" placeholder="password" className={(isPasswordTouched ? (isPasswordInvalid ? " invalid" : " valid") : "")} value={password} onChange={passwordOnChange} />
                    {
                        isPasswordTouched
                            ?
                            isPasswordInvalid
                                ? <p className={"input-validation invalid"}>{isPasswordInvalid ? isPasswordInvalid : "valid password"}</p>
                                : <img src={CorrectIcon} className='input-validation-icon' />

                            : false
                    }

                </div>



                <label for="passwordConfirmation">
                    Confirm password:
                </label>
                <div className='input-field'>
                    <input type="text" placeholder="confirm password" id="passwordConfirmation" value={passwordConfirmation} onChange={passwordConfirmationOnChange} />
                    {
                        isPasswordConfirmationTouched
                            ?
                            isPasswordConfirmationInvalid
                                ? <p className={"input-validation invalid"}>{isPasswordConfirmationInvalid ? isPasswordConfirmationInvalid : "valid password"}</p>
                                : <img src={CorrectIcon} className='input-validation-icon' />
                            : false
                    }
                </div>

                <button type="button" className='button signup' onClick={onSubmit}>Sign up</button>
            </form>

            <p className='feedback-submit'>{ }</p>
        </>
    );
}
