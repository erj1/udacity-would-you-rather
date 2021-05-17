import React from "react";

const OptionResult = (props) => {

  const { percentage, text } = props;

  return (
    <div className="block has-text-centered is-uppercase">
      <p className="is-size-1 has-text-weight-bold">{ percentage }%</p>
      <p className="is-size-4 has-text-weight-light">of responders answered</p>
      <p className="is-size-2">{ text }</p>
    </div>
  );
}

export default OptionResult;
