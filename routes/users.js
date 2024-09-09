const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('get all users')
}) //gets all resources

router.post('/', (req, res)=>{
    res.send('created new user')
}) //sends a payload to create new resources

router.get('/:id', (req, res)=>{
    res.send(`get user ${req.params.id}`)
}) //gets a specic path parametered resource

router.put('/:id', (req, res)=>{
    res.send(`update entire user ${req.params.id}`)
}) //sends a payload to update specic entire resource

router.patch('/:id', (req, res)=>{
    res.send(`update user fields ${req.params.id}`)
}) //sends a payload to update specic fields in a resource

router.delete('/:id', (req, res)=>{
    res.send(`delete user ${req.params.id}`)
}) //deletes the specific entire resource



//REST API
//CRUD operations - CREATE, READ, UPDATE, DELETE

module.exports = router