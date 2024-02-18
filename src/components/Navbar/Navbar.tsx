import { useState } from "react";
import { createPortal } from "react-dom";
import Logo from "../../assets/logo.webp";
import GetInTouch from "../GetInTouch/GetInTouch";
import NavMenu from "./NavMenu";
import useNavbar from "./useNavbar";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { linksData } = useNavbar();

  return (
    <div className='flex items-center h-20 justify-between sticky top-5 z-20'>
      <a href='/#'>
        <img
          src={Logo}
          alt='Empire X Solutions Logo'
          className='w-32 h-32 aspect-auto object-contain ml-3'
        />
      </a>

      {/* Desktop Navbar */}
      <ul
        style={{
          backdropFilter: "blur(16px)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          backgroundColor: "rgba(38, 38, 38, 0.75)",
        }}
        className='lg:flex lg:items-center lg:justify-evenly p-2 gap-20 px-4 rounded-3xl h-fit hidden pointer-events-none lg:pointer-events-auto'>
        {linksData.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className='hidden pointer-events-none lg:block lg:pointer-events-auto'>
        <GetInTouch btnText='Contact' />
      </div>

      {/* Mobile Navbar */}
      <div className='lg:hidden lg:pointer-events-none pointer-events-auto'>
        <button onClick={() => setShowMenu(!showMenu)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 m-3'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>
        {showMenu &&
          createPortal(
            <NavMenu showMenu={showMenu} setShowMenu={setShowMenu} />,
            document.querySelector("#GlobalLayout")!
          )}
      </div>
    </div>
  );
};

export default Navbar;
