import Product from "../subComponents/Product";
import Title from "../subComponents/Title";
import productImg1 from "./../assets/images/5.png";
import productImg2 from "./../assets/images/6.png";
import productImg3 from "./../assets/images/7.png";
import productImg4 from "./../assets/images/8.png";
import productImg5 from "./../assets/images/9.png";
import productImg6 from "./../assets/images/10.png";

const Products = () => {
  return (
    <div className="container w-full px-5 flex flex-col items-center">
      <Title
        title={"Our New Products"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam quidem dignissimos fuga animi voluptatem aut."
        }
      ></Title>
      <div className="grid lg:grid-cols-2 grid-cols-1 w-fit gap-5">
        <Product
          productImage={productImg1}
          ratings={4.5}
          views={22}
          loves={18}
          productName={"Sports Jacket"}
          productBio={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sed maiores harum."
          }
          price={18.2}
          deliveryFee={2.55}
        ></Product>
        <Product
          productImage={productImg2}
          ratings={4.1}
          views={66}
          loves={36}
          productName={"World Cup Stickers"}
          productBio={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sed maiores harum."
          }
          price={1.28}
          deliveryFee={0.55}
        ></Product>
        <Product
          productImage={productImg3}
          ratings={4.5}
          views={22}
          loves={18}
          productName={"Sports Cap"}
          productBio={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sed maiores harum."
          }
          price={5.2}
          deliveryFee={2.05}
        ></Product>
        <Product
          productImage={productImg4}
          ratings={4.8}
          views={81}
          loves={72}
          productName={"Football T-Shirt"}
          productBio={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sed maiores harum."
          }
          price={11.2}
          deliveryFee={2}
        ></Product>
        <Product
          productImage={productImg5}
          ratings={4}
          views={26}
          loves={16}
          productName={"Cricket Helmet"}
          productBio={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sed maiores harum."
          }
          price={26.2}
          deliveryFee={2.5}
        ></Product>
        <Product
          productImage={productImg6}
          ratings={4.5}
          views={120}
          loves={57}
          productName={"Football"}
          productBio={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae sed maiores harum."
          }
          price={6.2}
          deliveryFee={1.8}
        ></Product>
      </div>
    </div>
  );
};

export default Products;
