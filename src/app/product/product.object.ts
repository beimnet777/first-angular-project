export interface Product{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
  }
  export const PRODUCTS: Product[ ] = [
    { id: 1, name: 'asus', price:5000,imageUrl:'assets/download.jfif',description:"Some quick example text to build on the card title and make up the bulk of the card\'s content."},
    { id: 2, name: 'pavilon', price:4000,imageUrl:'assets/download.jfif',description:"Some quick example text to build on the card title and make up the bulk of the card\'s content."},
    { id: 3, name: 'hp', price:6000,imageUrl:'assets/download.jfif',description:"Some quick example text to build on the card title and make up the bulk of the card\'s content."},
   
];
export interface cart{
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}
export const CART: cart[ ] = [
];
