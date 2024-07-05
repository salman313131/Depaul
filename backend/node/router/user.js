const express = require('express')
const router = express.Router()
const auth = require('../middlerware/auth')
const user = require('../controller/user')

router.post('/user',user.addUser)
router.post('/login',user.login)
router.post('/academmic',auth,user.addAcademic)
router.post('/grade',auth,user.addGrades)

module.exports = router