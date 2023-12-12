const SharedLink = ({ link1, link2 }) => {
  return (
    <div className="flex items-center gap-8 pt-2 ml-10">
      <a
        className="border px-6 py-2 rounded-md font-bold capitalize bg-black "
        href={link1}
        target="_blank"
        rel="noopener noreferrer"
      >
        gitHub
      </a>
      <a
        className=" px-6 py-2 rounded-md font-bold capitalize bg-purple-600 text-white "
        href={link2}
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Site
      </a>
    </div>
  );
};

export default SharedLink;
