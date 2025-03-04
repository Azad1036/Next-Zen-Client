// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "../custom/banner.css";

const Banner = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]}>
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="img-Container">
            <img src="https://i.ibb.co.com/prMjdz3k/1.jpg" alt="" />
            <div className="absolute top-32 w-9/12 ml-5">
              <h1 className="font-ibm-plex font-bold text-3xl text-white">
                Together, We Can Fund Dreams
              </h1>
              <p className="font-poppins text-xl font-medium mt-4 bg-gray-100 p-3 rounded-md">
                Join hands with a global community to support meaningful
                projects, whether it’s for personal needs, startups, or creative
                ideas, and make a real difference in someone’s life with your
                contribution.
              </p>
              <button className="btn btn-primary mt-3">Get Involved</button>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className="img-Container">
            <img src="https://i.ibb.co.com/cVyTJgg/2.jpg" alt="" />
            <div className="absolute top-32 w-9/12 ml-5">
              <h1 className="font-ibm-plex font-bold text-3xl text-white">
                Light Up Ideas with Crowdfunding
              </h1>
              <p className="font-poppins text-xl font-medium mt-4 bg-gray-100 p-3 rounded-md">
                Have a brilliant idea but need funding to make it happen? Our
                platform connects you with supporters who believe in innovation,
                helping you turn your creative or business ideas into reality
                with ease.
              </p>
              <button className="btn btn-primary mt-3">Get Involved</button>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div className="img-Container">
            <img src="https://i.ibb.co.com/gMT294Fx/3.png" alt="" />
            <div className="absolute top-32 w-9/12 ml-5">
              <h1 className="font-ibm-plex font-bold text-3xl text-white">
                Plan Big with Crowdfunding
              </h1>
              <p className="font-poppins text-xl font-medium mt-4 bg-gray-100 p-3 rounded-md">
                Dreaming of launching a startup, creating a film, or helping
                someone in need? Start planning your campaign with us and gather
                the financial support you need to turn your vision into a
                successful project.
              </p>
              <button className="btn btn-primary mt-3">Get Involved</button>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div className="img-Container">
            <img src="https://i.ibb.co.com/PBNqtsb/4.jpg" alt="" />
            <div className="absolute top-32 w-9/12 ml-5">
              <h1 className="font-ibm-plex font-bold text-3xl text-white">
                Bright Ideas Need Funding
              </h1>
              <p className="font-poppins text-xl font-medium mt-4 bg-gray-100 p-3 rounded-md">
                From artistic endeavors to innovative startups, every bright
                idea deserves a chance to shine. Use our crowdfunding platform
                to raise the funds you need and bring your creative visions to
                life with the support of a global audience.
              </p>
              <button className="btn btn-primary mt-3">Get Involved</button>
            </div>
          </div>
        </SwiperSlide>
        {/* Slide 5 */}
        <SwiperSlide>
          <div className="img-Container">
            <img src="https://i.ibb.co.com/G31BfpG2/5.png" alt="" />
            <div className="absolute top-32 w-9/12 ml-5">
              <h1 className="font-ibm-plex font-bold text-3xl text-white">
                Build a Community of Support
              </h1>
              <p className="font-poppins text-xl font-medium mt-4 bg-gray-100 p-3 rounded-md">
                Our platform connects you with a worldwide community of
                supporters who are eager to help. Whether it’s for a personal
                cause, a business venture, or a creative project, you can build
                a network of backers to fund your dreams together.
              </p>
              <button className="btn btn-primary mt-3">Get Involved</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
