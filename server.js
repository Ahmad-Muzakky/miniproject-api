const express =  require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "travelio_miniproject",
}); 

app.get("/", (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

    connection.query("SELECT * FROM book", (err, rows) => {
      connection.release();
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    });
  });
});

app.post("/", (req,res) =>{
    pool.getConnection((err,connection)=>{
      if(err) throw err
      console.log(`connected as id ${connection.threadId}`)

        const params = req.body

      connection.query('INSERT INTO book SET ?',params,(err,rows)=>{
        connection.release();
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
      })
    })
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));