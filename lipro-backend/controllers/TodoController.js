import Validator from "../core/Validator.js";
import { nanoid } from "nanoid";
import Todo from "../models/Todo.js";

class TodoController {
  async index(req, res) {
    try {
      const todos = await Todo.where("user_id", req.user_id);
      if (todos.length > 0) {
        const data = {
          status: "success",
          message: "Get All todos",
          data: todos,
        };
        return res.status(200).json(data);
      } else {
        return res.status(200).json({
          status: "fail",
          message: "Data is Empty",
        });
      }
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
        error: error.message,
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
          todo: req.body.todo,
          status: req.body.status,
          start_time: req.body.start_time,
          end_time: req.body.end_time,
        },
        {
          id: [["unique", "id"]],
          todo: ["required"],
          status: ["required"],
          start_time: ["required", "date"],
          end_time: ["required", "date"],
        },
        "todos"
      );

      if (data.errors) {
        const response = {
          status: "fail",
          message: "Validation Error",
          errors: data.errors,
        };
        return res.status(400).json(response);
      }

      const todo = await Todo.create(data);

      if (todo) {
        const response = {
          status: "success",
          message: `Data of ${todo.id} stored successfully`,
          data: data,
        };
        return res.status(201).json(response);
      }

      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
      });
    } catch (error) {
      return res.status(500).json({
        status: "fail",
        message: "Internal server error",
        error: error.message,
      });
    }
  }

  async show(req, res) {
    const { id } = req.params;

    const todo = await Todo.find(id);
    if (todo) {
      const data = {
        status: "success",
        message: "Get todo with Id " + id,
        data: todo,
      };
      return res.status(200).json(data);
    } else {
      return res
        .status(404)
        .json({ status: "fail", message: "Todo not Found" });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const todo = await Todo.find(id);
    if (!todo) {
      return res
        .status(404)
        .json({ status: "fail", message: "Todo not Found" });
    }

    if (todo.user_id != req.user_id) {
      return res
        .status(403)
        .json({ status: "fail", message: "Unauthorized Operation" });
    }

    const validator = new Validator();

    const data = await validator.validate(
      {
        todo: req.body.todo ?? todo.todo,
        status: req.body.status ?? todo.status,
        start_time: req.body.start_time ?? todo.start_time,
        end_time: req.body.end_time ?? todo.end_time,
      },
      {
        todo: ["required"],
        status: ["required"],
        start_time: ["required", "date"],
        end_time: ["required", "date"],
      },
      "todos"
    );

    if (data.errors) {
      const response = {
        status: "fail",
        message: "Validation Error",
        errors: data.errors,
      };
      return res.status(400).json(response);
    }

    const updatedTodo = await Todo.edit(todo.id, data);

    if (updatedTodo) {
      const response = {
        status: "success",
        message: `Data of ${todo.id} stored successfully`,
        data: data,
      };
      return res.status(201).json(response);
    }

    return res
      .status(500)
      .json({ status: "fail", message: "Internal server error" });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const todo = await Todo.find(id);
    if (!todo) {
      return res
        .status(404)
        .json({ status: "fail", message: "Todo not Found" });
    }

    if (todo.user_id != req.user_id) {
      return res
        .status(403)
        .json({ status: "fail", message: "Unauthorized Operation" });
    }

    const deletedTodo = await Todo.delete(todo.id);

    if (deletedTodo) {
      const response = {
        status: "success",
        message: `Data of ${id} deleted successfully`,
      };
      return res.status(201).json(response);
    }
    return res
      .status(500)
      .json({ status: "fail", message: "Internal server error" });
  }
}

const object = new TodoController();
export default object;
