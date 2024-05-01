const axios=require('axios');
const { post } = require('../routes');

const CARDS_API_URL='http://localhost:8000/cards'

const getCardsById=async function(req,res,next){
    const id = req.query.id;
    if(!id){
        return res.status(400).send('Id is required')
    }
    try { response= await axios.get(`${CARDS_API_URL}?id=${id}`)
    const card=response.data;
    if(!card.length){
        return res.status(404).json({
            msg:'Card not found'
        })
    }
    res.status(200).json({
        meg:'Get card succeed',
        data:card
    })
        
    } catch (error) {
        next(error)
    }
}

const postCards=async function(req,res,next){
    const newCard = req.body;
    if(Object.keys(newCard).length===0){
        return res.status(400).json({
            msg:'Card is required'
        })
    }
    try { await axios.post(CARDS_API_URL,newCard,{
        Headers:{"Content-Type":"application/json"}
    });
    res.status(200).json({
        msg:'Card is created'
    })
        
    } catch (error) {
      next(error)  
    }

}


const deleteCards= async function(req,res,next){
    const id= req.params.card_id;
    if(!id){
        return res.status(400).send('id is require')
    }
    try {
       await axios.delete(`${CARDS_API_URL}/${id}`)
        res.status(200).json({
            msg:'Card is deleted'
        })
        
    } catch (error) {
        next(error)
        
    }




    

}
module.exports = {getCardsById,postCards,deleteCards};