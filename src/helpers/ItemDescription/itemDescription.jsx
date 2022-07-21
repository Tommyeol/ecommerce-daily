let productos = [
  {
    id: "vhhdWbEqhlARplQR4uda",
    nombre: "Protector SPF 50+ Beige",
    categoria: "Crema",
    foto: "https://dailyderm.com/wp-content/uploads/2018/05/Soleil-SPF-50-Beige-Dailyderm-250x250.jpg",
    precio: 379,
  },
  {
    id: "w3JIfO3z7QgjzZo1V4ns",
    nombre: "Loción Antiseborreica",
    categoria: "Gel",
    foto: "https://dailyderm.com/wp-content/uploads/2018/05/Locion-Antiseborreica-Nueva-250x250.jpg",
    precio: 192,
  },
  {
    id: "4QG7c7gN3BTHxHBJayzS",
    nombre: "Gel Scrub",
    categoria: "Gel",
    foto: "https://dailyderm.com/wp-content/uploads/2018/05/Gel-Scrub-Exfoliante-Dailyderm-250x250.jpg",
    precio: 257,
  },
  {
    id: "Bax3LkgVbGo55aQHUdR3",
    nombre: "Serum Seffacer Tranexamico",
    categoria: "Crema",
    foto: "https://dailyderm.com/wp-content/uploads/2020/05/Dailyderm-Gel-Serum-Tranexamico-250x250.jpg",
    precio: 770,
  },
];

export const getFetch = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id) {
        resolve(productos.find((prod) => prod.id === id));
      } else {
        resolve(productos);
      }
    }, 1000);
  });
};
