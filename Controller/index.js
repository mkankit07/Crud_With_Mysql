const db=require('../Database/db')

exports.getHello = (req, res) => {

    res.send({ message: "hello brother" })
}
exports.getdatabase = (req, res) => {
    let sql='create database demoExpress'
    db.query(sql,(err,data)=>{
        if (err) {
            console.log(err);
        }
        res.send("database created")
    })

}

//insertData
exports.insertData = (req, res) => {
    const data={
        name:req.body.name,
        email:req.body.email,
        password:req.body.password}
    const sql='insert into demo set ?'
    db.query(sql ,data,(err,data)=>{
        if (er){
            console.log(err);
            res.send({message:err})
        }
        console.log(data);
        res.json({data:'insert successfully!'})

    })}

//update
exports.updateUsers =  (req, res) => {
    let sql = `update demo set name='${req.body.name}', email='${req.body.email}' , password='${req.body.password}' Where id = ${req.params.id}`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            res.send({message:err})
        };
        console.log(data);
        res.send({data:'user updated successfully!'})
    })
}
//delete 

exports.deleteUserbyid =  (req, res) => {
    let sql = `delete from demo Where id = ${req.params.id}`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            res.send({message:err})
        };
        console.log(data);
        res.send({data:'data delete successfully!'})
    })
}

//get user by id 

exports.getUser =  (req, res) => {
    let sql = `select * from demo Where id = ${req.params.id}`;
    db.query(sql, (err, data) => {
        if (err) {
            console.log(err);
            res.send({message:err})
        };
        console.log(data);
        res.send(data)
    })
}