const linksSocialMedia = {
  github: 'LGBastos',
  youtube: '/channel/UCPNA_ITv3xMro1dNA2gUYHQ',
  facebook: 'lucas.bastos.9803150',
  instagram: '_lgbastos',
  twitter: '_lgbastos'
}
function changeSocialMediaLinks() {
  for (let link of socialLinks.children) {
    const social = link.getAttribute('id')

    link.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    //alert(link.children[0].href)
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos(userLogin) {
  const url = `https://api.github.com/users/${userLogin}`
  fetch(url)
  .then(response =>  response.json() )
  .then(data => {
    userAvatar.src = data.avatar_url
    userName.textContent = data.name
    github.href = data.html_url
    github.children[1].textContent = data.login
    userBio.textContent = data.bio;
   })
}
getGitHubProfileInfos(linksSocialMedia.github)
