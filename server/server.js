const mongoose = require("mongoose");
const dotenv = require("dotenv");
//create a path
dotenv.config({ path: './config.env' });
const app = require("./app.js");
const port = process.env.PORT || 5000;
const dburl = process.env.DATABASE_URL;
mongoose.connect(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`);
    })
}).catch(err => console.log(err));
