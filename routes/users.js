const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('get all users')
}) //gets all resources

router.get('/new', (req, res)=>{
    res.render('users/new', {defaultName : 'test'})
})


router.post('/', (req, res)=>{
    // res.send('created new user')
    const isValid = true
    if(isValid){
        users.push({name: req.body.name})
        res.redirect(`/users/${users.length - 1}`)
    }else{
        res.render('users/new', {defaultName : req.body.name})
    }
}) //sends a payload to create new resources

router.route('/:id').
    get((req, res)=>{
        // res.send(`get user ${req.params.id}`)
        res.send(`get user ${req.user.name}`)
    }).
    put((req, res)=>{
        res.send(`update entire user ${req.params.id}`)
    }).
    patch((req, res)=>{
        res.send(`update user fields ${req.params.id}`)
    }).
    delete((req, res)=>{
        
        const index = users.indexOf(req.user)
        if (index > -1) {
            users.splice(index, 1); 
        }
        res.send(`deleted user ${index}`)
    }) //method chaining

// router.get('/:id', (req, res)=>{
//     res.send(`get user ${req.params.id}`)
// }) //gets a specic path parametered resource

// router.put('/:id', (req, res)=>{
//     res.send(`update entire user ${req.params.id}`)
// }) //sends a payload to update specic entire resource

// router.patch('/:id', (req, res)=>{
//     res.send(`update user fields ${req.params.id}`)
// }) //sends a payload to update specic fields in a resource

// router.delete('/:id', (req, res)=>{
//     res.send(`delete user ${req.params.id}`)
// }) //deletes the specific entire resource



//REST API
//CRUD operations - CREATE, READ, UPDATE, DELETE

// middleware

const users = [
    {
        name : null
    },
    {
        name : "poorna"
    },
    {
        name : "venkata"
    },
    {
        name : "sai"
    },
]

router.param('id', (req, res, next, id)=>{
    // console.log(id)
    req.user = users[id]
    next()
})

module.exports = router