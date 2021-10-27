const linksSocialMedia = {
  github: "jaburana",
  youtube: "channel/UC1UAi8oM4SJ2QPi8CHUww4A",
  facebook: "joaopaulosilva",
  instagram: "jaoburana",
  twitter: "jaburana1"
}

function changeSocialMediaLinks(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}


function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

} 

getGitHubProfileInfos();