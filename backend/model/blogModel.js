import pool from "../db.js";

export async function getBlogs() {
    const [rows]= await pool.query(`
        SELECT *
        FROM blogs
        `)
        return rows
    
}

export async function getBlog(id) {
    const [rows]= await pool.query(
            `SELECT * 
            FROM blogs
            WHERE id=?
            `,[id]
    )
    return rows[0]
    
}

export async function createBlog(title, body, author_name) {
    
    const [rows]=await pool.query(`
        INSERT INTO blogs(
        title, body, author_name
        ) 
        VALUES (?,?,?)
        `,[title, body, author_name]
    )
    const id=rows.insertId
    return getBlog(id)
}

