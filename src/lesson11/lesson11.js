import React from 'react';
import classes from './lesson11.module.css';
const Lesson11 = () => {
    return (
        <div className={classes.container}>
            <div>
                <h2>Blog</h2>
            </div>
            <div className={classes.child}>
                <div className={classes.vagr}>
                    <div className={classes.tulip}>

                    </div>
                    <div className={classes.aladin}>
                        <div className={classes.kapik}>
                            DONEC JUSTO URNA, MALESUADA A VIVERRA AC
                        </div>
                        <div className={classes.alik}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                        </div>
                        <div>
                            <input type={"button"} value={"MORE"}/>
                        </div>
                    </div>
                </div>
                <div className={classes.vagr}>
                    <div className={classes.tulip2}>

                    </div>
                    <div className={classes.aladin}>
                        <div className={classes.kapik}>
                            MALESUDA A VIVERRA AC, PELLENTEQUE VITAE
                        </div>
                        <div className={classes.alik}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                        </div>
                        <div>
                            <input type={"button"} value={"MORE"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Lesson11;