import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

const OptionQuestion = (props) => {
  const {
    isSelected,
    optionText,
    handleSelect,
  } = props;

  const classNames = ['button', 'is-large', 'is-fullwidth', 'is-uppercase py-6']
  const selectedClassNames = ['is-active', 'is-primary', 'is-light']

  return (
    <div className="block">
      <button
        className={(isSelected ? classNames.concat(selectedClassNames) : classNames).join(' ')}
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
