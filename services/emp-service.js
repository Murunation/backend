import { pool } from "../config/mysql-config.js";

export async function getEmployees(limit) {
  const [rows] = await pool.query(
    `SELECT emp_no FROM employees limit ${limit}`
  );
  return rows;
}
