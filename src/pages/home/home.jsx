import '../home/home.css';
import Nav from '../../components/nav/nav';
import Timeline from '../../components/timeline/timeline';
import Suggestions from '../../components/suggestion/suggestion';
import PostForm from '../../components/postForm/postForm';
import Search from '../../components/search/search';
import {useState} from "react"

function Home (){

    let [isPostFormOpened, setIsPostFormOpened] = useState(false)
    let [isSearchOpened, setIsSearchOpened] = useState(false)
    return (
        <div className="homepage">
            <div className="homepage__navWraper">
            <Nav 
            setIsPostFormOpened={setIsPostFormOpened}
            setIsSearchOpened = {setIsSearchOpened}
            />
            </div>
            <div className="homepage__timeline">
                <Timeline />
                {isSearchOpened && <Search 
                setIsSearchOpened={setIsSearchOpened}
                />}
                
            </div>
            <div>
                <Suggestions/>
            </div>
            {isPostFormOpened && <PostForm setIsPostFormOpened={setIsPostFormOpened} />}
        </div>
    );
}

export default Home;