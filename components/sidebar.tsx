import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import profileImg from "../public/profile.jpg";
export default function sidebar() {
  return (
    <div className="p-2">
      <Image src={profileImg} className="w-32 h-32 mx-auto rounded-full" />
      <h1 className="p-1 my-4 text-2xl font-medium tracking-wider">
        <span>Nikhil</span>Kashyap
      </h1>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        FullStack Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download=""
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a href="">
          <AiFillInstagram className="w-8 h-8" />
        </a>
      </div>
      <div
        className="py-4 my-4 bg-gray-200 rounded-2xl"
        
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Agra India</span>
        </div>
        <p className="my-2">nmknikhilkashyap@gmail.com</p>
        <p className="my-2">8534049674</p>
      </div>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
        Email Me !
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400">
        Light Ui
      </button>
    </div>
  );
}
