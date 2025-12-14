// =======================================================
// PROJECTS DATA MODULE
// =======================================================
// This file contains an array of project objects that will be imported 
// and used to dynamically render the projects section of the portfolio.

const projects = [
  {
    title: "U.S. Crime Data Analysis",
    link: "https://github.com/Abemore11/crime-data-analysis",
    description: "Analyzed 982,639 U.S. crime reports (2020–2024) using Python to visualize patterns in the data. This project demonstrates data cleaning, aggregation, and descriptive analytics using a real-world dataset.",
    image: "../images/data-analysis.webp",
    keywords: ["Python", "Pandas", "Numpy", "Matplotlib", "VSCode"]
  },
  {
    title: "Client MGMT System",
    link: "https://github.com/Abemore11/client_management_system",
    description: "Written entirely in Java, this system allows users to add, update, view, and remove client records efficiently. This project demonstrates object-oriented programming principles and data organization in a real-world context.",
    image: "../images/client-mgmt.webp",
    keywords: ["Java", "IntelliJ", "Temurin", "OOP", "MVC"]
  },
  {
    title: "Video Music Player",
    link: "https://github.com/Abemore11/video-music-player-rs",
    description: "Rust app that allows users to manage library of songs and launch their respective video URLs. Demonstrates object-oriented programming concepts in Rust through the use of structs, methods, and modular design - even though Rust does not fully support traditional OOP. Also uses JSON-based data storage.",
    image: "../images/music-player.webp",
    keywords: ["Rust", "Cargo", "Serde", "JSON", "OOP", "MVC"]
  },
  {
    title: "Dynamic Journal",
    link: "https://github.com/Abemore11/journal-js",
    description: "A clean and fully client-side journaling app built using HTML, CSS, JavaScript, and the Day.js library. It incorporates JSON-based saving and loading.",
    image: "../images/journal.webp",
    keywords: ["JavaScript", "HTML", "CSS", "JSON", "VSCode"]
  },
  {
    title: "Task Manager",
    link: "https://github.com/Abemore11/task_manager_kotlin",
    description: "This console-based Task Manager application is built entirely in Kotlin. It demonstrates the use of object-oriented programming as well as the Model-View-Controller (MVC) design pattern.",
    image: "../images/task-mgmt.webp",
    keywords: ["Kotlin", "IntelliJ", "Temurin", "OOP", "MVC"]
  },
];

// Export the projects array as the default export
// so it can be imported in other JS modules
export default projects;