import React from 'react';
// import './lesson5.css'
const Lesson5 = () => {
    return (
        <div className={"container"}>
            <div className={"div"}>
                FirstName
                <input type={"text"} placeholder={"FirstName"} className={"input"} />
            </div>
            <div className={"div"}>
                LastName
                <input type={"text"} placeholder={"LastName"} className={"input"} />
            </div>
            <div className={"div"}>
                Password
                <input type={"password"} placeholder={"***"} className={"input"} />
            </div>
            <div className={"div"}>
                Yes or No?
                <label className={"label"}>
                    Yes  <input type={"radio"} />
                </label>
                <label className={"label"}>
                    No   <input type={"radio"} />
                </label>
            </div>
            <div className={"div"}>
                No or Yes?
                <label className={"label"}>
                    Yes  <input type={"checkbox"} />
                </label>
                <label className={"label"}>
                    No   <input type={"checkbox"} />
                </label>
                <label className={"label"}>
                    Maybe<input type={"checkbox"} />
                </label>
            </div>
            <div className={"div"} id>
                Select Item
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