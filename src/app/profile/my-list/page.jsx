import Rating from "@mui/material/Rating";

export default function MyListPage() {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">
        My List
      </h2>

      <div className="flex gap-4 border-b py-4">
        <img src="/product.png" className="w-16" />
        <div className="flex-1">
          <p className="font-semibold">
            Fortune Sunlite Refined Oil
          </p>
          <Rating value={5} readOnly size="small" />
          <p className="text-red-600 font-semibold">$25.99</p>
        </div>
        <button className="text-gray-400">✕</button>
      </div>
    </div>
  );
}
