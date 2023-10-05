
import Marquee from "react-fast-marquee";
const BreakingNews = () => {
    return (
        <div className="flex">
            <div>
                <button className="btn btn-secondary">Breaking</button>
            </div>
     <div>
     <Marquee pauseOnHover={true}>  Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...  </Marquee>
        </div>       

        </div>
    );
};

export default BreakingNews;