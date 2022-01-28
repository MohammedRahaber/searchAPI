// id: a unique id
// name: user’s name
// items: list of items ordered by user
// address: address of the user
// pincode: user address pin code


var express = require('express')
var cors = require('cors')
var app = express()
 var pool=require('./util/database').pool


app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/search',async (req,res)=>{

let pattern=req.query.search_patttern;

//fetching fuzzy search for all fields
var data=await pool.query(`select * from search_user WHERE name LIKE '%${pattern}%' or 
address LIKE '%${pattern}%' or pincode LIKE '%${pattern}%' or items LIKE '%${pattern}%'  `);


res.json(data.rows)

})

app.listen(300,()=>console.log('server running....'))
