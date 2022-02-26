
/*
const arr = [
  {
    id: 1,
    nombre: 'producto 1',
    cantidad: 1,
  },
  {
    id: 2,
    nombre: 'producto 2',
    cantidad: 1,
  },
];

//Encotnramos el objeto
const obj = arr.find((elem) => elem.id === 1);
console.log(obj);

//Ahora le modificamos la cantidad
const index = arr.indexOf(obj); //buscamos el indice en el array
console.log(index);

arr[index].cantidad = 3; //le agregamos la nueva cantidad
console.log(arr);

//En react para que funcione tienes que setear el estado de nuevo
//setCart([...cart]) por ejemplo
*/


export const stock = [
    {
        id: 1,
        nombre: 'Producto 1',
        desc: 'descripcion producto 1',
        precio: 1600,
        img: 'https://via.placeholder.com/150',
        categoria: 'Gabinete',
        stock: 10
    },
    {
        id: 2,
        nombre: 'Producto 2',
        desc: 'descripcion producto 2',
        precio: 2600,
        img: 'https://via.placeholder.com/150',
        categoria: 'Motherboard',
        stock: 10
    },
    {
        id: 3,
        nombre: 'Producto 3',
        desc: 'descripcion producto 3',
        precio: 3600,
        img: 'https://via.placeholder.com/150',
        categoria: 'Motherboard',
        stock: 10
    },
    {
        id: 4,
        nombre: 'Producto 4',
        desc: 'descripcion producto 4',
        precio: 3600,
        img: 'https://via.placeholder.com/150',
        categoria: 'Motherboard',
        stock: 10
    },
    {
        id: 5,
        nombre: 'Producto 5',
        desc: 'descripcion producto 5',
        precio: 5600,
        img: 'https://via.placeholder.com/150',
        categoria: 'Memoria RAM',
        stock: 10
    },
    {
        id: 6,
        nombre: 'Producto 6',
        desc: 'descripcion producto 6',
        precio: 6600,
        img: 'https://via.placeholder.com/150',
        categoria: 'Procesador',
        stock: 10
    },
    {
        id: 7,
        nombre: 'Producto 7',
        desc: 'descripcion producto 7',
        precio: 7600,
        img: 'https://via.placeholder.com/150',
        categoria: 'Memoria RAM',
        stock: 10
    },
    {
        id: 8,
        nombre: 'Producto 8',
        desc: 'descripcion producto 8',
        precio: 8600,
        img: 'https://via.placeholder.com/150',
        categoria: 'Disco Rigido',
        stock: 10
    },
]