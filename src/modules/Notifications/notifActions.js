export const notifPressed = (notifData) => {
  return {
    type: 'NOTIF_PRESSED',
    notifData: notifData,
  };
};
