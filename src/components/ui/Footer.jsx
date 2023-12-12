import SocialLinl from "../shared/SocialLinl";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col-reverse md:flex-row justify-center gap-10 bg-purple-300 text-black px-10 py-20 lg:px-20">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-3">Lets Connect</h2>
          <p className="text-sm mb-8 font-bold">
            Please fill out the form on this section to contact with me or call{" "}
            <br />
            between 9:00 A.M and 8.00 P.M ET, Monday through Friday.
          </p>
          <SocialLinl></SocialLinl>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-5">Let’s Message me</h1>
          <form>
            <input
              className="py-3 px-2 w-full outline-none text-purple-600 font-bold bg-white rounded-md my-2"
              type="text"
              name="name"
              placeholder="Your name"
            />
            <input
              className="py-3 px-2 w-full outline-none text-purple-600 font-bold bg-white rounded-md my-2"
              type="email"
              name="name"
              placeholder="Your email"
            />
            <textarea
              placeholder="Message"
              className=" py-3 px-2 w-full outline-none text-purple-600 font-bold bg-white rounded-md my-2 min-h-[100px]"
            ></textarea>
            <input
              className="px-6 py-2 border rounded-md border-purple-600 bg-purple-600 text-white font-bold cursor-pointer hover:scale-110 ease-in duration-500"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
