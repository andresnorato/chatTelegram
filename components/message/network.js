const express = require('express');
const response = require('../../network/response');
const controller = require('../message/controller');
const router = express.Router();


router.get('/', (req, res) => {
    const filterMessage = req.query.user || null;
    controller.getMessages(filterMessage)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })
});





router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMassege) => {
            response.success(req, res, fullMassege)
        }).catch(e => {
            response.error(req, res, 'Ups te faltan algun campo para eviar el mensaje', 400, 'No hay usuario o contraseña');
        })
});


router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        })
})


router.delete('/:id', (req, res) => {
    controller.deletemessage(req.params.id)
        .then((data) => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200)
        })
        .catch(e => {
            response.error(req, res, 'Error al eliminar', 404, e)
        })
})


module.exports = router;