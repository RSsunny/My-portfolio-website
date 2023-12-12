import Aos from "aos";

const Tacnolagy = ({ style, title, des, img }) => {
  Aos.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    debounceDelay: 50,
    throttleDelay: 99,
    delay: 500,
    duration: 500,
    easing: "ease",
    mirror: false,
    anchorPlacement: "top-bottom",
  });
  return (
    <>
      <div
        className={`flex flex-col-reverse md:flex-row items-center gap-10 justify-center mt-20 mb-32 mx-10 ${
          style ? style : "md:flex-row"
        }`}
      >
        <div className="flex-1">
          <h2 className="text-3xl font-bold my-4">{title}</h2>
          <p>{des}</p>
        </div>
        <div className="flex-1">
          <img
            className="w-[350px]   rounded-3xl mx-auto"
            src={img}
            alt=""
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          />
        </div>
      </div>
    </>
  );
};

export default Tacnolagy;
