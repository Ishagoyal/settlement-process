import { useState } from "react";

const PartyA = () => {
  const [amount, setAmount] = useState(0);
  const [response, setResponse] = useState("");

  const handleSubmit = () => {
    // Simulate submitting the amount to Party B
    console.log(`Submitting ${amount} to Party B`);
    // Here you would also update the UI based on Party B's response
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Party A Interface</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border border-gray-300 px-2 py-1 mt-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 ml-2"
      >
        Submit Amount
      </button>
      <div className="mt-4">
        <strong>Party B Response:</strong> {response}
      </div>
    </div>
  );
};

export default PartyA;
