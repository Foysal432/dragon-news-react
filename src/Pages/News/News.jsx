import { useParams } from "react-router-dom";
import RightNav from "../Shared/RigstNav/RightNav";
import Header from "../Shared/Header/Header";
import NavBar from "../Shared/NavBar/NavBar";


const News = () => {
    const {id}=useParams()
    return (
        <div>
            <Header></Header>
            <NavBar></NavBar>
            <div className="grid md:grid-cols-4">
               <div className="col-span-3">
                <h1>Hello News</h1>
                {id}
               </div>
               <div>
                <RightNav></RightNav>
               </div>
            </div>
        </div>
    );
};

export default News;