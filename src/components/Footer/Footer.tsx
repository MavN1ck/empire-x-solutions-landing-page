import ShortLogo from "../../assets/short-logo.svg";
import SectionLayout from "../../layouts/SectionLayout";

const Footer = () => {
  return (
    <SectionLayout title='' noMb>
      <footer className='flex items-center flex-col md:flex-row gap-5 h-fit justify-between'>
        <span className='flex items-center flex-col md:flex-row gap-3 text-sm text-[#b3b3b3]'>
          <img src={ShortLogo} alt='Logo' className='w-16 h-16 aspect-auto' />
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Empire X Solutions. All rights
            reserved.
          </p>
        </span>
        <div>
          <a
            href='https://www.facebook.com/'
            target='_blank'
            className='cursor-pointer'>
            Facebook
          </a>
          <span className='mx-2'>|</span>
          <a
            href='https://www.instagram.com/empirexmedia_'
            target='_blank'
            className='cursor-pointer'>
            Instagram
          </a>
          <span className='mx-2'>|</span>
          <a
            href='https://www.linkedin.com/'
            target='_blank'
            className='cursor-pointer'>
            LinkedIn
          </a>
        </div>
        <span className='text-[#b3b3b3] text-sm'>
          Made with Love by{" "}
          <a
            target='_blank'
            href='https://x.com/SohamTamboli'
            className='hover:text-white cursor-pointer'>
            Soham Tamboli ❤️
          </a>
        </span>
      </footer>
    </SectionLayout>
  );
};

export default Footer;
