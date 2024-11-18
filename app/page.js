import Image from "next/image";
import CategoryList from "./_components/CategoryList";
import ProductList from "./_components/ProductList";
import Slider from "./_components/Slider";
import GlobalApi from "./_utils/GlobalApi";
import Footer from "./_components/Footer";
import TopCategoryList from "./(routes)/products-category/_components/TopCategoryList";

export default async function Home() {
  const sliderList = await GlobalApi.getSliders();

  const categoryList = await GlobalApi.getCategoryList();

  const productList = await GlobalApi.getProductList();

  return (
    <div className="p-10 md:p-10 px-16">
      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList} />
      <ProductList productList={productList}></ProductList>

      {/* footer image */}
      {/* <Image
        src="/footer.jpg"
        alt="image"
        width={1000}
        height={300}
        className="w-full h-[400px] object-contain"
      ></Image> */}

      <Footer />

      {/* top categoryList */}
      <TopCategoryList categoryList={categoryList} />
    </div>
  );
}
