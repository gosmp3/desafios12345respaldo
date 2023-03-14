export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  quantity: number;
}
export interface CartProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  quantity: number;
}
export const products = [
  {
    id: 1,
    name: 'iPhone XL',
    price: 799,
    description: 'El mejor telefono segun los mamadores',
    images: ['uno.png'],
    quantity: 0
  },
  {
    id: 2,
    name: 'Nokia 3220',
    price: 699,
    description: 'Trae gomas con colores a los lados',
    images: ['dos.jpeg'],
    quantity: 0
  },
  {
    id: 3,
    name: 'Sony Ericcson',
    price: 299,
    description: 'Que chingones estaban estos celulares',
    images: ['tres.jpg'],
    quantity: 0
  },
  {
    id: 4,
    name: 'Motorolla',
    price: 899,
    description: 'Buena estetica y buen rendimiento',
    images: ['cuatro.png'],
    quantity: 0
  },
  {
    id: 5,
    name: 'Samsung',
    price: 50,
    description: 'El celular que yo traigo y esta bien feo',
    images: ['cinco.jpg'],
    quantity: 0
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/