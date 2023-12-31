import React from "react";
import Product from "./Product.jsx";

const products = [
  {
    _id: "100001",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100002",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100003",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100004",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100005",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100005",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100005",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100005",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100005",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100005",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100005",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
  {
    _id: "100005",
    img: "https://images.pexels.com/photos/258244/pexels-photo-258244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    productName: "Round Table Clock",
    price: "44.00",
    color: "Black",
  },
];

const App = () => {
  return (
    <div className="container mx-auto my-96">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Product
            key={index}
            _id={product._id}
            img={product.img}
            productName={product.productName}
            price={product.price}
            color={product.color}
          />
        ))}
      </div>
    </div>
  );
};

export default App;