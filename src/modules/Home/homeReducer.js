const initialState = {
  cards: [],
};

export default function home(state = initialState, action) {
  switch (action.type) {
    case 'CARD_PRESS': {
      console.log('prevState', state, 'action', action);
      return {
        ...state,
        cards: [...state.cards, action.cardData],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
