const date = new Date();
date.setDate(date.getDate() + 1);
const month = date.getMonth() + 1;
const day = date.getDate();
export const dateStr = `${month}月${day}日`;