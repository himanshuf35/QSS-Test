export const cardPress = (cardData) => (dispatch) => {
  setTimeout(() => {
    dispatch({type: 'CARD_PRESS', cardData: cardData});
  }, 5000);
};
