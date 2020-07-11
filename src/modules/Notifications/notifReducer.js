const intitalState = {
  notifications: [],
};
export default function notif(state = intitalState, action) {
  switch (action.type) {
    case 'NOTIF_PRESSED': {
      console.log('notifReducer', state);
      return {
        ...state,
        notifications: [...state.notifications, action.notifData],
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
