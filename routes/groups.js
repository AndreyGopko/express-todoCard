const express = require('express');
const router = module.exports = express.Router();
const data = require('./data.js');

/* GET users listing. */
router.get('/', (req, res) => {
  res.json(data.get());
});
router.post('/', (req, res) => {
  res.send(data.add());
});
router.delete('/:id', (req, res) => {
  res.send(data.delete(req.params.id));
});
router.get('/:id/cards', (req, res) => {
  res.send(data.getCards(req.params.id));
});
router.post('/:id/cards', (req, res) => {
  res.send(data.addCard(req.params.id));
});
router.delete('/:groupId/cards/:cardId', (req, res) => {
  res.send(data.deleteCard(req.params.groupId, req.params.cardId));
});
router.put('/:groupId/cards/:cardId/:text', (req, res) => {
  res.send(data.saveCard(req.params.groupId, req.params.cardId, req.params.text));
});
