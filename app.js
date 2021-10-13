const express=require('express')
const app =express()

app.use(express.json())

app.use('',require('./Routes/index'))

app.listen(3000,()=>console.log(`SERVER IS RUNNING AT :: PORT 3000`))