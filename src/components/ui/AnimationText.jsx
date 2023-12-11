import { TypeAnimation } from "react-type-animation";
const AnimationText = () => {
  return (
    <div className="text-xs font-normal mt-3 text-purple-500">
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "<span> Innovations in Sustainable Development </span>",
          1000, // wait 1s before replacing "Mice" with "Hamsters"

          "<p> Adapting to a Rapidly Changing Landscape </p>",
          1000,
          "<h4> Harnessing Emerging Technologies for Progress </h4>",
          1000,
        ]}
        wrapper="span"
        speed={30}
        style={{ display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default AnimationText;
