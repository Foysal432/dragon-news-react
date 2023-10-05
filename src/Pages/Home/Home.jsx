import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftNav from "../Shared/LeftNav/LeftNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightNav from "../Shared/RigstNav/RightNav";
import BreakingNews from "./BreakingNews";
import NewsCards from "./NewsCards";


const Home = () => {
    const newsDetail =useLoaderData()
    console.log(newsDetail);
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <NavBar></NavBar>
           
           <div className="grid md:grid-cols-4 gap-4">
           <div>
           <LeftNav></LeftNav>
           </div>
            <div className="col-span-2">
           {
            newsDetail.map(cards=><NewsCards key={cards._id} cards={cards}></NewsCards>)
           }
            </div>
            <div className="">
           <RightNav></RightNav>
            </div>
           </div>
        </div>
    );
};

export default Home;