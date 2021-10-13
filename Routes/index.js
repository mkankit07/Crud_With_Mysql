const router = require('express').Router()
const { getHello ,insertData, updateUsers,deleteUserbyid,getUser,getdatabase} = require('../Controller/index')
router.get('/a',getdatabase)
router.get('/', getHello)
router.post('/insert', insertData)
router.put('/update/:id',updateUsers)
router.delete('/delete/:id',deleteUserbyid)
router.get('/get/:id',getUser)




module.exports = router;

