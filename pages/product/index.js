import MainLayout from "../../components/Layout"
import ProdukCard from "../../components/Produk"

const Product = () => {
  return (
    <MainLayout>
      <div className="bg-cover w-full h-28 shadow sm:h-60" style={{ backgroundImage: 'url(/image/bg.png)' }}>
      </div>
      <div className="text-center mx-1 sm:mx-10">
        <div className="my-5 sm:my-10">
          <span className="text-2xl sm:text-3xl">Produk</span>
        </div>
        <div className="flex flex-col gap-2 text-xs sm:gap-4 sm:text-base">
          <ProdukCard />
          <ProdukCard />
          <ProdukCard />
          <ProdukCard />
        </div>
      </div>
    </MainLayout>
  )
}
export default Product