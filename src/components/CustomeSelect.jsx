import React from "react";
import Select from "react-select";
const CustomeSelect = ({
  isClearable = false,
  isSearchable = false,
  isDisabled = false,
  options = [],
  value = null,
  placeholder = "Select...",
  isGrouped = false,
  isMulti = false,
  onChangeHandler,
  onMenuOpen,
  onSearchHandler,
}) => {
  const customStyles = {
    singleValue: (provided) => ({
      ...provided,

      padding: "5px",
      backgroundColor: "white",
    }),
    multiValue: (provided) => ({
      ...provided,
      padding: "5px",
      backgroundColor: "white",
      border: "1px solid #ddd",
      marginRight: "10px",
    }),
  };
  // Handling grouped options
  const processedOptions = isGrouped
    ? options.reduce((acc, group) => {
        acc.push({
          label: group.label,
          options: group.options,
        });
        return acc;
      }, [])
    : options;

  return (
    <div  >
      <Select
        styles={customStyles}
        isClearable={isClearable}
        isSearchable={isSearchable}
        isDisabled={isDisabled}
        options={processedOptions}
        value={value}
        placeholder={placeholder}
        isMulti={isMulti}
        onChange={onChangeHandler}
        onMenuOpen={onMenuOpen}
        onInputChange={onSearchHandler}
        className="kzui-selectInput"
      />
    </div>
  );
};

export default CustomeSelect;
