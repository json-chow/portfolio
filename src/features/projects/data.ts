import type { Project } from "./types/project";
import portfolio_ss from "./assets/portfolio.png";
import bootleggpt_ss from "./assets/bootleggpt.png";
import mazesolver_ss from "./assets/mazesolver.png";
import pdftoimage_ss from "./assets/pdftoimage.png";
import fakestackoverflow_ss from "./assets/fakestackoverflow.png";
import autoclicker_ss from "./assets/autoclicker.png";
import puzzlestormtrends_ss from "./assets/puzzlestorm.png";

const projects: Project[] = [
    {
        title: "Bootleg GPT",
        desc: "A bootleg implementation of an autoregressive language model",
        stack: ["Python", "PyTorch"],
        longDesc: `\
        Serves as an educational project to understand the inner workings of the LLMs that we see today.\
        The entire text generation pipeline was implemented, starting from **data preprocessing**, \
        **tokenization**, **model training**, and **model inference**.\n\n
        The byte-level byte pair encoding trainer and tokenizer were implemented from scratch.\
        The transformer-based autoregressive language model was implemented from scratch using **PyTorch**, prioritizing clear documentation and code simplicity.\
        The model training includes efficient memory-mapped data loading, checkpointing, and loss tracking.\
        Considering adding a Streamlit GUI interface for a more intuitive end user interaction.\n\n\n
        [Link to GitHub](https://github.com/json-chow/bootleg-gpt)
        `,
        pic: bootleggpt_ss,
        link: "https://github.com/json-chow/bootleg-gpt"
    },
    {
        title: "Maze Solver",
        desc: "Implementation of various maze solving algorithms",
        stack: ["Python"],
        longDesc: `\
        Solving mazes using classical search algorithms such as **BFS**, **DFS**, and **A***,\
        as well as more novel algorithms such as **IDDFS** and **SMA***.\
        Analyzed algorithm completeness, optimality, and complexity.\n\n
        Each algorithm was implemented and analyzed using **Python**.\
        **Matplotlib** was used for visualizing visited spaces as well as the computed path.\n\n\n
        [Link to GitHub](https://github.com/json-chow/Maze-Solver)
        `,
        pic: mazesolver_ss,
        link: "https://github.com/json-chow/Maze-Solver"
    },
    {
        title: "pdftoimage",
        desc: "A GUI application written in Python to convert pdf files to images and back",
        stack: ["Python", "PySide6"],
        longDesc: `\
        A lightweight Python Qt application to convert to and from PDF files and images.\
        Originally written in PyQt5, but later rewritten in PySide6.\n\n

        The application was built using **Python** and **PySide6** for the GUI.\
        **Poppler** through **pdf2image** was used for PDF rendering, and **Pillow** was used for image processing.\
        **Nuitka** was used to compile the Python code into a standalone executable.\n\n\n
        [Link to GitHub](https://github.com/json-chow/pdftoimage)
        `,
        pic: pdftoimage_ss,
        link: "https://github.com/json-chow/pdftoimage"
    },
    {
        title: "FakeStackOverflow",
        desc: "Implementation of a clone of StackOverflow",
        stack: ["JavaScript", "React", "Express", "MongoDB"],
        longDesc: `\
        My first project involving JS/React! This is a full stack web app replicating StackOverflow's core functionality, enabling users to post, upvote, downvote, and comment.\
        User profile management and user reputation was implemented to enhance user engagement.\
        The MVC design pattern was used to ensure scalable and maintainable code architecture.\n\n
        The project utilized **JavaScript** and **React** for the frontend, **Express** for the backend, and **MongoDB** for the database.\n\n\n
        [Link to GitHub](https://github.com/json-chow/FakeStackOverflow)
        `,
        pic: fakestackoverflow_ss,
        link: "https://github.com/json-chow/FakeStackOverflow"
    },
    {
        title: "Autoclicker",
        desc: "An autoclicker, but with optional random click delay",
        stack: ["Python", "PySide6"],
        longDesc: `\
        A Python application that automates mouse clicks or keyboard presses that can be toggled on and off with a hotkey.\
        Can be configured to have a random delay between clicks to simulate human behavior.\
        Can also configure click/press interval, hotkey, and click type (left, right, middle, or a key on the keyboard).\n\n
        The application was built using **Python** and **PySide6** for the GUI.\
        **Pynput** was used for controlling and monitoring input devices.\n\n\n
        [Link to GitHub](https://github.com/json-chow/Autoclicker)
        `,
        pic: autoclicker_ss,
        link: "https://github.com/json-chow/Autoclicker"
    },
    {
        title: "Puzzle Storm Trends",
        desc: "Visualization of Lichess puzzle storm stats over time",
        stack: ["Python"],
        longDesc: `\
        A Python script to visualize trends in Lichess puzzle storm performance.\
        The script creates a bunch of scatter plots visualizing the highest puzzle elo solved, number of correct puzzle moves, \
        puzzle solving accuracy, puzzle storm score, and other metrics over time.\n\n
        This project utilizes **Python**, **BeautifulSoup** for scraping the puzzle storm data, **Pandas** for transforming the data, and **Matplotlib** for plotting the data.\n\n\n
        [Link to GitHub](https://github.com/json-chow/Puzzle-Storm-Trends)
        `,
        pic: puzzlestormtrends_ss,
        link: "https://github.com/json-chow/Puzzle-Storm-Trends"
    },
    {
        title: "Portfolio",
        desc: "The site you're looking at right now!",
        stack: ["TypeScript", "React"],
        longDesc: `\
        Created to showcase the projects that I've created over the years.\
        The design is meant to be simple and intuitive, with the important information clearly visible.\
        Also an excuse for me to learn some TypeScript.\n\n
        The website was created using **React** and **TypeScript**.\n\n\n
        [Link to GitHub](https://github.com/json-chow/portfolio)
        `,
        pic: portfolio_ss,
        link: "https://github.com/json-chow/portfolio"
    }
];

export {projects};
