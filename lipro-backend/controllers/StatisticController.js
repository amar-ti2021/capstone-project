import Task from '../models/Task.js'

class StatisticController {
  async index(req, res) {
    try {
      const tasks = await Task.getWeeklyTasks(req.user_id)
      if (tasks && tasks.length > 0) {
        const statistics = {
          completed: tasks.filter((task) =>
            task.status === 'completed' ? task : null
          ).length,
          uncompleted: tasks.filter((task) =>
            task.status === 'in_progress' ? task : ''
          ).length
        }
        const data = {
          status: 'success',
          message: 'Get this week statistics',
          data: statistics
        }
        return res.status(200).json(data)
      } else {
        return res.status(200).json({
          status: 'fail',
          message: 'No tasks for this week'
        })
      }
    } catch (error) {
      return res.status(500).json({
        status: 'fail',
        message: 'Internal server error',
        error: error.message
      })
    }
  }
}

const object = new StatisticController()
export default object
