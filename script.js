// Fetch projects from GitHub API
function fetchProjects() {
    // Replace 'YOUR_USERNAME' with your GitHub username
    const username = 'YOUR_USERNAME';
    // Replace 'YOUR_ACCESS_TOKEN' with your personal access token
    const token = 'YOUR_ACCESS_TOKEN';
  
    const apiUrl = `https://api.github.com/users/${username}/repos`;
  
    fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        const projectList = document.getElementById('project-list');
        data.forEach(project => {
          const projectLink = document.createElement('a');
          projectLink.href = project.html_url;
          projectLink.textContent = project.name;
          projectLink.target = '_blank';
  
          const projectItem = document.createElement('p');
          projectItem.appendChild(projectLink);
          projectList.appendChild(projectItem);
        });
      })
      .catch(error => console.error(error));
  }
  
  // Wait for the page to load
  window.onload = function() {
    // Call the fetchProjects function to load GitHub projects
    fetchProjects();
  };
  
// Fetch repositories from GitHub
fetch('https://api.github.com/users/benSmith1981/repos')
  .then(response => response.json())
  .then(data => {
    const projectsDiv = document.getElementById('project-list');
    const keywords = ['ai', 'AI', 'iphone', 'website'];

    data.forEach(repo => {
      const isMatch = keywords.some(keyword =>
        repo.name.toLowerCase().includes(keyword)
      );

      if (isMatch) {
        const projectCard = document.createElement('div');
        projectCard.classList.add('col', 's12', 'm6', 'l4');

        const cardContent = `
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${repo.name}</span>
              <p>${repo.description}</p>
            </div>
            <div class="card-action">
              <a href="${repo.html_url}" target="_blank">View Repository</a>
            </div>
          </div>
        `;

        projectCard.innerHTML = cardContent;
        projectsDiv.appendChild(projectCard);
      }
    });
  })
  .catch(error => console.error(error));

