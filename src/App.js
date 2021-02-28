import './App.css';
import Profile from './components/Profile/Profile'
import Friendlist from './components/FriendList/FriendList'
import Statistics from './components/Statistics/Statistics'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

import profileUsers from './db/user.json';
import statisticsData from './db/statistical-data.json'
import frindListData from './db/friends.json'

// console.log(frindListData)

const {name, tag, location, avatar, stats }=profileUsers

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title='Upload stats' stats={statisticsData}/>
      <Friendlist friends={frindListData}/>
      <TransactionHistory/>
    </div>
  );
}

export default App;
