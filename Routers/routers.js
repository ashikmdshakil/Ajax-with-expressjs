var express = require("express");
var database = require("../Database/databaseConfig");
var router = express.Router();

database.connect((error) =>{
    if(error){
        console.log("error occured on database connection ....");
    }
    else{
        console.log("connection established to database ......");
    }
});

router.get('/', function(request, response){
    response.render("index");
});

router.post('/save', (request, response) =>{
    var sqlInsertion = "insert into students(name,studentid, department) values('"+request.body.name+"','"+request.body.id+"','"+request.body.department+"')";
    database.query(sqlInsertion,(err, result) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Data insertion has been successfull .......");
        }
        response.redirect("/");
    });
});

router.get('/fetch', (request, response) =>{
    let sqlFetching = "select * from students";
   database.query(sqlFetching , (err, result) =>{
        if(err){
            console.log("Data detching was not successfull ....");
        }
        else{
            console.log("Data fetching is sucessfull .......");
            response.json(result);
        }
       
   }); 
});

router.post('/remove', function(request, response){
    let sqlDeletion = "delete from students where id = '"+request.body.studentId+"'";
   database.query(sqlDeletion , (err, result) =>{
        if(err){
            console.log("Data deletion was not successfull ....");
        }
        else{
            console.log("Data deletion is sucessfull .......");      
        }
   }); 
})

module.exports = router;