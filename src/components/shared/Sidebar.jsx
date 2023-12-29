import { RiHome6Line, RiLogoutBoxLine, RiMailLine, RiNotification3Line, RiPercentLine, RiPieChart2Line, RiSettings4Line } from "react-icons/ri";

export const Sidebar = ( {showMenu}) => {
  return (
    <div className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-20 h-full flex flex-col justify-between py-6  rounded-tr-xl rounded-br-xl z-50
    transition-all ${showMenu? 'left-0': '-left-full'}`}>
      <div>
      <ul className="pl-2">
        <li>
          <h1 className="text-xl text-gray-300 uppercase font-bold text-center my-5">
            Logo
          </h1>
        </li>
        <li className="bg-[#262837] p-3 rounded-tl-xl rounded-bl-xl">
          <a
            href="#"
            className="bg-[#ec7c6a] p-3 block rounded-xl text-center text-white"
          >
            <RiHome6Line className="text-xl mx-auto" />
          </a>
        </li>

        <li className=" hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#ec7c6a] p-3 block rounded-xl text-center text-[#ec7c6a] group-hover:text-white"
          >
            <RiPercentLine className="text-xl mx-auto" />
          </a>
        </li>

        <li className=" hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#ec7c6a] p-3 block rounded-xl text-center text-[#ec7c6a] group-hover:text-white"
          >
            <RiPieChart2Line className="text-xl mx-auto" />
          </a>
        </li>

        <li className=" hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#ec7c6a] p-3 block rounded-xl text-center text-[#ec7c6a] group-hover:text-white"
          >
            <RiMailLine className="text-xl mx-auto" />
          </a>
        </li>

        <li className=" hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#ec7c6a] p-3 block rounded-xl text-center text-[#ec7c6a] group-hover:text-white"
          >
            <RiNotification3Line className="text-xl mx-auto" />
          </a>
        </li>

        <li className=" hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#ec7c6a] p-3 block rounded-xl text-center text-[#ec7c6a] group-hover:text-white"
          >
            <RiSettings4Line className="text-xl mx-auto" />
          </a>
        </li>

      </ul>
      </div>
      <div>
      <ul className="pl-2">
    
        <li className=" hover:bg-[#262837]  p-3 rounded-tl-xl rounded-bl-xl group transition-colors">
          <a
            href="#"
            className="group-hover:bg-[#ec7c6a] p-3 block rounded-xl text-center text-[#ec7c6a] group-hover:text-white mt-auto"
          >
            <RiLogoutBoxLine className="text-xl mx-auto" />
          </a>
        </li>

      </ul>
      </div>
    </div>
  );
};
