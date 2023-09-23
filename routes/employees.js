const express = require('express')
const Employee = require('../model/employee')
const router = express.Router()

router.get('/',async(req,res)=>{
   try{
      const employees = await Employee.find()
      res.json(employees)
   } 
   catch(err){
    res.send('Error'+err)
   }
})
router.get('/:id', async(req,res) => {
   try{
          const employee = await Employee.findById(req.params.id)
          res.json(employee)
   }catch(err){
       res.send('Error ' + err)
   }
})
router.post('/', async(req,res) => { 
   const employee =new Employee({
           name: req.body.name,
           tech: req.body.tech,
           sub:  req.body.sub
   })
   try{
    const e1 = await employee.save()
    res.json(e1)
   }
   catch(err){
      res.send("Error")
   }
  
})
router.patch('/:id',async(req,res)=> {
   try{
       const employee = await Employee.findById(req.params.id) 
       employee.sub = req.body.sub
       const a1 = await employee.save()
       res.json(a1)   
   }catch(err){
       res.send(err)
   }

})



module.exports = router