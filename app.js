var express = require('express')

var app = express()
var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))


// module.exports  =app



// adds company , location, employees_total, salary.
app.post('/lco/companies/v8/add', function(req, res){

   let details = {
      company : req.body.company,
      location : req.body.location,
      employees_total : req.body.employees_total,
      salary : req.body.salary
   }
   companies(details);
   res.send(details)
})




app.get('/lco/companies/', function(req, res){

   let details = {
      company : "lco",
      location : "chennai",
      employees_total : 400,
      salary : 130000
   }
   res.send(details)
})
app.listen(14000,()=>{
   console.log("http://localhost:14000")
})


// class companies {
//    constructor(comp) {
//       this.companies = comp
//    }
   
//     get getCompanies() {
//       return this.companies;
//    }
// }