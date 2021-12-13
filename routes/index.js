const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/', indexController.getIndex) 

router.post('/messages', indexController.createMessage)

router.put('/thumbUp', indexController.thumbsUp)

router.put('/thumbDown', indexController.thumbsDown)

router.delete('/deleteMessage', indexController.deleteMessage)

module.exports = router
