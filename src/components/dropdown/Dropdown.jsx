const Dropdown = ({ selectOption, changeCategory,dropdownName="Filter" }) => {
  return (
    <div className="select">
      <select
        defaultValue="0"
        name="format"
        id="format"
        onChange={changeCategory}
      >
        <option value="0" disabled>
          {dropdownName.charAt(0).toUpperCase() + dropdownName.slice(1)}
        </option>
        {selectOption.map((item, index) => (
          <option key={index} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
