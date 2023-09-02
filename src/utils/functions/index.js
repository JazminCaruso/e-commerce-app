export const sumTotal = (items) => items.map((item) => item.price * item.quantity).reduce((acc, curr) => acc + curr, 0);
