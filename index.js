const express=require('express')
const mongoose=require('mongoose')
const workoutRoutes= require('./Routes/workoutRoutes')
const user= require('./Routes/user')
const cors= require('cors')
require('dotenv').config()



const app=express()
app.use(express.json())

//why is this not cyclic?
app.use(cors({
    origin:[//"http://localhost:3000",
    //"https://mern-task-app.onrender.com",
    //"https://embarrassed-gray-bullfrog.cyclic.app",
    "https://645babf6277e28008de671a4--bejewelled-tulumba-7f61b5.netlify.app/"]
}))


app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})
//app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',user)

mongoose.connect('mongodb+srv://ronananderson23:March2023@marchcluster.eyx00ls.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log('listening on port',4000)
    app.listen(process.env.PORT||4000,()=>{
    
    })
}).catch((error)=>{
    console.log(error)
})

