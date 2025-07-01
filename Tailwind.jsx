import './Taiwind.css'

function Tailwind(){
return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button className="px-4 py-2 rounded-full border bg-black text-white">All</button>
        <button className="px-4 py-2 rounded-full border bg-white text-black">Category</button>
        <button className="px-4 py-2 rounded-full border bg-white text-black">Collection</button>
        <button className="px-4 py-2 rounded-full border bg-white text-black">Price</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <div className="bg-white rounded-xl shadow-md p-4 text-center hover:bg-blue-600">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7KLxMn1lFrtdCJcGatlIj10QfNaQW5pGmOQ&s" className="rounded-lg mb-4 w-200 h-100" />
          <h2 className="font-bold text-lg">Sun-Glass</h2>
          <p className="text-sm text-gray-500 mb-1">Current Bid</p>
          <p className="font-semibold mb-4">Ξ 1.75</p>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">PLACE BID</button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 text-center hover:bg-blue-600">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmDvxFCnK0PAJ6o7x1iikQYljwNLhhZAMxlQ&s" className="rounded-lg mb-4 w-200 h-100" />
          <h2 className="font-bold text-lg">Nuévey</h2>
          <p className="text-sm text-gray-500 mb-1">Current Bid</p>
          <p className="font-semibold mb-4">Ξ 1.25</p>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">PLACE BID</button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 text-center hover:bg-blue-600">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwMdFiHEts0tM1u4iRDlvk0q3iQ9AvUwmriw&s" className="rounded-lg mb-4w-200 h-100" />
          <h2 className="font-bold text-lg">Sun-Glass</h2>
          <p className="text-sm text-gray-500 mb-1">Current Bid</p>
          <p className="font-semibold mb-4">Ξ 1.75</p>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">PLACE BID</button>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 text-center hover:bg-blue-600">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbbuu1YgyUOuaXYYImqR3G9rnf8_sRxfmKpg&s" className="rounded-lg mb-4 w-200 h-100" />
          <h2 className="font-bold text-lg">Sun-Glass</h2>
          <p className="text-sm text-gray-500 mb-1">Current Bid</p>
          <p className="font-semibold mb-4">Ξ 1.75</p>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm">PLACE BID</button>
        </div>

      </div>
    </div>
  );
}
export default Tailwind
