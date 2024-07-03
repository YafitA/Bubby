// src/ItemPage.js
import { Link } from 'react-router-dom';

function ItemPage() {
  return (
    <div>
      <h1>Item Detail Page</h1>
      <p>Details about the item...</p>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}

export default ItemPage;
