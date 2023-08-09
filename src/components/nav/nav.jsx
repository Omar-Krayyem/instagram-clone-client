import React from "react";
import "../nav/nav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';


function Sidenav() {
  return (
    <div className="sidenav">
        <div className="upper-section">
            <img
            className="sidenav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2000px-Instagram_logo.svg.png"
            alt="Instagram Logo"
            />

            <div className="sidenav__buttons">
                <button className="sidenav__button">
                    <HomeIcon />
                    <span>Home</span>
                </button>

                <button className="sidenav__button">
                    <SearchIcon />
                    <span>Search</span>
                </button>

                <button className="sidenav__button">
                    <ExploreIcon />
                    <span>Explore</span>
                </button>
                
                <button className="sidenav__button">
                    <SlideshowIcon />
                    <span>Reels</span>
                </button>
                
                <button className="sidenav__button">
                    <MapsUgcOutlinedIcon />
                    <span>Messages</span>
                </button>

                <button className="sidenav__button">
                    <FavoriteBorderIcon />
                    <span>Notifications</span>
                </button>

                <button className="sidenav__button">
                    <AddCircleOutlineIcon />
                    <span>Create</span>
                </button>

                <button className="sidenav__button">
                    <AccountCircleOutlinedIcon />
                    <span>Profile</span>
                </button>
            </div>
        </div>

        <div className="l-section">
            <div className="sidenav__more">
            <button className="sidenav__button">
                    <LogoutOutlinedIcon />
                    <span className="sidenav__buttonText">Logout</span>
                </button>
                <button className="sidenav__button">
                    <MenuIcon />
                    <span className="sidenav__buttonText">More</span>
                </button>
            </div>
        </div>
    </div>
  );
}

export default Sidenav;