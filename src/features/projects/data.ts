import type { Project } from "./types/project";
import portfolio_ss from "./assets/portfolio.png";
import bootleggpt_ss from "./assets/bootleggpt.png";
import mazesolver_ss from "./assets/mazesolver.png";
import fakestackoverflow_ss from "./assets/fakestackoverflow.png";
import puzzlestormtrends_ss from "./assets/puzzlestorm.png";

const projects: Project[] = [
    {
        title: "Portfolio",
        desc: "The site you're looking at right now!",
        stack: ["TypeScript", "React"],
        longDesc: `\
        Created to showcase the projects that I've created over the years.\
        The design is meant to be simple and intuitive, with the important information clearly visible.\
        Also an excuse for me to learn some TypeScript.\n\n
        The website was created using React and TypeScript.
        `,
        pic: portfolio_ss,
        link: "#"
    },
    {
        title: "Bootleg GPT",
        desc: "A bootleg implementation of an autoregressive language model",
        stack: ["Python", "PyTorch"],
        longDesc: `\
        Serves as an educational project to understand the inner workings of the LLMs that we see today.\
        The entire text generation pipeline was implemented, starting from data preprocessing, \
        tokenization, model training, and model inference.\n\n
        The byte-level byte pair encoding trainer and tokenizer were implemented from scratch.\
        The transformer-based autoregressive language model was implemented from scratch using PyTorch, prioritizing clear documentation and code simplicity.\
        The model training includes efficient memory-mapped data loading, checkpointing, and loss tracking.\
        Considering adding a Streamlit GUI interface for a more intuitive end user interaction.
        `,
        pic: bootleggpt_ss,
        link: "https://github.com/json-chow/bootleg-gpt"
    },
    {
        title: "Maze Solver",
        desc: "Implementation of various maze solving algorithms",
        stack: ["Python"],
        longDesc: `\
        Solving mazes using classical search algorithms such as BFS, DFS, and A*,\
        as well as more novel algorithms such as IDDFS and SMA*.\
        Analyzed algorithm completeness, optimality, and complexity.\n\n
        Each algorithm was implemented and analyzed using Python.\
        Matplotlib was used for visualizing visited spaces as well as the computed path.\
        `,
        pic: mazesolver_ss,
        link: "https://github.com/json-chow/Maze-Solver"
    },
    {
        title: "FakeStackOverflow",
        desc: "Implementation of a clone of StackOverflow",
        stack: ["JavaScript", "React", "Express", "MongoDB"],
        longDesc: `\
        My first project involving JS/React! This is a full stack web app replicating StackOverflow's core functionality, enabling users to post, upvote, downvote, and comment.\
        User profile management and user reputation was implemented to enhance user engagement.\
        The MVC design pattern was used to ensure scalable and maintainable code architecture.\n\n
        The project utilized JavaScript and React for the frontend, Express for the backend, and MongoDB for the database.\
        `,
        pic: fakestackoverflow_ss,
        link: "https://github.com/json-chow/FakeStackOverflow"
    },
    {
        title: "Puzzle Storm Trends",
        desc: "Visualization of Lichess puzzle storm stats over time",
        stack: ["Python"],
        longDesc: `\
        A Python script to visualize trends in Lichess puzzle storm performance.\
        The script creates a bunch of scatter plots visualizing the highest puzzle elo solved, number of correct puzzle moves, \
        puzzle solving accuracy, puzzle storm score, and other metrics over time.\n\n
        This project utilizes Python, BeautifulSoup for scraping the puzzle storm data, Pandas for transforming the data, and Matplotlib for plotting the data.
        `,
        pic: puzzlestormtrends_ss,
        link: "https://github.com/json-chow/Puzzle-Storm-Trends"
    }
];

export {projects};
