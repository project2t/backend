const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");

require("./DB/db");
const courserouter = require("./routers/routes/courses");
const Userrouter = require("./routers/routes/userschema");
//intinal express
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/user", Userrouter);
app.use("/courses", courserouter);
app.use(morgan("dev"));

//

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
