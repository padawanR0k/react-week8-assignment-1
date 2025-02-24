import { Link } from 'react-router-dom';

import List from './components/List';

export default function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <List>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/xxx">멸망의 길</Link></li>
      </List>
    </div>
  );
}
