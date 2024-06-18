import express from 'express'
import AuthController from '../controllers/AuthController.js'
import TaskController from '../controllers/TaskController.js'
import StatisticController from '../controllers/StatisticController.js'

const router = express.Router()
router.post('/login', AuthController.login)
router.post('/register', AuthController.register)

router.post('/protected/check-auth', AuthController.checkLogin)

router.get('/protected/tasks', TaskController.index)
router.get('/protected/tasks/completed', TaskController.completed)
router.get('/protected/tasks/uncompleted', TaskController.uncompleted)
router.get('/protected/tasks/today', TaskController.today)
router.get('/protected/tasks/weekly', TaskController.weekly)
router.get('/protected/tasks/:id', TaskController.show)
router.get('/protected/statistics', StatisticController.index)
router.put('/protected/tasks/:id', TaskController.update)
router.delete('/protected/tasks/:id', TaskController.destroy)
router.post('/protected/tasks', TaskController.store)

router.all('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' })
})

export default router
