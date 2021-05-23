import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const OptionQuestion = (props) => {
  const {
    isSelected,
    optionText,
    handleSelect,
  } = props;

  const styles = clsx(
    'button', 'is-large', 'is-fullwidth', 'is-uppercase py-6',
    isSelected && ['is-active', 'is-primary', 'is-light']
  )

  return (
    <div className="block">
      <button
        className={ styles }
        onClick={ () => handleSelect() }
      >
        {isSelected && (
          <span className="icon is-medium">
              <FontAwesomeIcon icon={faCheck} />
            </span>
        )}
        <span>{ optionText }</span>
      </button>
    </div>
  );
}

export default OptionQuestion;
