import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div className={s.container}>
            <div className={s.ava}>
                <img src='https://images.unsplash.com/photo-1568890724546-a0ad828fd94d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'></img>
            </div>
            <div className={s.item}>
                description
            </div>
        </div>
    )
}

export default ProfileInfo;