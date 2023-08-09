import  React, { useState } from "react";
import "../suggestion/suggestion.css";
import Following from "../following/following";

function Suggestions() {

    const [following , setfollowing] = useState([
        {
            username : 'omar_krayyem',
        },
        {
            username : 'ali.alouka',
        },
        {
            username : 'messi',
        },
        {
            username : 'ronaldo',
        },
    ])

    return (
        <div className="suggestions">
        <div className="suggestions__title">You Following</div>
        <div className="suggestions__usernames">

            {following.map((follow) => (
                <Following
                    username = {follow.username}
                />
            ))}
        </div>
        </div>
    );
}

export default Suggestions;