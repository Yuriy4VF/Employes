export const generateId = (): string =>
  String(Date.now() * Math.floor(Math.random() * 1000000));
