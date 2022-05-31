
const express = require("express")
const mongoose = require("mongoose")

const app = express()

const port = 5000

app.use(express.json())

app.use(require('./newsRoute/newsRout'))

app.use(require('./newsRoute/categoriesRout'))

app.use(require('./newsRoute/commentsRout'))

mongoose.connect('mongodb+srv://AgReSSoR:Magomed95@cluster0.rdhjd.mongodb.net/?retryWrites=true&w=majority')

.then(() => console.log("Успешное соединениились с сервером MongoDB")) 
.catch(() => console.log("Ошибка при соединении с сервером MongoDB "))

app.listen(port, () => {
    console.log(`Сервер запушен успешно http://localhost:${port}`)
}) 
