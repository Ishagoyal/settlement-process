import { useState } from "react";

const PartyA = () => {
  const [amount, setAmount] = useState(0);
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    console.log(`Submitting ${amount} to Party B`);
    // Simulate receiving a response from Party B
    setTimeout(() => {
      setResponse("Disputed");
    }, 1000);
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-[400px] w-[400px]">
      <div>
        <h2 className="text-xl font-bold mb-4">Party A Interface</h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-2"
        >
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Settlement Amount
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button
            onClick={handleSubmit}
            className="self-stretch bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4"
          >
            Submit Amount
          </button>
        </form>
      </div>
      <div className="mt-4 self-stretch bg-gray-100 p-4 rounded-lg">
        <strong>Party B Response:</strong> {response ? response : "Pending..."}
      </div>
    </div>
  );
};

export default PartyA;
