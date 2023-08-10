import '../profile/profile.css';
import { Avatar } from "@mui/material";

function Profile ({id , username, name}){
    return(
        <div className="user">
            <div className='left_side'>
                <div className="profile-pic">
                    <span className="avatar">
                        <Avatar>
                            {username.charAt(0).toUpperCase()}
                        </Avatar>
                    </span>
                </div>
                <div className="data">
                    <div className="username">{username}</div>
                    <div className="name">{name}</div>
                </div>
            </div>
            <div className="right_side">
                <button>Follow</button>
            </div>
            
        </div>
    );
}

export default Profile;