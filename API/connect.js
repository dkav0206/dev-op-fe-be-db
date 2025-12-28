import mysql from "mysql2";

export const db = mysql.createConnection({
    host:"170.64.180.243",
    user: "root",
    password:"1234",
    database:"mydevify_social",
    port:"3306"
}) 