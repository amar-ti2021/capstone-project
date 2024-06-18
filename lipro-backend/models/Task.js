import db from "../core/Database.js";
import Model from "../core/Model.js";
class Task extends Model {
  static table = "tasks";

  static async getTodayTasks(user_id) {
    try {
      const startOfDay = new Date();
      startOfDay.setUTCHours(0, 0, 0, 0);
      const endOfDay = new Date();
      endOfDay.setUTCHours(23, 59, 59, 999);

      const startOfDayStr = startOfDay.toISOString();
      const endOfDayStr = endOfDay.toISOString();

      const query = `
        SELECT * FROM ${this.table} 
        WHERE user_id = ? AND 
        ((start_time BETWEEN ? AND ?) OR (end_time BETWEEN ? AND ?))`;
      const results = await db(query, [
        user_id,
        startOfDayStr,
        endOfDayStr,
        startOfDayStr,
        endOfDayStr
      ]);
      return results.length > 0 ? results : null;
    } catch (error) {
      throw new Error("Error fetching today's tasks: " + error.message);
    }
  }

  static async getWeeklyTasks(user_id) {
    try {
      const now = new Date();
      const dayOfWeek = now.getUTCDay();
      const startOfWeek = new Date(now);
      startOfWeek.setUTCDate(now.getUTCDate() - dayOfWeek);
      startOfWeek.setUTCHours(0, 0, 0, 0);

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setUTCDate(startOfWeek.getUTCDate() + 6);
      endOfWeek.setUTCHours(23, 59, 59, 999);

      const startOfWeekStr = startOfWeek.toISOString();
      const endOfWeekStr = endOfWeek.toISOString();

      const query = `
        SELECT * FROM ${this.table} 
        WHERE user_id = ? AND 
        ((start_time BETWEEN ? AND ?) OR (end_time BETWEEN ? AND ?))`;
      const results = await db(query, [
        user_id,
        startOfWeekStr,
        endOfWeekStr,
        startOfWeekStr,
        endOfWeekStr
      ]);
      return results.length > 0 ? results : null;
    } catch (error) {
      throw new Error("Error fetching this week's tasks: " + error.message);
    }
  }
}

export default Task;
