import '../search/search.css';
import Profile from '../../components/profile/profile';
import axios from "axios"
import React, { useState, useEffect } from "react";


function Search() {
    let [searchInput, setSearchInput] = useState("");
    let [searchedUsers, setSearchedUsers] = useState([]);

    useEffect(() => {
        console.log(searchInput);
        const token = localStorage.getItem("token");

        const getUsers = async () => {
            try {
                let { data } = await axios.get(`http://127.0.0.1:8000/api/search-users/${searchInput}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log(data.data);
                setSearchedUsers(data.data); // You need to define 'user'
                console.log(searchedUsers);
            } catch (error) {
                console.log(error);
            }
        }

        if (searchInput !== "") {
            getUsers();
        } else {
            setSearchedUsers([]); // Clear the search results when the input is empty
        }
    }, [searchInput]);

    
    return (
        <div className="search">
            <div className="head">
                <h3>Search</h3>
                <div className="search-input">
                    <input type="text" placeholder="Search" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
                </div>
            </div>
            <div>
                <div className="content empty">
                    <div className="head">Recent</div>
                    <div className="bottom">No recent searches</div>
                </div>
                <div className="content filled">
                    {searchedUsers.map(user => (
                        <Profile id={user.id} username={user.username}  name = {user.name}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Search;