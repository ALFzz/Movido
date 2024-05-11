const Router = require('express');
const router = new Router();
const filmRouter = require('./filmRouter');
const userRouter = require('./userRouter');

router.use('/user', userRouter)
router.use('/film', filmRouter)

module.exports = router;