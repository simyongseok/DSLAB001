const express = require('express') 
const bodyParser = require('body-parser');
const app = express() 
const port = process.env.PORT || 3001 // react의 기본값은 3000이니까 3000이 아닌 아무 수

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/hello', (req, res) =>{
    res.send('나와라 용석이 서버')
});

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`); // '가 아닌 좌측상단의 esc버튼 밑의 `다.
});