import { useRouter } from 'next/router';

export default function AddressSelector() {
  const router = useRouter();

  return (
    <div className="p-4 space-y-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <div 
        className="w-full max-w-md bg-gray-50 p-4 rounded-xl shadow-md cursor-pointer"
        onClick={() => router.push('/select-address')}
      >
        <p className="text-gray-500 text-sm">Shipping Address</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Select Address</p>
          <span className="text-gray-400">&gt;</span>
        </div>
      </div>

      <div className="w-full max-w-md bg-gray-50 p-4 rounded-xl shadow-md">
        <p className="text-gray-500 text-sm">Pickup date</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">25-02-2025</p>
          <span className="text-gray-400">&gt;</span>
        </div>
      </div>

      <div className="w-full max-w-md bg-gray-50 p-4 rounded-xl shadow-md">
        <p className="text-gray-500 text-sm">Payment Method</p>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Pay on delivery</p>
          <span className="text-gray-400">&gt;</span>
        </div>
      </div>
    </div>
  );
}
