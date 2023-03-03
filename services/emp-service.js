import { pool } from "../config/mysql-config.js";

export async function getEmployees(limit) {
  const [rows] = await pool.query(`SELECT * FROM product limit ${limit}`);
  return rows;
}
export async function getEmployee(id) {
  const [row] = await pool.query(`SELECT * FROM employees where emp_no=${id}`);
  return row[0];
}

export async function createEmployee(
  name,
  brand_id,
  category_id,
  created_date,
  description,
  sale,
  price,
  stock,
  image
) {
  const [result] = await pool.query(
    `INSERT INTO product VALUES {?, ?, ?, ?, ?, ?, ?, ?, ?, ?}`,
    {
      name,
      brand_id,
      category_id,
      created_date,
      description,
      sale,
      price,
      stock,
      image,
    }
  );
  return result;
}

// export async function deleteProduct(id) {
//   const [row] = await pool.query(`DELETE FROM product WHERE id=${id}`);
//   return row;
// }
