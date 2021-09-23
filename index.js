const express = require("express");
const cors = require("cors");

let app = express();

// !! Enable processing JSON data
app.use(express.json());

// !! Enable CORS
app.use(cors());

// SETUP END
async function main() {

    app.get('/data', function(req,res){
        res.json([
            {
                "id":1,
                "name":"Ah Kow"
            },
            {
                "id": 2,
                "name":"John Doe"
            }
        ])
    })

}

main();

// START SERVER
app.listen(3000, () => {
  console.log("Server has started");
});