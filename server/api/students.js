const router = require('express').Router();

const { Student, Campus } = require('../db');

router.get('/students', async(req, res, next) => {
    try{
        const students = await Student.findAll();
        res.send(students)
    }catch(error){
        next(error);
    }
});

router.get('/students/:id', async(req, res, next) => {
    
    try{
        const student = await Student.findByPk(req.params.id, {
            include:{
                model: Campus,
            }
        });
        res.send(student);
    }catch(error){
        next(error);
    }
});

router.post('/students', async(req, res, next) => {
    try{
        res.status(201).send(await Student.create(req.body));
    }catch(error){
        console.log('STUDENT NOT ADDED!')
        next(error);
    }
});


router.delete('/students/:id', async(req, res, next) => {
    try{
        const student = await Student.findByPk(req.params.id);
        await student.destroy();
        res.send(student);
    }catch(error){
        console.log('STUDENT NOT DELETED!')
        next(error);
    }
});

router.put('/students/:id', async(req, res, next) => {
    try{
        console.log("UPDATE API", req.params, req.body)
        const student = await Student.findByPk(req.params.id);
        res.send(await student.update(req.body));
    }catch(error){
        console.log('STUDENT NOT UPDATED!')
        next(error);
    }
})
module.exports = router;