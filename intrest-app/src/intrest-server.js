const express = require('express');
const cros = require('cors');
const app = express();
const port = 3001;
app.use(cros());
app.get('/', (req, res) =>{
    const principle = parseFloat(req.query.principle);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);
    const intrest = (principle * rate * time)/100;
    res.send(`The intrest is ${intrest}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));