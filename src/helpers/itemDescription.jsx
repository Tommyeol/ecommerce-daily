let productos = [
  {
    id: "1",
    nombre: "Protector SPF 50+ Beige",
    descripcion: "Protector Solar Soleil Extreme",
    foto: "https://dailyderm.com/wp-content/uploads/2018/05/Soleil-SPF-50-Beige-Dailyderm-250x250.jpg",
    precio: 379,
  },
  {
    id: "2",
    nombre: "Loción Antiseborreica",
    descripcion: "Seboreguladores",
    foto: "https://dailyderm.com/wp-content/uploads/2018/05/Locion-Antiseborreica-Nueva-250x250.jpg",
    precio: 192,
  },
  {
    id: "3",
    nombre: "Gel Scrub",
    descripcion: "Dermolimpiadores",
    foto: "https://dailyderm.com/wp-content/uploads/2018/05/Gel-Scrub-Exfoliante-Dailyderm-250x250.jpg",
    precio: 257,
  },
  {
    id: "4",
    nombre: "Serum Seffacer Tranexamico",
    descripcion: "Aclaradores",
    foto: "https://dailyderm.com/wp-content/uploads/2020/05/Dailyderm-Gel-Serum-Tranexamico-250x250.jpg",
    precio: 770,
  },
];

export const getFetch = () => {
  // acciones
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
};
