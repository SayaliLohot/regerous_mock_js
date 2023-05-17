//event bubling
let btn1 = document.getElementById('btn1')
btn1.addEventListener( 'click',()=>{
    console.log("child button clicked")
})
let eventBubblingDiv = document.getElementById('eventBubblingDiv')
eventBubblingDiv.addEventListener( 'click',()=>{
    console.log("parent div clicked")
})

//stop propogation

let btn2 = document.getElementById('btn2')
btn2.addEventListener( 'click',()=>{
    console.log("child button clicked")
})
let stopProp = document.getElementById('stopProp')
stopProp.addEventListener( 'click',()=>{
    console.log("parent div clicked")
})

//nullish coalescing operator
const demo = null ?? 'right hand side expression';
console.log(demo)

const demo2 = 40 ?? 'right hand side expression';
console.log(demo2)

//function generator
function* printNums() {
    let number = 1;
    while (number <=10) {
      yield number++;
    }
  }
  
  const generator = printNums();
  console.log(generator.next());
  console.log(generator.next());
  console.log(generator.next());

  //fetch api

  async function fillTable(url, table){
    const tableHead = document.querySelector('thead')
    const tableBody = document.querySelector('tbody')
    const response = await fetch(url)
    const data = await response.json()
  console.log(data[0])

  //clear table
  tableHead.innerHTML = "<tr></tr>"
  tableBody.innerHTML = ""

  //thrading
  for(const headerText in data[0]){
    const HeaderElement = document.createElement("th")
    HeaderElement.textContent = headerText
    tableHead.querySelector("tr").appendChild(HeaderElement)
  }

  //for content
  for(let i = 0; i<data.length; i++){
    const obj = Object.values(data[i])
    const rowElement = document.createElement('tr')
    for(const cellText of obj){
      if(typeof(cellText)==='object'){
        const cellElement = document.createElement('td')
        cellElement.textContent = Object.values(cellText)
        rowElement.appendChild(cellElement)
      }
      else{
        const cellElement = document.createElement('td')
        cellElement.textContent = cellText
        rowElement.appendChild(cellElement)
      }
    }
    tableBody.appendChild(rowElement)
  }
  }

  fillTable('https://jsonplaceholder.typicode.com/users', document.querySelector('table'))



