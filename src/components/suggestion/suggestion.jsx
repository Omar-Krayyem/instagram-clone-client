import  React, { useState, useEffect } from "react";
import "../suggestion/suggestion.css";
import Following from "../following/following";
import axios from 'axios';

function Suggestions() {

    const [following , setfollowing] = useState([]);

    const token = localStorage.getItem("token");
    console.log(token)
    const fetchFollowing = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:8000/api/user/following", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response);
            console.log(response.data);
            setfollowing(response.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFollowing();
      }, []);

    return (
        <div className="suggestions">
        <div className="suggestions__title">You Following</div>
        <div className="suggestions__usernames">

            {following.map((follow) => (
                <Following
                    id = {follow.id}
                    username = {follow.username}
                />
            ))}
        </div>
        </div>
    );
}

export default Suggestions;