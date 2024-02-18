import PersonPlaceholder from "../../assets/person-placeholder.webp";
import SectionLayout from "../../layouts/SectionLayout";

const AboutUs = () => {
  const aboutUsData = [
    {
      title: "Our Mission",
      description:
        "At Empire X Solutions, our mission is to provide reliable and efficient IT services to businesses of all sizes. We strive to help our clients achieve their goals and grow their businesses by leveraging the latest technologies and best practices.",
      image: PersonPlaceholder,
    },
    {
      title: "Our Team",
      description:
        "Our team of seasoned IT and Security professionals is dedicated to providing exceptional service and support to our clients. We are committed to staying up-to-date with the latest technologies and trends in the industry to ensure that out clients receive the best possible solutions.",
      image: PersonPlaceholder,
    },
    {
      title: "Our Values",
      description:
        "Empire X Solutions is built on core values: integrity, excellence, and collaboration. These principles guide our daily actions, emphasizing transparency, honesty, and top-notch service to clients. Our culture fosters teamwork and leverages collective expertise for innovative solutions that truly matter.",
      image: PersonPlaceholder,
    },
  ];

  return (
    <SectionLayout title='About Us'>
      <div id='about-us' className="scroll-mt-56">
        {aboutUsData.map((about, index) => (
          <div
            key={index}
            className='flex gap-5 flex-col even:flex-col md:flex-row even:md:flex-row-reverse w-full md:w-[70%] p-4 md:p-0 md:mx-auto my-16 items-center'>
            <div className='flex-1'>
              <h2 className='text-3xl font-bold mb-3'>{about.title}</h2>
              <p className='text-[#b3b3b3] text-lg'>{about.description}</p>
            </div>
            <img
              src={about.image}
              alt='Our Mission'
              className='flex-1 object-cover aspect-auto w-full h-full md:w-[30%] md:h-[300px] rounded-[30px]'
            />
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default AboutUs;
