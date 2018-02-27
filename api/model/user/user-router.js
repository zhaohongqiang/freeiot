const controller = require('./user-controller')
const Router = require('express').Router
const router = new Router()

router.route('/')
  .get((...args) => controller.find(...args))
  .post((...args) => controller.create(...args))

router.route('/auth').post((...args) => controller.auth(...args))

router.route('/finish/:id').post((...args) => controller.finish(...args))
router.route('/finishforgot/:id').put((...args) => controller.finishforgot(...args))
router.route('/forgot').post((...args) => controller.forgot(...args))

router.route('/:id')
  .put((...args) => controller.update(...args))
  .get((...args) => controller.findById(...args))
  .delete((...args) => controller.remove(...args))

module.exports = router
