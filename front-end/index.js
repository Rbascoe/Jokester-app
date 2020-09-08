const userUrl = "http://localhost:3000/user"

const ul = document.querySelector('ul#joke-list')

function getUsers(){
    fetch(userUrl)
    .then(res => res.json())
    .then(users => users.forEach(users => showJokes(users)))
}

getUsers()

function showJokes(users){

    users.jokes.forEach(jokes => {const jokeLi = document.createElement('li') 
    const footer = document.createElement('footer')
    footer.innerText = users.username
    jokeLi.innerText = jokes.description
    jokeLi.append(footer)
    ul.append(jokeLi) })
    


}