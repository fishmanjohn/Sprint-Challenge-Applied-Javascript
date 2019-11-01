// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const url='https://lambda-times-backend.herokuapp.com/articles';
fetch(url)
.then (data=>{
    return data.json()})

.then(res =>{


    console.log(res)

     articleData = res.articles
     console.log(articleData)

})





function createCard (data) {
    const cardDiv = document.createElement('div');
          cardHline = document.createElement('div');
          authDiv = document.createElement('div')
          imgContain = document.createElement('div')
          userImg = document.createElement('img');
          authSpan = document.createElement('span');
        //append elements
          cardDiv.appendChild(cardHline);
          cardDiv.appendChild(authDiv);
          authDiv.appendChild(imgContain);
          imgContain.appendChild(userImg);
          authDiv.appendChild(authSpan);
        //assign classes
          cardDiv.classList.add('card')
          cardHline.classList.add
          
        //content 
          
    
    
    
    
    
    
    return cardDiv;
    };