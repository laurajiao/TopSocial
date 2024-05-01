const axios = require('axios');

const getMessage = async function(req,res,next){
    try {const url='http://localhost:8000/message';
         const response = await axios.get(url);
         res.status(200).json({
            message:'get message succeed',
            data:response.data
         })
        
    } catch (error) {
        next(error)
        
    }
}

module.exports={getMessage}