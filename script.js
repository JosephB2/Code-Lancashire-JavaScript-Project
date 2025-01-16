window.addEventListener("load", function(){
    handleFormSubmit()
})

function handleFormSubmit(){
    let form = document.getElementById("username-form")
    form.addEventListener("submit", function(event){
        event.preventDefault()

        // creates a form data object providing the form element
        let formData = new FormData(form)
        // convert the form data into a usable object
        let data = Object.fromEntries(formData.entries())

        getUserDetailsFromGithub(data)
    })
}

function getUserDetailsFromGithub(userInput){
    fetch(`https://api.github.com/users/${userInput.username}`)
    .then((response) => response.json())
    .then((data) => {
        let userimage = document.querySelector('#userimage')
        let usernameTag = document.querySelector('#username')
        let public_repos = document.querySelector('#public_repos')
        let followers = document.querySelector('#followers')

        usernameTag.innerHTML = data.login
        public_repos.innerHTML = data.public_repos
        followers.innerHTML = data.followers
        userimage.setAttribute("src", data.avatar_url)

        console.log('data', data)
    })

}

