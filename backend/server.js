const express = require("express")
const cors = require("cors")
const mysql = require("mysql")

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "test"
})

app.get("/posts", (req, res) =>{
    const sql = "SELECT * FROM posts"
    db.query(sql, (err, data) =>{
     if(err) return res.json(err)
     return res.json(data)
    })
 })

app.get("/posts/:id", (req, res) =>{
    
   const sql = "SELECT * FROM posts WHERE id = ? "
   const id =req.params.id
   db.query(sql,[id], (err, data) =>{
    if(err) return res.json(err)
    return res.json(data)
   })
})

app.post("/posts", (req, res) =>{
    const sql = "INSERT INTO posts(`title`, `description`, `imgaeUrl`) VALUES(?)"
    const values = [
        req.body.title,
        req.body.description,
        req.body.imgaeUrl
    ]
    db.query(sql, [values], (err, data) =>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.put("/update/:id", (req, res) =>{
    const sql = "UPDATE posts SET `title` = ?, `description` = ? `imgaeUrl` = ? WHERE id = ?"
    const values = [
        req.body.title,
        req.body.description,
        req.body.imgaeUrl
    ]
    const id = req.params.id
    db.query(sql, [...values, id], (err, data) =>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.delete("/posts/:id", (req,res) =>{
    const sql = "DELETE FROM posts WHERE id = ?"
    const id = req.params.id
    db.query(sql,[id],(err, data) =>{
        if(err) return res.json("Error")
        return res.json(data)
    })
})

app.listen(3001, () =>{
    console.log("running...")
})