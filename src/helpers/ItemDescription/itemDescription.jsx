let productos = [
  {
    id: "1",
    nombre: "Protector SPF 50+ Beige",
    categoria: "Crema",
    foto: "https://dailyderm.com/wp-content/uploads/2018/05/Soleil-SPF-50-Beige-Dailyderm-250x250.jpg",
    precio: 379,
  },
  {
    id: "2",
    nombre: "Loción Antiseborreica",
    categoria: "Gel",
    foto: "https://dailyderm.com/wp-content/uploads/2018/05/Locion-Antiseborreica-Nueva-250x250.jpg",
    precio: 192,
  },
  {
    id: "3",
    nombre: "Gel Scrub",
    categoria: "Gel",
    foto: "https://dailyderm.com/wp-content/uploads/2018/05/Gel-Scrub-Exfoliante-Dailyderm-250x250.jpg",
    precio: 257,
  },
  {
    id: "4",
    nombre: "Serum Seffacer Tranexamico",
    categoria: "Crema",
    foto: "https://dailyderm.com/wp-content/uploads/2020/05/Dailyderm-Gel-Serum-Tranexamico-250x250.jpg",
    precio: 770,
  },
];

export const getFetch = (id) => {
  // acciones
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

// let producto = {
//   id: "1",
//   nombre: "Protector SPF 50+ Beige",
//   categoria: "Protector Solar Soleil Extreme",
//   foto: "https://dailyderm.com/wp-content/uploads/2018/05/Soleil-SPF-50-Beige-Dailyderm-250x250.jpg",
//   precio: 379,
// };

// export const getFetchOne = () => {
//   // acciones
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(productos);
//     }, 2000);
//   });
// };
