const router = require('express').Router();
const controller = require('./controller.js');

router
    .route('/todo')
    .get(controller.get)
    .post(controller.post)
    .delete(controller.delete);
router
    .route('/todo/:id')
    .delete(controller.delete);
// .update(controller.update);


module.exports = router;