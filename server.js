const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    // res.send('hello wolrd! Welcome to express...')
    // res.sendStatus(500)
    // res.status(200).send("everything ok")
    // res.status(500).json({message : 'Error occured', status : 500})
    // res.download('./summary_notes.txt')
    res.render('index', {firstname : "Poorna",lastname : "sai"})
}) 

//http method - GET, POST, PUT, PATCH, DELETE
//endpoint
//route
//URI

const userRouter = require('./routes/users')
app.use('/users', userRouter)

// const accountRouter = require('./routes/accouts')
// app.use('/accounts', accountRouter)

app.listen(3000)