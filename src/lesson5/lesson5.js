import React from 'react';
// import './lesson5.css'
const Lesson5 = () => {
    return (
        <div className={"container"}>
            <div className={"div"}>
                <p>
                    FirstName
                </p>
                <input type={"text"} placeholder={"FirstName"} className={"input"} />
            </div>
            <div className={"div"}>
                <p>
                    LastName
                </p>
                <input type={"text"} placeholder={"LastName"} className={"input"} />
            </div>
            <div className={"div"}>
                <p>
                    Password
                </p>
                <input type={"password"} placeholder={"***"} className={"input"} />
            </div>
            <div className={"div"}>
                <p>
                    Yes or No?
                </p>
                <label>
                    Yes  <input type={"radio"} />
                </label>
                <label>
                    No   <input type={"radio"} />
                </label>
            </div>
            <div className={"div"}>
                <p>
                    No or Yes?
                </p>
                <label>
                    Yes  <input type={"checkbox"} />
                </label>
                <label>
                    No   <input type={"checkbox"} />
                </label>
                <label>
                    Maybe<input type={"checkbox"} />
                </label>
            </div>
            <div className={"div"}>
                <p>
                    Select Item
                </p>
                <select>
                    <option selected>Lorem</option>
                    <option>1</option>
                    <option>2</option>
                </select>
            </div>
        </div>
    );
};

export default Lesson5;