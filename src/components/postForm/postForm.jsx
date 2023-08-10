import "../postForm/postForm.css"
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

function PostForm({setIsPostFormOpened}) {

    return (
        <div className="create-post">
            <div className="close"  onClick={() => setIsPostFormOpened(false)}>
                <CloseIcon className="close_icon"/>
            </div>
            <div className="box">
                <div className="title">
                    <div className="icon">
                    </div>
                    <div>Create new Post</div>
                    <div className="back-icon icon">
                        <button >Share</button>
                    </div>
                </div>
                <div className="bottom">
                    <div className="content">
                        <div className="icon">
                            <PermMediaOutlinedIcon className="icon"/>
                        </div>
                        <h3>Drag photos and videos here</h3>
                        <div>
                            <input type="file" title="Select from computer" placeholder="Select from computer"></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostForm