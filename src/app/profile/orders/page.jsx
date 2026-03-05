export default function OrdersPage() {
  return (
    <div className="bg-white border rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">
        My Orders
      </h2>

      <div className="border rounded-lg p-4 mb-4">
        <p className="font-semibold">Order #12345</p>
        <p className="text-sm text-gray-500">
          Delivered on Feb 5, 2026
        </p>
        <p className="text-green-600 font-semibold">
          Total: $99
        </p>
      </div>
    </div>
  );
}
