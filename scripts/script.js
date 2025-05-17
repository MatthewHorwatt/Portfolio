// script.js
const projects = [
    {
      title: "Project 1",
      description: "A web app built with React and Node.js.",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/your/project1",
      demo: "https://project1-demo.com"
    },
    // Add more projects...
  ];
  
  function renderProjects() {
    const grid = document.querySelector(".project-grid");
    projects.forEach(project => {
      grid.innerHTML += `
        <div class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
          <a href="${project.github}" target="_blank">GitHub</a>
          ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo</a>` : ""}
        </div>
      `;
    });
  }
  
  document.addEventListener("DOMContentLoaded", renderProjects);