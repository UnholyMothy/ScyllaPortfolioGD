const projects = [
  {
    title: "INFERNO",
    description: "A puzzle adventure game where players must traverse the 9 circles of hell.",
        url: "https://unholymothy.itch.io/inferno"
  },
  {
    title: "Community Transit",
      description: "A horror game where you have to wait for the bus while avoiding the strange entities.",
      url: "https://unholymothy.itch.io/community-transit",
      image: "https://img.itch.zone/aW1nLzE4MDcxOTY2LnBuZw==/original/D9fP48.png"
  },
  {
    title: "Traversal",
      description: "Movement sandbox",
      url: "https://unholymothy.itch.io/traversal",
      image: "https://img.itch.zone/aW1nLzE4MDcxOTEyLnBuZw==/original/VoZ5pc.png"
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const projectList = document.getElementById("project-list");

  projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add("project-card");
      div.innerHTML = `
      <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link">
        <div class="project-bg" style="background-image: url('${project.image}')">
          <div class="project-overlay">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </div>
        </div>
      </a>
    `;
    projectList.appendChild(div);
  });
});
