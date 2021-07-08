const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser')

const config = require('/config/key');
//User.js가져오기
const {User} = require("./model/User");

//application/x-www-form-urlencoded 를 분석해서 가져오게 하는 법
app.use(bodyParser.urlencoded({extended: true}));

//application/json을 분석해서 가져오게 하는 법
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongodb connect..'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('ㅎdfsf')
})

//회원가입
app.post('/register', (req,res) => {
  //회원가입할때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.

  //bodyParser을 이용해서 req.body로 client에서 보내는 정보를 받아준다.
  const user = new User(req.body)

  //정보가 user모델에 저장됨.
  user.save((err, doc)=>{
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success:true
    })
  })
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

 
