import React from "react"
import "./Profile.css"
import Posts from "../Posts/Posts"
import ProfileInfo from "./ProfileInfo/ProfileInfo"


function Profile(props){
    return(
        <div className="profile">
            <div className="me">
                <ProfileInfo/> 
            </div>
            <Posts postData={props.profilePage.postData}/>
        </div>
    )
}

export default Profile