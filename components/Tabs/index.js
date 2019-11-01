// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(ltObj =>{
    console.log(ltObj);
    ltData = ltObj.data
    console.log(ltData);
    ltTopics= ltData.topics;
    console.log(ltTopics)

    ltTopics.forEach(element => {
        const parentDiv = document.querySelector('.topics');
        const tabDiv = document.createElement('div');
        tabDiv.textContent = ` ${element}...`;
        parentDiv.appendChild(tabDiv);

    });
})