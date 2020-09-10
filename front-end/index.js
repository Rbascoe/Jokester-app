const usersUrl = "http://localhost:3000/users"
const jokesUrl = "http://localhost:3000/jokes"

const ul = document.querySelector('ul#joke-list')
const selector = document.querySelector('select#user-selector')
const jokeForm = document.querySelector('form.create-joke')

function getUsers(){
    fetch(usersUrl)
    .then(res => res.json())
    .then(users => showJokes(users))
}

getUsers()

function showJokes(users){
    users.forEach(user => 
        user.jokes.forEach(jokes => {const jokeLi = document.createElement('li') 
        const footer = document.createElement('footer')
        footer.innerText = user.username
        jokeLi.innerText = jokes.description
        jokeLi.append(footer)
        ul.append(jokeLi) })
    )
    users.forEach(user => {
        const userSelector = document.createElement('option')
        userSelector.innerText = user.username
        userSelector.value = user.id
        selector.append(userSelector)
    })


jokeForm.addEventListener('submit', () => {
    event.preventDefault()
    //console.log(event.target)
    let descriptionInput = event.target[0].value
    let authorInput = event.target[1].value
    let authorName = ""
    for (let i in users){
        if (users[i].id == authorInput){
            authorName = users[i].username
            break
        }
    }

    fetch(jokesUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            description: descriptionInput,
            laughs: 0,
            frowns: 0, 
            user_id: authorInput
            //category: categoryInput
        })
    })
    .then(res => res.json())
    .then(
        newJoke => {
        newJokeLi = document.createElement('li')
        footer = document.createElement('footer')
        newJokeLi.innerText = newJoke.description
        footer.innerText = authorName
        newJokeLi.append(footer)
        ul.append(newJokeLi)
        jokeForm.reset()
    }
    )
    
})

}
