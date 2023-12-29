import { useState } from "react";
import {  Sidebar } from "./components";
import {
  RiAddLine,
  RiArrowDownSLine,
  RiCloseLine,
  
  RiMenu3Fill,
  RiPieChart2Line,
  RiSearch2Line,
  RiUser3Line,
} from "react-icons/ri";
import { Order } from "./components/shared/Order";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };
  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Order showOrder={showOrder} toggleOrder={toggleOrder}/>
      {/* menu de movil */}
      <nav
        className="bg-[#1F1D2B] lg:hidden w-full fixed left-0 bottom-0 text-3xl
       text-gray-400 py-2 px-8 flex justify-between items-center
       rounded-tl-xl rounded-tr-xl "
      >
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChart2Line
          className=" p-2"
          onClick={toggleOrder}
          />
        </button>
        <button
          className="text-white hover:bg-[#262837] p-2 rounded-md transition-all"
          onClick={toggleMenu}
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-20 lg:pr-96  pb-20">
        <div className="p-4 md:p-8">
          {/* header  */}
          <header>
            {/* title and search  */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6 ">
              <div>
                <h1 className="text-2xl  text-gray-300"> Jeager Resto</h1>
                <p className=" text-gray-500">26 Diciembre 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-[#1F1D2B] w-full py-2 pl-10 pr-4 text-gray-300 outline-none rounded-xl"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className=" text-gray-300 flex  items-center justify-between border-b mb-6 md:justify-start md:gap-8">
              <a
                href="#"
                className="relative py-2 pr-4 before:w-1/2 before:h-[3px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[2px] text-[#ec7c6a] "
              >
                Hot dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Cold dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Spoup
              </a>
              <a href="#" className="py-2 pr-2">
                Grill
              </a>
            </nav>
          </header>

          {/* title content  */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* content  */}

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-16">
            {/* card  */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="/comida.png"
                alt="comida img"
                className="w-40 h-40 object-cover  -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spacy seasone seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card  */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="/dish.png"
                alt="comida img"
                className="w-40 h-40 object-cover  -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spacy seasone seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card  */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="/comida.png"
                alt="comida img"
                className="w-40 h-40 object-cover  -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spacy seasone seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card  */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="/dish.png"
                alt="comida img"
                className="w-40 h-40 object-cover  -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spacy seasone seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card  */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="/comida.png"
                alt="comida img"
                className="w-40 h-40 object-cover  -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spacy seasone seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>

            {/* card  */}
            <div className="bg-[#1F1D2B] p-8 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center">
              <img
                src="/dish.png"
                alt="comida img"
                className="w-40 h-40 object-cover  -mt-20 shadow-2xl rounded-full"
              />
              <p className="text-xl">Spacy seasone seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
       
      </main>
    </div>
  );
}

export default App;
