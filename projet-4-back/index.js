require("dotenv").config()
const app = require("./src/app");

const port = process.env.PORT;

app.listen(port, (err) => {
    if(err){
        console.info(err)
    } else {
        console.info(`Server address : http://localhost:${port}`);
    }
})