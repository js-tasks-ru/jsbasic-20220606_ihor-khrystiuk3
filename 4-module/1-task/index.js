function makeFriendsList(friends) {
  let list = document.createElement('ul');
  for (let friend of friends) {
    let item = document.createElement('li');
    let text = document.createTextNode(`${friend.firstName} ${friend.lastName}`);
    item.appendChild(text);
    list.appendChild(item);
  }
  return list;
}
