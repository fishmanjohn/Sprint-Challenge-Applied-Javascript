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


// const url='https://lambda-times-backend.herokuapp.com/articles';
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(resp =>{
    console.log(resp)
    resp.data.articles.bootstrap.forEach(element => {
        document.querySelector('.cards-container').appendChild(createCard(element))
    });
    resp.data.articles.javascript.forEach(element => {
        document.querySelector('.cards-container').appendChild(createCard(element))
    });
    resp.data.articles.jquery.forEach(element => {
        document.querySelector('.cards-container').appendChild(createCard(element))
    });
    resp.data.articles.node.forEach(element => {
        document.querySelector('.cards-container').appendChild(createCard(element))
    });
    resp.data.articles.technology.forEach(element => {
        document.querySelector('.cards-container').appendChild(createCard(element))
    });
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
          cardDiv.classList.add('card');
          cardHline.classList.add('headline');
          authDiv.classList.add('author');
          imgContain.classList.add('img-container');
         //content 
          cardHline.textContent = data.headline;
          userImg.src = data.authorPhoto;
          authSpan.textContent = data.authorName;
    
    
    
    
    
    return cardDiv;
    };