import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  changePartyBTurnFlag,
  resetRespondedFlag,
  submitAmount,
} from "../redux/negotiationSlice";
import { useState } from "react";

const PartyA = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { response, amount } = useSelector(
    (state: RootState) => state.negotiation
  );
  const [inputAmount, setInputAmount] = useState<number | null>(0);
  const lastAmount = amount;

  const handleSubmit = () => {
    if (response.responded) {
      alert(
        "Party B has responded. Please check the response before submitting a new amount."
      );
      return; // Prevent submission if Party B has responded
    }
    dispatch(submitAmount(inputAmount));
    dispatch(changePartyBTurnFlag(true));
  };

  const handleChange = (newAmount: number | null) => {
    if (response.responded) {
      alert(
        "Party B has responded. Please check the response before submitting a new amount."
      );
      return; // Prevent submission if Party B has responded
    }
    setInputAmount(newAmount);
  };

  const handleAcknowledge = () => {
    dispatch(resetRespondedFlag()); // Allow Party A to acknowledge and reset the responded flag
  };

  const isDisabled = response.agreed; // Determine if the input and button should be disabled

  return (
    <div
      className={`p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-[400px] w-[400px] ${
        response.agreed ? "" : "justify-between"
      }`}
    >
      <h2 className="text-xl font-bold mb-4">Party A Interface</h2>
      {response.agreed ? (
        <div className="bg-green-100 p-4 rounded-lg shadow-lg max-w-md mx-auto my-8">
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21c1.372 0 2.667-.987 3.688-2.607a7.953 7.953 0 00-1.000-6.000C13.987 10.987 14.999 9 16.371 9c1.373 0 2.666.987 3.688 2.606z"
              />
            </svg>
            <h2 className="text-xl font-bold text-green-700">
              Settlement Done!
            </h2>
          </div>
          <p className="mt-2 text-green-600">
            The settlement has been done for ${lastAmount}.
          </p>
        </div>
      ) : (
        <>
          <div>
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
                value={response.responded ? amount ?? "" : inputAmount ?? ""}
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
            {response.message && response.responded
              ? `${response.message} for the amount ${lastAmount}`
              : "Pending..."}
          </div>
        </>
      )}
    </div>
  );
};

export default PartyA;
