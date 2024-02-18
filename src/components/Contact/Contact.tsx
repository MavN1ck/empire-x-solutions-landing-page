import Location from "../../assets/location.svg";
import Mail from "../../assets/mail.svg";
import Phone from "../../assets/phone.svg";
import SectionLayout from "../../layouts/SectionLayout";
import Card from "../Card/Card";

const Contact = () => {
  return (
    <SectionLayout title='Start a Conversation'>
      <div id='contact' className='scroll-mt-52 my-8'>
        <Card classNames='bg-gradient-to-br from-[#262626] to-[#131313]'>
          <h1 className='text-center text-4xl'>
            Ready to transform your digital presence?
          </h1>
          <p className='text-center text-lg text-[#b3b3b3] my-8'>
            Want to make your business a lasting success? <br />
            Reach out to us via:
          </p>
          <div className='flex flex-col gap-4 items-start md:items-center'>
            <div className='flex flex-col gap-4 md:flex-row'>
              <a href='mailto:shubham@empirexmedia.in' className='flex gap-2'>
                <img src={Mail} alt='email' />
                <span>shubham@empirexmedia.in</span>
              </a>
              <a href='tel:+917030001534' className='flex gap-2'>
                <img src={Phone} alt='phone' />
                <span>+91 7030001534</span>
              </a>
            </div>
            <p className='flex gap-2 items-center'>
              <img src={Location} alt='phone' />
              <span>Rajiv Gandhi Infotech Park, Hinjewadi, Pune, India.</span>
            </p>
          </div>
        </Card>
      </div>
    </SectionLayout>
  );
};

export default Contact;
