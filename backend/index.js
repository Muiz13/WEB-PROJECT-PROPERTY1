const express = require("express");
const mongoose = require("mongoose")
const app = express();
app.use(express.json())
require("dotenv").config();
const cors = require("cors")


const propertyRouter = require("./Routes/propertyRoutes");
const mapRouter = require("./Routes/mapRoutes");
const supplyRouter = require("./Routes/supplyRoutes");
const userRouter = require("./Routes/userRoutes");
const sellerRouter = require("./Routes/sellerRoutes");

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/files",express.static('public/uploads'));

app.use( '/admin',userRouter)
app.use( '/property',propertyRouter)
app.use( '/user', userRouter)
app.use( '/map', mapRouter)
app.use( '/supply', supplyRouter)
app.use('/seller', sellerRouter);  // Add seller route

// app.post("/upload",upload,(req,res)=>{
//     console.log(req.body.file)
//     res.send("Upload")
// })

const findAvailablePort = async (startPort) => {
    let port = startPort;
    while (true) {
        try {
            await new Promise((resolve, reject) => {
                const server = app.listen(port)
                    .once('error', (err) => {
                        server.close();
                        if (err.code === 'EADDRINUSE') {
                            port++;
                            reject(err);
                        } else {
                            reject(err);
                        }
                    })
                    .once('listening', () => {
                        server.close();
                        resolve(port);
                    });
            });
            return port;
        } catch (err) {
            if (err.code !== 'EADDRINUSE') throw err;
        }
    }
};

(async () => {
    try {
        const port = await findAvailablePort(process.env.PORT || 3005);
        app.listen(port, () => {
            console.log(`App Listening at Port ${port}`);
            console.log(`http://localhost:${port}`);
            
            // Update your BASE_FILE_URL dynamically
            process.env.BASE_FILE_URL = `http://localhost:${port}/files/`;
        });

        mongoose.connect(process.env.MOUNT_PAKISTAN_URI || MONGODB_URI).then(() => {
            console.log("Connected to MongoDB");
        });
    } catch (error) {
        console.error('Failed to start server:', error);
    }
})();