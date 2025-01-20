window.addEventListener("load", function(){
/*    document.getElementById('info').style.visibility = 'hidden'  */
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
        let errortext = document.querySelector('#error')
        let userimage = document.querySelector('#userimage')
        let usernameTag = document.querySelector('#username')
        let name = document.querySelector('#name')
        let location = document.querySelector('#location')
        let public_repos = document.querySelector('#public_repos')
        let followers = document.querySelector('#followers')

        // handling API errors        
        if(data.documentation_url == "https://docs.github.com/rest/overview/resources-in-the-rest-api#rate-limiting") { // 
            errortext.innerHTML = "Error: API limit exceeded"
            //showError(true)
            //console.log('api activated')
        }
        else if(data.login == null) {
            errortext.innerHTML = "Error: user not found"
            //showError(true)
            //console.log('undefined activated')

        }
        else {
            errortext.innerHTML = null
            //showError(false)
            //console.log('everythings fine')
        }

        usernameTag.innerHTML = data.login
        name.innerHTML = data.name
        location.innerHTML = data.location
        public_repos.innerHTML = data.public_repos
        followers.innerHTML = data.followers
        userimage.setAttribute("src", data.avatar_url)

        console.log('data', data)
    })

}
/*
function showError(isThereError) {
    if (isThereError == false) {
        document.getElementById('info').style.visibility = 'visible'
        document.getElementById('error').style.display = 'hidden'
    }
    if (isThereError == true) {
        document.getElementById('info').style.visibility = 'hidden'
        document.getElementById('error').style.display = 'visible'
    }
}
    */