
import { AiFillFacebook,  AiOutlineGithub, AiOutlineGoogle, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightNav = () => {
    return (
        <div>
            <h1 className=" text-xl font-bold">Login With</h1>
            <div className="flex  rounded-md cursor-pointer items-center justify-center text-blue-400 my-2 border-solid border-2 border-blue-400">
                <span><AiOutlineGoogle></AiOutlineGoogle></span>
                <p>Log in With Google</p>
            </div>
            <div className="flex  rounded-md cursor-pointer items-center justify-center text-black my-2 border-solid border-2 border-black">
                <span><AiOutlineGithub></AiOutlineGithub></span>
                <p>Log in With Google</p>
            </div>
            {/* find us section */}
            <div>
             <h1 className="text-xl my-2 font-bold On">Find Us</h1>
             <a className="flex  cursor-pointer items-center border rounded-t-lg p-2 ">
                <span className="mr-2"><AiFillFacebook className="text-lg"></AiFillFacebook></span>
                <p className="text-gray-400 text-xl font-semibold">FaceBook</p>
            </a>
             <a className="flex  cursor-pointer items-center border-x p-2 ">
                <span className="mr-2"><AiOutlineTwitter className="text-lg"></AiOutlineTwitter> </span>
                <p className="text-gray-400 text-xl font-semibold">Twitter</p>
            </a>
             <a className="flex  cursor-pointer items-center border rounded-b-lg p-2 ">
                <span className="mr-2"> <AiOutlineInstagram></AiOutlineInstagram> </span>
                <p className="text-gray-400 text-xl font-semibold">Instagram</p>
            </a>
            </div>
            {/* q-zone */}
            <div className="bg-gray-100 mt-5">
                <h1 className="text-xl font-bold my-4">Q Zone</h1>
                <img src={qzone1} alt="" />
                <img className="my-2" src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default RightNav;