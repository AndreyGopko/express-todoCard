'use strict';
let counter = 0;
function autoInc() {
  return counter++;
}
class Cards {
  constructor() {
    this.data = [];
  }
  get() {
    return this.data;
  }
  add() {
    const row = {};
    row.id = autoInc();
    row.cards = [{ id: autoInc() }];
    this.data.push(row);
    return row;
  }
  delete(id) {
    const index = this.data.findIndex(e => e.id === +id);
    return this.data.splice(index, 1);
  }
  getCards(id) {
    const index = this.data.findIndex(e => e.id === +id);
    return this.data[index].cards;
  }
  addCard(id) {
    const index = this.data.findIndex(e => e.id === +id);
    this.data[index].cards.push({ id: autoInc() });
    return this.data[index].cards;
  }
  deleteCard(groupId, cardId) {
    const index = this.data.findIndex(e => e.id === +groupId);
    const cardIndex = this.data[index].cards.findIndex(e => e.id === +cardId);
    this.data[index].cards.splice(cardIndex, 1);
    return this.data[index].cards;
  }
  saveCard(groupId, cardId, text) {
    const index = this.data.findIndex(e => e.id === +groupId);
    const cardIndex = this.data[index].cards.findIndex(e => e.id === +cardId);
    this.data[index].cards[cardIndex].text = text;
    this.data[index].cards[cardIndex].visible = true;
    return this.data[index];
  }
}

module.exports = new Cards();
