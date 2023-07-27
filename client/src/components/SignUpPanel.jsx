import React from 'react';
import { useState } from 'react';
import "../styles/SignUp.css"
import { isNotValidPassword } from '../controllers/regexes';

function SignUpPanel(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");


    const [isPasswordInvalid, setIsPasswordInvalid] = useState(isNotValidPassword(password));

    const passwordOnChange = function (e) {
        setPassword(e.target.value);
        let err = isNotValidPassword(e.target.value);
        if (err) {
            setIsPasswordInvalid(err)
        }
        else {
            setIsPasswordInvalid(null)
        }
    }

    return (
        <form className='signup-form'>
            <div className='input-field'>
                <input name="firstname" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <label>
                    First Name
                </label>
                <div className="line"></div>
            </div>

            <div className='input-field'>
                <input name="lastname`" value={lastName} onChange={e => setLastName(e.target.value)} />
                <label>
                    Last Name
                </label>
                <div className="line"></div>
            </div>

            <div className='input-field'>
                <input name="email" value={email} onChange={e => setEmail(e.target.value)} />
                <label>
                    e-mail
                </label>
                <div className="line"></div>
            </div>

            <div className="input-field">
                <input type="password" name="password" className={isPasswordInvalid ? "invalid" : "valid"} value={password} onChange={passwordOnChange} />
                <label>
                    password
                </label>
                <p className={"input-validation" + (isPasswordInvalid ? " invalid" : " valid")}>{isPasswordInvalid ? isPasswordInvalid : "valid password"}</p>
            </div>
            <div className="line"></div>

            <div className='input-field'>
                <input name="password_confirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
                <label>
                    confirm password
                </label>
                <div className="line"></div>
            </div>

        </form>
    );
}

export default SignUpPanel;