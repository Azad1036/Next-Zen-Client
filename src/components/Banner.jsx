// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Fade } from "react-awesome-reveal";

// import required modules
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "../custom/banner.css";

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper navigation={true} modules={[Navigation]} className="relative">
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="img-Container relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
            <img
              src="https://i.ibb.co.com/prMjdz3k/1.jpg"
              alt="Slide 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            <div className="absolute top-20 md:top-32 left-5 w-11/12 md:w-9/12 lg:w-2/3 xl:w-1/2">
              <Fade
                delay={1e3}
                cascade
                damping={1e-1}
                className="font-ibm-plex font-bold text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg"
              >
                Together, We Can Fund Dreams
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="font-poppins text-lg md:text-xl font-medium mt-4 bg-gray-100/90 p-4 rounded-lg shadow-md text-gray-800">
                  Join hands with a global community to support meaningful
                  projects, whether it’s for personal needs, startups, or
                  creative ideas, and make a real difference in someone’s life
                  with your contribution.
                </p>
                <button className="btn btn-primary mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg transition duration-300">
                  Get Involved
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="img-Container relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
            <img
              src="https://i.ibb.co.com/cVyTJgg/2.jpg"
              alt="Slide 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute top-20 md:top-32 left-5 w-11/12 md:w-9/12 lg:w-2/3 xl:w-1/2">
              <Fade
                delay={1e3}
                cascade
                damping={1e-1}
                className="font-ibm-plex font-bold text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg"
              >
                Light Up Ideas with Crowdfunding
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="font-poppins text-lg md:text-xl font-medium mt-4 bg-gray-100/90 p-4 rounded-lg shadow-md text-gray-800">
                  Have a brilliant idea but need funding to make it happen? Our
                  platform connects you with supporters who believe in
                  innovation, helping you turn your creative or business ideas
                  into reality with ease.
                </p>
                <button className="btn btn-primary mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg transition duration-300">
                  Get Involved
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="img-Container relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
            <img
              src="https://i.ibb.co.com/gMT294Fx/3.png"
              alt="Slide 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute top-20 md:top-32 left-5 w-11/12 md:w-9/12 lg:w-2/3 xl:w-1/2">
              <Fade
                delay={1e3}
                cascade
                damping={1e-1}
                className="font-ibm-plex font-bold text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg"
              >
                Plan Big with Crowdfunding
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="font-poppins text-lg md:text-xl font-medium mt-4 bg-gray-100/90 p-4 rounded-lg shadow-md text-gray-800">
                  Dreaming of launching a startup, creating a film, or helping
                  someone in need? Start planning your campaign with us and
                  gather the financial support you need to turn your vision into
                  a successful project.
                </p>
                <button className="btn btn-primary mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg transition duration-300">
                  Get Involved
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div className="img-Container relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
            <img
              src="https://i.ibb.co.com/PBNqtsb/4.jpg"
              alt="Slide 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute top-20 md:top-32 left-5 w-11/12 md:w-9/12 lg:w-2/3 xl:w-1/2">
              <Fade
                delay={1e3}
                cascade
                damping={1e-1}
                className="font-ibm-plex font-bold text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg"
              >
                Bright Ideas Need Funding
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="font-poppins text-lg md:text-xl font-medium mt-4 bg-gray-100/90 p-4 rounded-lg shadow-md text-gray-800">
                  From artistic endeavors to innovative startups, every bright
                  idea deserves a chance to shine. Use our crowdfunding platform
                  to raise the funds you need and bring your creative visions to
                  life with the support of a global audience.
                </p>
                <button className="btn btn-primary mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg transition duration-300">
                  Get Involved
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 5 */}
        <SwiperSlide>
          <div className="img-Container relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
            <img
              src="https://i.ibb.co.com/G31BfpG2/5.png"
              alt="Slide 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute top-20 md:top-32 left-5 w-11/12 md:w-9/12 lg:w-2/3 xl:w-1/2">
              <Fade
                delay={1e3}
                cascade
                damping={1e-1}
                className="font-ibm-plex font-bold text-2xl md:text-3xl lg:text-4xl text-white drop-shadow-lg"
              >
                Build a Community of Support
              </Fade>
              <Fade direction="up" triggerOnce>
                <p className="font-poppins text-lg md:text-xl font-medium mt-4 bg-gray-100/90 p-4 rounded-lg shadow-md text-gray-800">
                  Our platform connects you with a worldwide community of
                  supporters who are eager to help. Whether it’s for a personal
                  cause, a business venture, or a creative project, you can
                  build a network of backers to fund your dreams together.
                </p>
                <button className="btn btn-primary mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-lg transition duration-300">
                  Get Involved
                </button>
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
