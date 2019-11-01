// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const containerDiv = document.querySelector('.header-container');
containerDiv.appendChild(createHeader('MARCH 28, 2019','Lambda Times','98°'));

function createHeader(date,head,temp ) {
    const hDiv = document.createElement('div');
    dateSpan = document.createElement('span');
    ltH = document.createElement('h1');
    tempSpan = document.createElement('span');

    hDiv.appendChild(dateSpan);
    hDiv.appendChild(ltH);
    hDiv.appendChild(tempSpan);

    hDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    dateSpan.textContent = date;
    ltH.textContent = head; 
    tempSpan.textContent = temp;

    return hDiv

}
