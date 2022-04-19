const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', (req, res)=>{
    controller.addUser(req.body.name)
    .then((data)=>{
        response.success(req, res, `Se cre con exito el user ${data}`, 200)
    }).catch(e =>{
        response.error(req, res, e, 500);
    });
})






module.exports = router;