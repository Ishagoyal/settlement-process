import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { resetRespondedFlag, submitAmount } from "../redux/negotiationSlice";
import { useState } from "react";

const PartyA = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { response } = useSelector((state: RootState) => state.negotiation);
  const [inputAmount, setInputAmount] = useState<number | null>(0);

  const handleSubmit = () => {
    if (response.responded) {
      alert(
        "Party B has responded. Please check the response before submitting a new amount."
      );
      return; // Prevent submission if Party B has responded
    }
    dispatch(submitAmount(inputAmount));
  };

  const handleChange = (newAmount: number | null) => {
    setInputAmount(newAmount);
  };

  const handleAcknowledge = () => {
    dispatch(resetRespondedFlag()); // Allow Party A to acknowledge and reset the responded flag
  };

  const isDisabled = response.agreed; // Determine if the input and button should be disabled

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
            disabled={response.agreed}
            value={inputAmount ?? ""}
            onChange={(e) => handleChange(Number(e.target.value))}
            className={`border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          <button
            onClick={() => handleSubmit()}
            disabled={response.agreed}
            className={`self-stretch bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4 ${
              isDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Submit Amount
          </button>
          {response.responded && (
            <button
              onClick={handleAcknowledge}
              className="bg-green-500 text-white font-semibold py-2 px-4 rounded mt-4"
            >
              Acknowledge Response
            </button>
          )}
        </form>
      </div>
      <div className="mt-4 self-stretch bg-gray-100 p-4 rounded-lg">
        <strong>Party B Response:</strong>{" "}
        {response.message ? response.message : "Pending..."}
      </div>
    </div>
  );
};

export default PartyA;
