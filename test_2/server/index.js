const express = require('express');
const app = express();
const cors = require("cors");
const port = 4000;


app.use(cors());


const data = [
  ['machine_name','machine_id','current','voltage','power_factor',
  'active_power',
    'apparent_power','reactive_power','daily_energy','monthly_energy',
    'yearly_energy',
    'idle_daily','idle_monthly','idle_yearly'],
    ["Auto Winding Machine","machine001", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0], 
    ["Boiler Machine", "machine004", 0, 0, 0, 0.0, 0.0, 0.0, 0, 0, 0, 0, 0, 0]
]


app.get('/api/data', (req, res) => {
    res.send(data);
  });

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});