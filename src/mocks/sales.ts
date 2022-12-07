const createRowData = (rowIndex: any) => {
  const randomKey = Math.floor(Math.random() * 6);

  const students = ["Bryan", "Nancy", "Linda", "Alice", "Julia", "Hazel"];

  const itemsQuantity = [3, 5, 1, 2, 2, 4];

  const prices = ["120,00", "200,00", "30,00", "55,00", "48,00", "125,00"];

  return {
    id: rowIndex + 1,
    student: students[randomKey],
    itemsQuantity: itemsQuantity[randomKey],
    price: prices[randomKey],
  };
};

export const salesMock = Array.from({ length: 6 }).map((_, index) =>
  createRowData(index)
);
