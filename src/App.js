import { useState } from "react";
import "./styles.css";

const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "David" },
  { id: 4, name: "Emily" },
  { id: 5, name: "Michael" },
];

export default function App() {
  const [peoples, setPeople] = useState([]);
  const [searchId, setSearchId] = useState("");

  function search(e) {
    e.preventDefault();
    const filtered = data.filter((d) => d.id === Number(searchId));
    setPeople(filtered);
  }

  return (
    <div className="app-container">
      <form className="search-form" onSubmit={search}>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className="search-input"
          placeholder="Enter ID"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <div className="search-results">
        <ul className="data-list">
          {data.map((people) => (
            <li key={people.id} className="data-item">
              {people.id}: {people.name}
            </li>
          ))}
        </ul>
        <ol className="result-list">
          <p>Search result:</p>
          {peoples.map((people) => (
            <li key={people.id} className="result-item">
              {people.id} :: {people.name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
