
document.addEventListener("DOMContentLoaded", () =>{    
    
const form = document.getElementById('github-form')
form.addEventListener('submit', search)

function search(event) {
    console.log('inside search')
    fetch('https://api.github.com/search/users?q=octocat', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    //body: JSON.stringify(data),
        })
    .then((response) => response.json())
    .then((data) => {
      const username = document.createElement('p')
      const avatar = document.createElement('img')
      const profileLink = document.createElement('p')
      const repoData = document.createElement('p')
      const gitHubContainer = document.getElementById("github-container")
      console.log(data.items[0].login)
     for(let i=0; i<30; i++){
        console.log('inside for loop')
       if(data.items[i].login === document.getElementsByName("search")[0].value){
          username.innerHTML = `username: ${data.items[i].login}`
          username.setAttribute('id',`${data.items[i].login}`)
          username.addEventListener('click', repo)

          function repo() {
            fetch('https://api.github.com/search/users?q=octocat', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    //body: JSON.stringify(data),
        })
    .then((response) => response.json())
    .then((data) => {
        console.log(data.items[i])
        repoData.innerHTML = JSON.stringify(data.items[i])
        console.log(repoData)
        
       
    })
}
          avatar.src = data.items[i].avatar_url
          profileLink.innerHTML = `profileLink: ${data.items[i].html_url}`
  
  
  
         gitHubContainer.append(username,avatar,profileLink,repoData)
  
       }
         }
    })
    event.preventDefault()
}



})

