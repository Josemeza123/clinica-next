'use client'

function Buttons({productid}) {
  return (
    <div className="flex gap-x-2 justify-end mt-4">
      <button className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded" onClick={()=>{
        
      }}>
        Delete
      </button>
      <button className="text-white bg-gray-500 hover:bg-gray-700 py-2 px-3 rounded">
        Editar
      </button>
    </div>
  );
}

export default Buttons;
