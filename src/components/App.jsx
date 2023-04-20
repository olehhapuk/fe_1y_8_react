import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

function App() {
  return (
    <div>
      <FriendList friends={friends} />
      {/* <Profile username={user.name} /> */}
    </div>
  );
}

export default App;
