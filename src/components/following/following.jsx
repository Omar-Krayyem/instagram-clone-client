import '../following/following.css';
import { Avatar } from "@mui/material";

function Following({username}) {
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
                <button className="follow__button">Following</button>
            </div>
        </div>
    );
}

export default Following;