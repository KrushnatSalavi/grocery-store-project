import { Link } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaList, FaShoppingCart } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white fixed">
      <div className="p-6 text-2xl font-bold border-b border-gray-700">
        LaxmiMall Admin
      </div>

      <ul className="mt-6 space-y-4 px-4">
        <li>
          <Link to="/" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>

        <li>
          <Link to="/products" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
            <FaBox /> Products
          </Link>
        </li>

        <li>
          <Link to="/categories" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
            <FaList /> Categories
          </Link>
        </li>

        <li>
          <Link to="/orders" className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
            <FaShoppingCart /> Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}