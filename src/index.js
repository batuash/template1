import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  let user1 = {name: 'somename', email: 'a@b.c'};
  let user2 = {...obj1, name: 'someothername'};
  element.innerHTML = _.join(['Hello', user2.name], ' ');

  return element;
}
document.getElementById('root').appendChild(component());
