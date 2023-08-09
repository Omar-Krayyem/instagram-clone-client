import '../search/search.css';
import Profile from '../../components/profile/profile';

function Search (){
    return(
        <div className="search">
            <div className="head">
                <h3>Search</h3>
                <div className="search-input">
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <div>
            <div className="content empty">
                    <div className="head">Recent</div>
                    <div className="bottom">No recent searches</div>
                </div>
                <div className="content filled">
                    <Profile/>
                    <Profile/>
                    <Profile/>
                    <Profile/>
                </div>

            </div>
    </div>

    );
}

export default Search;