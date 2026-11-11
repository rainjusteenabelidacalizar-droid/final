const express=require('express')
const router=express.Router();
const userController=require('../controllers/userController');

//endpoint
app.get('/api/enrollment', getEnrollments);
app.post('/api/enrollment', enroll);
router.get('/water_bills',userController.getAllUsers);
router.post('/water_bills',userController.createUser);
router.put('/water_bills',userController.updateUser);
router.delete('/users',userController.deleteUser)
module.exports = router;
