import React from "react";

export const PriceInput = props => (
  <div className="form-group">
    <div className="input-group" style={{width: 125}} >
      <div className="input-group-prepend">
        <span className="input-group-text">$</span>
      </div>
      <input className="form-control" {...props} />
    </div>
  </div>
);
