const usersUrl = "http://localhost:3000/users"
const jokesUrl = "http://localhost:3000/jokes/"
// const jokeUrl = `http://localhost:3000/jokes/${joke.id}`

const ul = document.querySelector('ul#joke-list')
const selector = document.querySelector('select#user-selector')
const catSelector = document.querySelector('select#category-selector')
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
        const laughBtn = document.createElement('button')

            laughBtn.innerText = 'Laughs: ' + jokes.laughs
            laughBtn.addEventListener('click', () => {
                //console.log(event.target)
                let newLaughs = ++jokes.laughs 
                let configObj = {
                    method: 'PATCH',
                    headers:{
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        laughs: newLaughs

                    })
                    
                }
                fetch(jokesUrl+jokes.id, configObj)
                .then(res => res.json())
                .then(laughs => laughBtn.innerText = 'Laughs: ' + jokes.laughs)
            })

        const frownBtn = document.createElement('button')

        frownBtn.innerText = 'Frowns: ' + jokes.frowns
            frownBtn.addEventListener('click', () => {
                //console.log(event.target)
                let newFrowns = ++jokes.frowns
                let configObj = {
                    method: 'PATCH',
                    headers:{
                        'Content-Type': 'application/json',
                        Accept: 'application/json'
                    },
                    body: JSON.stringify({
                        frowns: newFrowns

                    })
                    
                }
                fetch(jokesUrl+jokes.id, configObj)
                .then(res => res.json())
                .then(frowns => frownBtn.innerText = 'Frowns: ' + jokes.frowns)
            })

        jokeLi.append(footer, laughBtn, frownBtn)
        ul.append(jokeLi) })

        )


    users.forEach(user => {
        const userSelector = document.createElement('option')
        userSelector.innerText = user.username
        userSelector.value = user.id
        selector.append(userSelector)
    })

    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(categories => showCategory(categories))

    function showCategory(categories){
        categories.forEach(category => {
            const jokeCategory = document.createElement('option')
            jokeCategory.innerText = category.title
            jokeCategory.value = category.id
            catSelector.append(jokeCategory)
        })
        jokeForm.addEventListener('submit', () => {
            event.preventDefault()
            //console.log(event.target)
            let descriptionInput = event.target[0].value
            let authorInput = event.target[1].value
            let authorName = users.find(user => user.id == authorInput).username
            let categoryInput = event.target[2].value
            let categoryTitle = categories.find(category => category.id == categoryInput).title
        
            // for (let i in users){
            //     if (users[i].id == authorInput){
            //         authorName = users[i].username
            //         break
            //     }
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
                    user_id: authorInput,
                    category_id: categoryInput
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

        



}
