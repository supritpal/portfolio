import { useRef } from "react";
import "../styles/projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "AI Resume analyzer",
    img: "/resume.jpeg",
    desc: "Built an AI-powered resume analysis tool that evaluates resumes against job descriptions using NLP techniques, providing real-time feedback and improvement suggestions through a responsive React interface.",
    link: "https://ai-resume-analyzer-by-suprit.vercel.app/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    img: "/expense.jpeg",
    desc: "Developed a full-stack expense tracking application with real-time data updates, allowing users to manage income and expenses efficiently with intuitive UI and persistent storage.",
    link: "https://cashflowly.netlify.app/",
  },
  {
    id: 3,
    title: "Blogging Web App",
    img: "/blog.jpeg",
    desc: "Created a full-stack blogging platform with authentication, CRUD operations, and dynamic content rendering, enabling users to publish and manage blogs seamlessly.",
    link: "https://blog-zlvg.onrender.com/",
  },
  {
    id: 4,
    title: "Movie Web App",
    img: "/movie.jpeg",
    desc: "Built a movie discovery web app integrating third-party APIs to fetch real-time movie data, featuring search, filtering, and responsive UI for enhanced user experience.",
    link: "https://gajab-movies.netlify.app/",
  },
  {
    id: 5,
    title: "To-Do List",
    img: "/todo.jpeg",
    desc: "Designed a task management application with dynamic state handling, enabling users to add, update, and delete tasks with a clean and responsive interface.",
    link: "https://suprits-to-do-list.netlify.app/",
  },
  {
    id: 6,
    title: "Google Gemini Clone",
    img: "/gemini.jpeg",
    desc: "Developed an AI chatbot interface inspired by Google Gemini, integrating API-based responses with a modern UI to simulate real-time conversational interactions.",
    link: "https://suprits-gemini.netlify.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.open(item.link, "_blank")}>
              See Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" id="projects" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
