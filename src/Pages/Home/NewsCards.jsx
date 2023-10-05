import { Link } from "react-router-dom";


const NewsCards = ({cards}) => {
    const {_id,category_id,title,image_url,details}=cards
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        
        details.length > 200 ? <p>{details.slice(0,200)} <Link className="text-blue-400" to={`/cards/${_id}`}>Read More...</Link></p>:<p>{details}</p> 
        }
   
  </div>
</div>
    );
};

export default NewsCards;