import { RiDeleteBin6Line } from "react-icons/ri";

export const ProductoCar = () => {
  return (
    <div className="bg-[#262837] p-4 rounded-xl  mb-4">
      <div className="grid grid-cols-6 mb-4">
        {/* product descripcion  */}
        <div className=" col-span-4 flex items-center gap-3">
          <img
            src="/comida.png"
            alt="comida img"
            className="w-10 h-10 object-cover"
          />
          <div>
            <h5 className="text-sm">Spaicy seaso...</h5>
            <p className="text-xs text-gray-500">$2.29</p>
          </div>
        </div>
        {/* Qty  */}
        <div>
          <span>2</span>
        </div>
        {/* price  */}
        <div>
          <span>$4.58</span>
        </div>
      </div>
      {/* note  */}
      <div className="grid grid-cols-6 items-center gap-2">
        <form className="col-span-5">
          <input
            type="text"
            className="bg-[#1F1D2B] outline-none py-2  px-4 rounded-lg w-full"
            placeholder="Order note ..."
          />
        </form>

        <div className="text-right">
          <button className=" border border-red-500  p-2 rounded-lg ">
            <RiDeleteBin6Line className="text-red-500 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
