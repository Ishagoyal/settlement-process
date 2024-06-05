const PartyB = () => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-[400px] w-[400px]">
      <div>
        <h2 className="text-xl font-bold mb-4">Party B Interface</h2>
        <div className="mb-4">
          <strong>Latest Amount Submitted:</strong> $0
        </div>
      </div>
      <div className="self-stretch bg-gray-100 p-4 rounded-lg flex justify-center gap-4">
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
          Object
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Agree
        </button>
      </div>
    </div>
  );
};

export default PartyB;
