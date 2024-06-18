import Validator from "../core/Validator.js";
import { nanoid } from "nanoid";
import Task from "../models/Task.js";

class TaskController {
  async index(req, res) {
    try {
      const tasks = await Task.where({ user_id: req.user_id });
      if (tasks.length > 0) {
        const data = {
          status: "success",
          message: "Get All tasks",
          data: tasks
        };
        return res.status(200).json(data);
      } else {
        return res.status(200).json({
          status: "fail",
          message: "Data is Empty"
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
        error: error.message
      });
    }
  }

  async store(req, res) {
    try {
      const validator = new Validator();
      const data = await validator.validate(
        {
          user_id: req.user_id,
          id: nanoid(),
          task: req.body.task,
          status: req.body.status,
          start_time: req.body.start_time,
          end_time: req.body.end_time
        },
        {
          id: [["unique", "id"]],
          task: ["required"],
          status: ["required"],
          start_time: ["required", "date"],
          end_time: ["required", "date"]
        },
        "tasks"
      );

      if (data.errors) {
        const response = {
          status: "fail",
          message: "Validation Error",
          errors: data.errors
        };
        return res.status(400).json(response);
      }

      const task = await Task.create(data);

      if (task) {
        const response = {
          status: "success",
          message: `Data of ${task.id} stored successfully`,
          data: data
        };
        return res.status(201).json(response);
      }

      return res.status(500).json({
        status: "fail",
        message: "Internal server error"
      });
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
        error: error.message
      });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    const task = await Task.find(id);
    if (task) {
      const data = {
        status: "success",
        message: "Get task with Id " + id,
        data: task
      };
      return res.status(200).json(data);
    } else {
      return res
        .status(404)
        .json({ status: "fail", message: "Task not Found" });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const task = await Task.find(id);
    if (!task) {
      return res
        .status(404)
        .json({ status: "fail", message: "Task not Found" });
    }

    if (task.user_id != req.user_id) {
      return res
        .status(403)
        .json({ status: "fail", message: "Unauthorized Operation" });
    }

    const validator = new Validator();

    const data = await validator.validate(
      {
        task: req.body.task ?? task.task,
        status: req.body.status ?? task.status,
        start_time: req.body.start_time ?? task.start_time,
        end_time: req.body.end_time ?? task.end_time
      },
      {
        task: ["required"],
        status: ["required"],
        start_time: ["required", "date"],
        end_time: ["required", "date"]
      },
      "tasks"
    );

    if (data.errors) {
      const response = {
        status: "fail",
        message: "Validation Error",
        errors: data.errors
      };
      return res.status(400).json(response);
    }

    const updatedTask = await Task.edit(task.id, data);

    if (updatedTask) {
      const response = {
        status: "success",
        message: `Data of ${task.id} stored successfully`,
        data: data
      };
      return res.status(201).json(response);
    }

    return res
      .status(500)
      .json({ status: "fail", message: "Internal server error" });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const task = await Task.find(id);
    if (!task) {
      return res
        .status(404)
        .json({ status: "fail", message: "Task not Found" });
    }

    if (task.user_id != req.user_id) {
      return res
        .status(403)
        .json({ status: "fail", message: "Unauthorized Operation" });
    }

    const deletedTask = await Task.delete(task.id);

    if (deletedTask) {
      const response = {
        status: "success",
        message: `Data of ${id} deleted successfully`
      };
      return res.status(201).json(response);
    }
    return res
      .status(500)
      .json({ status: "fail", message: "Internal server error" });
  }

  async completed(req, res) {
    try {
      const tasks = await Task.where({
        user_id: req.user_id,
        status: "completed"
      });
      if (tasks && tasks.length > 0) {
        const data = {
          status: "success",
          message: "Get Completed All tasks",
          data: tasks
        };
        return res.status(200).json(data);
      } else {
        return res.status(200).json({
          status: "fail",
          message: "Data is Empty"
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
        error: error.message
      });
    }
  }

  async uncompleted(req, res) {
    try {
      const tasks = await Task.where({
        user_id: req.user_id,
        status: "in_progress"
      });
      if (tasks && tasks.length > 0) {
        const data = {
          status: "success",
          message: "Get Uncompleted All tasks",
          data: tasks
        };
        return res.status(200).json(data);
      } else {
        return res.status(200).json({
          status: "fail",
          message: "Data is Empty"
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
        error: error.message
      });
    }
  }

  async today(req, res) {
    try {
      const tasks = await Task.getTodayTasks(req.user_id);
      if (tasks && tasks.length > 0) {
        const data = {
          status: "success",
          message: "Get All tasks for today",
          data: tasks
        };
        return res.status(200).json(data);
      } else {
        return res.status(200).json({
          status: "fail",
          message: "No tasks for today"
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
        error: error.message
      });
    }
  }
  async weekly(req, res) {
    try {
      const tasks = await Task.getWeeklyTasks(req.user_id);
      if (tasks && tasks.length > 0) {
        const data = {
          status: "success",
          message: "Get All tasks for this week",
          data: tasks
        };
        return res.status(200).json(data);
      } else {
        return res.status(200).json({
          status: "fail",
          message: "No tasks for this week"
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
        error: error.message
      });
    }
  }
}

const object = new TaskController();
export default object;
