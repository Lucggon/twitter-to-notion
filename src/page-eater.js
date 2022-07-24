import PopUp from "./popup";
import ReactDOM from 'react-dom';
import React from 'react';
function ex() {


    let header = document.createElement('button');

    let imageIcon = document.createElement('img')
    imageIcon.setAttribute('src', browser.runtime.getURL('./images/notion.png'))
    imageIcon.setAttribute('class', 'r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1hdv0qi')
    imageIcon.setAttribute('style', 'color:rgb(113, 118, 123)')

    header.appendChild(imageIcon)
    
    header.setAttribute('style', 'background:none;  border:none; padding:0')
    let collection = document.getElementsByClassName("css-1dbjc4n r-1ta3fxp r-18u37iz r-1wtj0ep r-1s2bzr4 r-1mdbhws");

    for (let c of collection) {
    
        if (c.childNodes.length < 5) {
   
            const cloneElement = header.cloneNode(true);

            cloneElement.addEventListener('click', function (e) {
                const elementUser = e.target.parentElement.parentElement.parentElement.parentElement.parentElement
                const userTwitter = elementUser.getElementsByClassName('css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0')
                const urlTweet = elementUser.getElementsByClassName('css-4rbku5 css-18t94o4 css-901oao r-1bwzh9t r-1loqt21 r-1q142lx r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-3s2u2q r-qvutc0')[0].getAttribute('href')
                const userName = userTwitter[0].textContent
                const userTwitterId = userTwitter[2].textContent
                const tweet = e.target.parentElement.parentElement.parentElement.parentElement.firstChild.textContent

                const elCreate = document.createElement('div')



                ReactDOM.render(<PopUp props={{
                    urlTweet,
                    userName,
                    userTwitterId,
                    tweet


                }} />, elCreate)
                document.body.appendChild(elCreate)




            })
            c.appendChild(cloneElement)
        }
    }
}

ex()
let mutation = new MutationObserver(function (mutations) {
    let mutation2 = new MutationObserver(function (mutations) {
        ex()
    })
    let elementSelected = document.querySelector('[aria-label="Cronología: Tu cronología de inicio"] > div')
    if (elementSelected) {

        let config = { attributes: true, childList: true, characterData: true };
        mutation2.observe(elementSelected, config)
    }
})



let config = { attributes: true, childList: true, characterData: true };
mutation.observe(document.body, config)












