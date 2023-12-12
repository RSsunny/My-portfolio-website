import Tacnolagy from "../../components/shared/Tacnolagy";

const AllTacnology = () => {
  return (
    <div>
      <Tacnolagy
        title={"JavaScripte"}
        des={
          "As an adept JavaScript developer, I possess a solid understanding of the language's core concepts and have successfully applied them in various projects. Proficient in both front-end and back-end development, I am well-versed in leveraging JavaScript to create dynamic and interactive web applications. My skill set includes expertise in DOM manipulation, asynchronous programming, and utilizing modern frameworks like React or Node.js. With a commitment to staying abreast of the latest industry trends, I am equipped to tackle diverse challenges in the ever-evolving landscape of JavaScript development"
        }
        img="https://i.ibb.co/THbckfw/what-can-you-do-with-javascript-thumb.jpg"
      ></Tacnolagy>

      <Tacnolagy
        style={"md:flex-row-reverse"}
        title={"React"}
        des={
          "As an experienced React developer, I specialize in creating dynamic, responsive user interfaces. Proficient in component-driven architecture, state management, and React hooks, I ensure efficient and scalable front-end solutions. My expertise lies in crafting engaging user experiences through optimized performance and adherence to best practices in React development."
        }
        img="https://i.ibb.co/4jCCbKC/retina-300x120-cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png"
      ></Tacnolagy>
      <Tacnolagy
        title={"Node.js"}
        des={
          "As a proficient Node.js developer, I specialize in server-side JavaScript, leveraging its non-blocking I/O for scalable and high-performance applications. With expertise in building RESTful APIs, handling asynchronous operations, and utilizing npm packages, I bring efficiency and reliability to back-end development, ensuring seamless and robust server-side solutions."
        }
        img="https://i.ibb.co/Jnxvq9C/1-bc9pm-Tiy-KR0-WNPka2w3e0-Q.png"
      ></Tacnolagy>
      <Tacnolagy
        style={"md:flex-row-reverse"}
        title={"Mongodb"}
        des={
          "As an adept MongoDB developer, I excel in designing and implementing robust database solutions. Proficient in NoSQL data modeling, I leverage MongoDB's flexibility to create scalable and efficient databases. With expertise in handling large datasets and crafting performant queries, I contribute to building resilient and high-throughput applications."
        }
        img="https://i.ibb.co/HXpTYWp/download.png"
      ></Tacnolagy>
    </div>
  );
};

export default AllTacnology;
