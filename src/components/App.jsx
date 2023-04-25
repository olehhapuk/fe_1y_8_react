import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

function App() {
  return (
    <div>
      {/* <Profile username={user.name} /> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
