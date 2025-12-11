const Dropdown = ({ selectOption, changeCategory }) => {
  return (
    <div className="select">
      <select
        defaultValue="0"
        name="format"
        id="format"
        onChange={changeCategory}
      >
        <option value="0" disabled>
          Filter
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
