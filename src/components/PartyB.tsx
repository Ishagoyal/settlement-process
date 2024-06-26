import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { changePartyBTurnFlag, setResponse } from "../redux/negotiationSlice";
import { useEffect, useState } from "react";

const PartyB = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { amount, response, partyBTurn } = useSelector(
    (state: RootState) => state.negotiation
  );
  const [latestAmount, setLatestAmount] = useState<number | null>(amount);

  const handleDecision = (agreed: boolean) => {
    if (agreed) {
      dispatch(setResponse({ agreed: true, message: "Agreed" }));
      dispatch(changePartyBTurnFlag(false));
    } else {
      dispatch(setResponse({ agreed: false, message: "Disputed" }));
      dispatch(changePartyBTurnFlag(false));
    }
  };

  useEffect(() => {
    setLatestAmount(amount); // Update local state when Redux state changes
  }, [amount]);

  const isDisabled = response.agreed || response.responded || !partyBTurn; // Determine if the buttons should be disabled

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-[400px] w-[400px]">
      <div>
        <h2 className="text-xl font-bold mb-4">Party B Interface</h2>
        <div className="mb-4">
          <strong>
            Latest Amount Submitted:{" "}
            {latestAmount ? `$${latestAmount}` : "None"}
          </strong>
        </div>
      </div>
      <div className="self-stretch bg-gray-100 p-4 rounded-lg flex justify-center gap-4">
        <button
          className={`bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleDecision(false)}
          disabled={response.agreed}
        >
          Object
        </button>
        <button
          className={`bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={() => handleDecision(true)}
          disabled={response.agreed}
        >
          Agree
        </button>
      </div>
    </div>
  );
};

export default PartyB;
