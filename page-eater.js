function createPopUp(msg){
    const doc = document.createElement("div")
    doc.innerHTML = 
    `<h1>hola</h1> <p>${JSON.stringify(msg)}</p>`
    doc.setAttribute("style",  "position:fixed; top:50%; left:50%; background-color: white; height:300px; width:300px")
    return doc
}
function ex() {
    console.log('EJECUTANDO script')

    let header = document.createElement('button');
    let textHeader = document.createTextNode('notion')
   
    header.appendChild(textHeader)
    header.setAttribute('style', 'color:white')
    let collection = document.getElementsByClassName("css-1dbjc4n r-1ta3fxp r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws");
    console.log(collection.length)
    for (let c of collection) {
        if (c.childNodes.length < 5) {
            const cloneElement = header.cloneNode(true);
            cloneElement.addEventListener('click', function(e) {
                const elementUser = e.target.parentElement.parentElement.parentElement.parentElement
                const userTwitter = elementUser.getElementsByClassName('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0')
                const urlTweet = elementUser.getElementsByClassName('css-4rbku5 css-18t94o4 css-901oao r-1bwzh9t r-1loqt21 r-1q142lx r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-3s2u2q r-qvutc0')[0].getAttribute('href')
                const userName = userTwitter[0].textContent
                const userTwitterId = userTwitter[2].textContent
                const tweet = e.target.parentElement.parentElement.parentElement.firstChild.textContent
                
                const el = createPopUp({
                    user: userName,
                    urlTweet: urlTweet,
                    userTwitterId: userTwitterId,
                    tweet: tweet
                })
                document.body.appendChild(el)
                    
                
                
                
            })
            c.appendChild(cloneElement)
        }
    }
}
console.log('ejecutando web')
ex()
let mutation = new MutationObserver(function (mutations) {
    let mutation2 = new MutationObserver(function(mutations){
        ex()
    })
    let elementSelected = document.querySelector('[aria-label="Cronología: Tu cronología de inicio"] > div')
   if(elementSelected){
    console.log('ELEMENT SELECTED')
    let config = { attributes: true, childList: true, characterData: true };
    mutation2.observe(elementSelected, config)
   }
})

// let elementSelected = document.querySelector('[aria-label="Cronología: Tu cronología de inicio"] > div')


let config = { attributes: true, childList: true, characterData: true };
mutation.observe(document.body, config)












