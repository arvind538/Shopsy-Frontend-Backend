require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const connectDB = require("./utils/db");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
    origin: process.env.frontend_URI,
    methods: ["GET, POST, PUT, DELETE, PATCH, HEAD"],
    credentials: true,
};

app.use(cors(corsOptions))

// app.use(
//     cors({
//         origin: process.env.frontend_URI,
//         methods: ["GET", "POST", "PUT", "DELETE"],
//         withCredentials: true,
//     })
// );

app.use(express.json());

app.use("/api/auth", authRoute) // user,login, register,home
app.use("/api/form/", contactRoute); //service, 
app.use("/api/data", serviceRoute); //contact
app.use("/api/admin", adminRoute);


app.use(errorMiddleware);

const PORT = process.env.PORT || 4041;

connectDB().then(() => {
    app.listen(PORT, () => {
        // app.get("/", (req, res) => {
        //     res.status(201).json("running the server");
        // })
        console.log(`Server running at http://localhost:${PORT}`);
    });
})

