import React, { useState } from 'react'
import CustomeSelect from '../components/CustomeSelect';
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  
  const groupedOptions = [
    {
      label: 'Fruits',
      options: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' }
      ]
    },
    {
      label: 'Vegetables',
      options: [
        { value: 'carrot', label: 'Carrot' },
        { value: 'broccoli', label: 'Broccoli' }
      ]
    }
  ];
const Home = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (selected) => {
      setSelectedOption(selected);
    };
  
    const handleMenuOpen = () => {
      console.log('Menu opened');
    };
  
    const handleSearch = (inputValue) => {
      console.log('Searching:', inputValue);
    };
  
  return (
    <div className='kzui-container'>
      <h1 className='kzui-Heading'>Custom Select Component</h1>
      <div className='kzui-selectContainer'>

      <CustomeSelect
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={options}
        value={selectedOption}
        placeholder="Select an option..."
        isGrouped={false}
        isMulti={false}
        onChangeHandler={handleChange}
        onMenuOpen={handleMenuOpen}
        onSearchHandler={handleSearch}
       
      />
      <CustomeSelect
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        options={groupedOptions}
        value={selectedOption}
        placeholder="Select a grouped option..."
        isGrouped={true}
        isMulti={true}
        onChangeHandler={handleChange}
        onMenuOpen={handleMenuOpen}
        onSearchHandler={handleSearch}
         
      />
      </div>
    </div>
  )
}

export default Home
