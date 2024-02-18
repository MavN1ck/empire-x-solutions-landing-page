import GetInTouch from "../GetInTouch/GetInTouch";
import useNavbar from "./useNavbar";

type NavMenuProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMenu = ({ showMenu, setShowMenu }: NavMenuProps) => {
  const { linksData } = useNavbar();

  return (
    <div
      style={{
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        backgroundColor: "rgba(38, 38, 38, 0.75)",
        transform: "translateX(-50%)",
      }}
      className='flex flex-col p-2 px-4 items-center rounded-3xl fixed top-20 z-20 left-[50%] mx-auto w-[90%]'>
      {linksData.map((link, index) => (
        <a
          key={index}
          onClick={() => setShowMenu(!showMenu)}
          className='text-center p-4 text-lg'
          href={link.href}>
          {link.name}
        </a>
      ))}

      <GetInTouch btnText='Contact' />
    </div>
  );
};

export default NavMenu;
