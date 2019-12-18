const express = require('express')
const app = express()
const db = require('./products.json')
const cfg = require('./config.json')
let router = express.Router()
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })

    // const findproduct = function(list , sport_id){
    //     const sportidreturned = list.filter(function(list ,index){
    //         return list.sport_id === sport_id
    //     })
    //     return sportidreturned
    // }
 
    // const err = function(list , sport_id){
    //     const sportidreturned = list.find(function(list ,index){
    //         return list.sport_id === sport_id
    //     })
    //     return sportidreturned
    // }
    app.use(cfg.root , router)
    router.route('/:sport_id')
    .get( (req, res) => {
    let id = parseInt(req.params.sport_id)
    const result = db.filter(list => list.sport_id === id) 
    res.send(result)   
   })
    router.route('/')
    .get((req , res) => {
        
        res.send(db)
    })

console.log(cfg.root)
app.listen(cfg.port, () => console.log(`Example app listening on port ${cfg.port}!`))
