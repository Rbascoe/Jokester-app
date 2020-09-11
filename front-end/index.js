const usersUrl = "http://localhost:3000/users"
const jokesUrl = "http://localhost:3000/jokes/"
const categoriesUrl ="http://localhost:3000/categories"

const ul = document.querySelector('ul#joke-list')
const selector = document.querySelector('select#user-selector')
const catSelector = document.querySelector('select#category-selector')
const jokeForm = document.querySelector('form.create-joke')
const br = document.createElement('br')



function getUsers(){
    fetch(usersUrl)
    .then(res => res.json())
    .then(users => showJokes(users))
}

getUsers()

function showJokes(users){
    users.forEach(user => 
        user.jokes.forEach(jokes => {const jokeLi = document.createElement('li') 
        const br = document.createElement('br')
        const footer = document.createElement('footer')
        footer.innerText = '-' + user.username
        jokeLi.innerText = jokes.description
        const laughBtn = document.createElement('span')

        
        laughBtn.innerHTML = `<span class='laugh-btn '>&#128514;</span> ` + jokes.laughs
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
            .then(laughs => laughBtn.innerHTML = `<span class='laugh-btn '>&#128514;</span> ` + jokes.laughs)
        })

        
        const frownBtn = document.createElement('span')
        
        frownBtn.innerHTML = `<span class='frown-btn'>&#128534;</span> ` + jokes.frowns
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
            .then(frowns => frownBtn.innerHTML = `<span class='frown-btn'>&#128534;</span> ` + jokes.frowns)
        })
        
        jokeLi.append(footer, laughBtn, frownBtn)
        ul.append(br, jokeLi) 

        })
        
        )
        
        
        users.forEach(user => {
            const userSelector = document.createElement('option')
            userSelector.innerText = user.username
            userSelector.value = user.id
            selector.append(userSelector)
        })
        
        fetch(categoriesUrl)
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
                
                fetch(jokesUrl)
                .then(res => res.json())
                .then(jokesArray => displayJoke(jokesArray))

        
                    
                    function displayJoke(jokesArray){
                        //console.log(joke.description)
                        //let someArray = []
                        //someArray.push(joke.description)
                        const randomJokePTag = document.querySelector('p#joke-of-day')
                        randomJokePTag.innerText = jokesArray[Math.floor(Math.random() * jokesArray.length)].description
                            
                        let most_laughs = 0
                        let top_joke = ''
                        for (let i in jokesArray) {
                        if(jokesArray[i].laughs > most_laughs){
                            most_laughs = jokesArray[i].laughs
                            top_joke = jokesArray[i].description
                        }
                   }
                        const topLaughPTag = document.querySelector('p#funniest-joke')
                        topLaughPTag.innerText = top_joke

                        let most_frowns = 0
                        let top_frowns = ''
                        for(let i in jokesArray) {
                            if(jokesArray[i].frowns > most_frowns){
                                most_laughs = jokesArray[i].frowns
                                top_frowns = jokesArray[i].description
                            }
                        }

                        const topFrownPTag = document.querySelector('p#worst-joke')
                        topFrownPTag.innerText = top_frowns



                
                        
                    }



                  
                
             