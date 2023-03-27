import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Form, Navigate, useNavigate } from "react-router-dom";
import { ProfileAction, setProfile } from "../../redux/profileSlice";
import "./Profile.css"

function Profile() {

    const [profileName, setProfileName] = useState<string>("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function CreateProfile(e: any) {

        e.preventDefault();

        if (!profileName && profileName.length <= 0) {
            return;
        }

        dispatch(setProfile({
            type: "SET_PROFILE",
            value: {
                name: profileName,
                level: 1,
                totalPoints: 0
            }
        }));

        navigate("/");
    }

    return (<form onSubmit={CreateProfile}>
        <div className="container">
            <div className="input">
                <label>Type your name</label>
                <input type="text" value={profileName} onChange={(e) => setProfileName(e.target.value)} />
            </div>
            <div>
                <button onClick={CreateProfile} type="button">
                    <span>Create Profile</span>
                </button>
            </div>
        </div>
    </form>
    );
}

export default Profile;