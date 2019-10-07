import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import { Container } from "./styles";
import AddIcon from '@material-ui/icons/Add';

const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const getSuggestionValue = (suggestion, key) => suggestion[key]

const getSuggestions = (data, key, value) => {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === "") {
    return [];
  }

  const regex = new RegExp("\\b" + escapedValue, "i");
  
  return data.filter(el => regex.test(el[key]));
}

const renderSuggestion = (suggestion, { query }, key) => {
  
  const suggestionText = suggestion[key]
  const matches = match(suggestionText, query);
  const parts = parse(suggestionText, matches);

  return (
    <span className={"suggestion-content " + suggestion.twitter}>
      <span className="name">
        {parts.map((part, index) => {
          const className = part.highlight ? "highlight" : null;
          return (
            <span className={className} key={index}>
              {part.text}
            </span>
          );
        })}
      </span>
    </span>
  );
}

const AutoComplete = ({
  data, itemKey, style, handleSelected, iconColor
}) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleOnChange = (_, { newValue }) => setValue(newValue);
  const onSuggestionsFetchRequested = ({ value }) => setSuggestions(getSuggestions(data, itemKey, value));
  const onSuggestionsClearRequested = () => setSuggestions([]);

  const inputProps = {
    placeholder: "Add new item",
    value,
    onChange: handleOnChange
  };
  
  return (
    <Container
      {...style}
      searched={value.length}
      color={iconColor}
    >
      <AddIcon className={"icon"} fontSize="medium"/>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={(_, { suggestionValue}) => {
          setValue('')
          handleSelected(suggestionValue)
        }}
        getSuggestionValue={suggestion => getSuggestionValue(suggestion, itemKey)}
        renderSuggestion={(suggestion, query) => renderSuggestion(suggestion, query, itemKey)}
        inputProps={inputProps}
      />  
    </Container>
  );
};

export default AutoComplete;
