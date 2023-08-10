import '../following/following.css';
import { Avatar } from "@mui/material";
import axios from "axios";

function Following({id, username}) {

    const handleUnfollow = async(id) => {
        console.log(id)
        const token = localStorage.getItem("token")
        await axios.delete(`http://127.0.0.1:8000/api/user/following/${id}`, {
            "headers": {
                'Authorization': `Bearer ${token}`
            }
        });
        window.location.reload();
    }


    return (
        <div>
            <div className="suggestions__username">
                <div className="username__left">
                    <span className="avatar">
                        <Avatar>
                            {username.charAt(0).toUpperCase()}
                        </Avatar>
                    </span>
                    <div className="username__info">
                        <span className="username">{username}</span>
                        <span className="relation">New to Instagram</span>
                    </div>
                </div>
                {/* <button className="follow__button" >Following</button> */}
                <button className="follow__button" onClick={() => handleUnfollow(id)}>Following</button>
            </div>
        </div>
    );
}

export default Following;