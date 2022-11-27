const createRowData = (rowIndex: any) => {
  const randomKey = Math.floor(Math.random() * 6);
  const names = [
    "Suplemento",
    "Creatina",
    "Haltere",
    "Peso",
    "Camisa de treino",
    "Short de academia",
  ];
  const prices = ["30,00", "20,00", "10,00", "15,00", "35,00", "30,00"];

  return {
    id: rowIndex + 1,
    name: names[randomKey],
    price: prices[randomKey],
  };
};

export const itemsMock = Array.from({ length: 6 }).map((_, index) =>
  createRowData(index)
);
