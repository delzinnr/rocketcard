function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/delzinnr`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      followers.textContent = `${data.followers} Seguidores`;
      following.textContent = `${data.following} Seguindo`;
      repository.textContent = `${data.public_repos} Repositórios`;
      company.textContent = data.company;
      location.textContent = data.location;
    });
}

getGitHubProfileInfos();

const card = document.getElementById("card");

function changeColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  card.style.backgroundColor = color;
  return color;
}
