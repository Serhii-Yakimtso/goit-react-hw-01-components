import './App.css';
import Profile from './components/Profile/Profile'
import Friendlist from './components/FriendList/FriendList'
import Statistics from './components/Statistics/Statistics'
import TransactionHistory from './components/TransactionHistory/TransactionHistory'

import profileUsers from './db/user.json';
import statisticsData from './db/statistical-data.json'

console.log(statisticsData)

const {name, tag, location, avatar, stats }=profileUsers


function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Profile name={name} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title='' stats={statisticsData}/>
      <Friendlist />
      <TransactionHistory/>
    </div>
  );
}

export default App;
