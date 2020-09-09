const usersUrl = "http://localhost:3000/users"
const jokesUrl = "http://localhost:3000/jokes"

const ul = document.querySelector('ul#joke-list')
const jokeForm = document.querySelector('form.create-joke')

function getUsers(){
    fetch(usersUrl)
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

    jokeForm.addEventListener('submit', () => {
        event.preventDefault()
        //console.log(event.target)
        let descriptionInput = event.target[0].value
        // let descript = users.jokes.forEach(description => {
        //     description.description
        // })

        // let authorInput = event.target[1].value
    
        // let configObj = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         description: descriptionInput,
        //         user: authorInput
        //     })
        // }
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
                user_id: 
            })
        })
        .then(res => res.json())
        .then(console.log)
        
    })

}

