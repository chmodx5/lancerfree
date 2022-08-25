import React from "react";
import Card from "./Card";

const PlaceBid = () => {
  return (
    <Card>
      <h3 className="font-bold text-xl mb-3">Place a bid on this project</h3>
      <div className="grid grid-cols-2 space-x-4">
        <div>
          <label htmlFor="bidAmount">Bid Amount</label>
          <input type="number" className="form-input" name="" id="bidAmount" />
        </div>
        <div>
          <label htmlFor="bidAmount">Deleivered in ?</label>
          <input type="number" className="form-input" name="" id="bidAmount" />
        </div>
      </div>
      <p className="py-2 font-semibold">
        You will recieve kes 100 minus 10% service fee
      </p>

      <div>
        <label htmlFor="proposal"> Describe your proposal in detail</label>
        <textarea type="text" rows="6" className="form-input" name="" id="" />
      </div>
      <div className="py-5">
        <button type="submit" className="btn-primary">
          Place Bid
        </button>
      </div>
    </Card>
  );
};

export default PlaceBid;
