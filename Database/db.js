const mysql=require('mysql')
const connection=mysql.createConnection({
user:"root",
host:"localhost",
password:"Ankit@123",
database:"demoExpress"
})

connection.connect((err,data)=>{
    if(err){
        console.log(err);
    }
    console.log('Database Connected...')
})
let query= 'CREATE TABLE demo(id int AUTO_INCREMENT,name VARCHAR(255),email VARCHAR(255),password VARCHAR(255),PRIMARY KEY (id))';
connection.query(query,(err)=>{
    if(err){
        console.log("table already exists.");
    }
    else{
        console.log('table created');
    }
})
module.exports=connection;
