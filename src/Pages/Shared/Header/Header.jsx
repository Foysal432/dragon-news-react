import photo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
           <img className='mx-auto' src={photo} alt="" />
           <p className='text-xl font-medium'>Journalism Without Fear or Favour</p>
           <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;