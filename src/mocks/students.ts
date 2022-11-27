const createRowData = (rowIndex: any) => {
  const randomKey = Math.floor(Math.random() * 9);
  const names = [
    "Hal",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
    "Hazel",
  ];
  const cities = [
    "Beijing",
    "Shanghai",
    "New Amieshire",
    "New Gust",
    "Lefflerstad",
    "East Catalina",
    "Ritchieborough",
    "Gilberthaven",
    "Eulaliabury",
  ];
  const emails = [
    "yahoo.com",
    "gmail.com",
    "hotmail.com",
    "outlook.com",
    "aol.com",
    "live.com",
    "msn.com",
    "yandex.com",
    "mail.ru",
  ];
  const birth = [
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
    "01/01/2000",
  ];

  return {
    id: rowIndex + 1,
    name: names[randomKey],
    city: cities[randomKey],
    email: names[randomKey].toLocaleLowerCase() + "@" + emails[randomKey],
    birth: birth[randomKey],
  };
};

export const studentsMock = Array.from({ length: 20 }).map((_, index) =>
  createRowData(index)
);
