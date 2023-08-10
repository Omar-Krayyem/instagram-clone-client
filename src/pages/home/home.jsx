import '../home/home.css';
import Nav from '../../components/nav/nav';
import Timeline from '../../components/timeline/timeline';
import Suggestions from '../../components/suggestion/suggestion';
import AddPost from '../../components/addPost/addPost';
import Search from '../../components/search/search';
import {useState} from "react"

function Home (){

    const [isSearchOpened, setIsSearchOpened] = useState(false);
    const [isAddPostOpened, setIsAddPostOpened] = useState(false);

    return (
        <div className="homepage">
            <div className="homepage__navWraper">
            <Nav 
            setIsSearchOpened={setIsSearchOpened}
            setIsAddPostOpened={setIsAddPostOpened}
            />
            </div>
            <div className="homepage__timeline">
                <Timeline />
                <Search/>
            </div>
            <div>
                <Suggestions/>
            </div>
            {isAddPostOpened && (
            <AddPost setIsAddPostOpened={setIsAddPostOpened} />
      )}
        </div>
    );
}

export default Home;