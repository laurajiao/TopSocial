const express= require('express');
const cors = require('cors')
const app = express()


const router = require('./routes/index')
const{handleErrors}=require('./middleware/errorMiddleware')

app.use(cors());
app.use(express.json());

app.use('/api', router);
//use error middleware at the end
app.use(handleErrors);







PORT=80;
app.listen(PORT,function(){
    console.log('Server is running on http://localhost:80/')
})
