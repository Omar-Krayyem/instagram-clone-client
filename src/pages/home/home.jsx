import '../home/home.css';
import Nav from '../../components/nav/nav';
import Timeline from '../../components/timeline/timeline';
import Suggestions from "../../components/suggestion/suggestion";

function Home (){
    return (
        <div className="homepage">
            <div className="homepage__navWraper">
                <Nav/>
            </div>
            <div className="homepage__timeline">
                <Timeline />
            </div>
            <div>
                <Suggestions/>
            </div>
        </div>
    );
}

export default Home;