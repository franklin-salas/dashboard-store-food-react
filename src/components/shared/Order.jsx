import { RiCloseLine } from "react-icons/ri"
import { ProductoCar } from "./ProductoCar"


export const Order = ({showOrder, toggleOrder}) => {
  return (
    <div className={` fixed top-0 bg-[#1F1D2B] w-full lg:w-96 lg:right-0 h-full transition-all z-50  ${showOrder? 'right-0': '-right-full'}`}>
    {/* orders  */}
    <div className="relative pt-16 lg:pt-4 text-gray-300 p-8 h-full">
      <RiCloseLine className=" lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300  bg-[#262837]  rounded-full text-xl"
      onClick={toggleOrder}/>
      <h2 className="text-2xl my-4">Orders #3645780</h2>
      {/* pills  */}
      <div className="flex items-center gap-4 flex-wrap mb-8">
        <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
          Dine In
        </button>
        <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
          To Go
        </button>
        <button className="text-[#ec7c6a]  py-2 px-4 rounded-xl border border-gray-500">
          Delivery
        </button>
      </div>
      {/* car  */}
      <div>
        <div className="grid grid-cols-6 mb-4 px-4">
          <h5 className="col-span-4">Item</h5>
          <h5>Qty</h5>
          <h5>Price</h5>
        </div>
          Products
        <div className="h-[400px] md:h-[700px] lg:h-[540px] overflow-y-scroll">
           {/* Product  */}
            <ProductoCar/>
            <ProductoCar/>
            <ProductoCar/>
            <ProductoCar/>
            <ProductoCar/>
   
        </div>
       
        
      </div>
      {/* submit payment  */}
      <div className=" bg-[#262837] absolute w-full bottom-0 left-0 p-4">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400">Discount</span>
          <span>$0</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-gray-400">Subtotal</span>
          <span>$201.03</span>
        </div>

        <button className="bg-[#ec7c6a] w-full py-2 rounded-lg px-4" >
          Continue to payment
        </button>
      </div>
    </div>
  </div>
  )
}
