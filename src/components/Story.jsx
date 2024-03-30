import aboutPic from "../assets/Image/about-img.jpg";
import SectionTitle from "./SectionTitle";

const Story = () => {
  return (
    <>
      <section>
        <SectionTitle
          heading="About Us"
          subheading="From 11.00am to 10.00pm"
        ></SectionTitle>
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 overflow-hidden grid grid-cols-1 lg:grid-cols-2 md:px-8 justify-items-center">
          <div className="mt-14 md:mt-0 md:max-w-xl">
            <img src={aboutPic} className="w-full animate__animated animate__slideInLeft animate__slower" alt="about us image" />
          </div>
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h1 className="text-sm pt-5 text-indigo-600 font-medium">
              Our Little Story
            </h1>
            <h2 className="text-4xl text-gray-800 font-extrabold lg:text-3xl">
              Welcome To Hungry Station! Restaurant
            </h2>
            <p>
              Are you ready to embark on a culinary journey like no other? At
              Hungry Station, we&apos;re dedicated to satisfying your cravings
              with a delectable array of mouthwatering dishes, all conveniently
              located in one place. Whether you&apos;re in the mood for savory
              delights, sweet treats, or something in between, we&apos;ve got
              you covered.
              <br />
              Ready to satisfy your hunger cravings? Visit us at Hungry Station
              and treat yourself to a culinary adventure like no other. Whether
              you&apos;re dining solo, with friends, or with family, we look forward
              to welcoming you and serving up a feast to remember.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="javascript:void(0)"
                className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Let&apos;s get started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
