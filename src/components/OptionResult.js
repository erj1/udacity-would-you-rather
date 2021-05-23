import React from "react";
import clsx from "clsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const OptionResult = (props) => {
  const { percentage, isSelected, text, votes } = props;
  const styles = clsx(
    "block has-text-centered is-uppercase is-relative",
    isSelected && "has-background-primary-light has-text-primary-dark"
  )

  return (
    <div className={styles}>
      {isSelected && (
        <span className="tag is-primary is-medium" style={{
          position: "absolute",
          top: 0,
          left: 0
        }}>
          <span className="icon is-medium mr-1">
            <FontAwesomeIcon icon={faCheck} />
          </span>
          Your Selection
        </span>

      )}
      <p><small className="is-size-6">({ votes } votes)</small></p>
      <p className="is-size-1 has-text-weight-bold">{ percentage }% </p>
      <p className="is-size-4 has-text-weight-light">of responders answered</p>
      <p className="is-size-2">{ text }</p>
    </div>
  );
}

export default OptionResult;
