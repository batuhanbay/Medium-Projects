import React from "react";

const MyBestFriends = ({ myBestFriendList, setMyBestFriendList, ...props }) => {
  const [newBestFriend, setNewBestFriend] = React.useState("");

  const handeleAddMyBestFriend = () => {
    if(newBestFriend !== ""){
      const newBestFriendList = [...myBestFriendList];
      newBestFriendList.push(newBestFriend);
      setMyBestFriendList(newBestFriendList);
      setNewBestFriend("");
    }
  };

  const handleNewBestFriend = (e) => {
    setNewBestFriend(e.target.value);
  }
  console.log("MyBestFriend component is rendering.");
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: 20, paddingTop:5, backgroundColor:"#0ED2F7" }}>
      <h2>My Best Friends</h2>
      <input  type="text" value={newBestFriend} onChange={(e) => handleNewBestFriend(e)}/>
      <button style={{marginTop:5}} onClick={handeleAddMyBestFriend}>Add new best friend</button>
      {myBestFriendList.map((myBestFriend, index) => {
        return <p key={index}>{myBestFriend}</p>;
      })}
    </div>
  );
};

export default React.memo(MyBestFriends);
