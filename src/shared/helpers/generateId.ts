export const generateId = () =>
  String(Date.now() * Math.floor(Math.random() * 1000000));
