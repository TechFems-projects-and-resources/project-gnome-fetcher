export const Filter = ({ onFilter, onSearch }) => {
  return (
    <div class="filter">
      <input type="text" onKeyDown={(event) => onSearch(event.target.value)} />
      <select onChange={(event) => onFilter(event.target.value)}>
        <option>Sin filtrado</option>
        <option value={30}> Filter first 30</option>
        <option value={100}> Filter first 100</option>
        <option value={500}> Filter first 500</option>
        <option value={1000}> Filter first 1000</option>
      </select>
    </div>
  );
};
