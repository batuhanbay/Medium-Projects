import React from "react";
import MyBestFriends from "./components/MyBestFriends";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = React.useState(0);
  const [myBestFriendList, setMyBestFriendList] = React.useState(["Gökhan", "Orhan", "İsmail"]);
  return (
    <>
      <MyBestFriends myBestFriendList={myBestFriendList} setMyBestFriendList={setMyBestFriendList}/>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;
