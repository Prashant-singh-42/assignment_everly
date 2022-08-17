//---------------either uncomment this section--------------------
const content = [
  ['machine_name','machine_id','current','voltage','power_factor',
  'active_power',
    'apparent_power','reactive_power','daily_energy','monthly_energy',
    'yearly_energy',
    'idle_daily','idle_monthly','idle_yearly'],
    ["Auto Winding Machine","machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0],
    ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0]
]
setData()



function setData() {
    let addDataTo = document.getElementsByClassName("tableBody")[0];
  
    for (let row of content.splice(1,content.length-1)) {
      let newElement = document.createElement("tr");
  
      for (let col of row) {
        let cell = document.createElement("td");
        cell.textContent = col;
        newElement.appendChild(cell);
      }
  
      addDataTo.appendChild(newElement);
    }
  }


//------------------or comment this section(if not using the expressjs server)--------------------------
// let content = [];
// function getData() {
//   fetch("http://localhost:4000/api/data")
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       content = data;
//       setData()
//     });
// }
// getData();




