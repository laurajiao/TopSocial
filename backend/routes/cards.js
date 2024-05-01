const express=require('express');
const axios=require('axios');

const cardsRouter=express.Router();
const {getCardsById,postCards,deleteCards}=require('../controllers/cardsController')

//GET get cards by id /api/cards?id=1
cardsRouter.get('/',getCardsById);
//POST
cardsRouter.post('/',postCards);
//DELETE delete cards by id /api/cards/:card_id
cardsRouter.delete('/:card_id',deleteCards)

module.exports=cardsRouter;