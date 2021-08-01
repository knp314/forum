var button = document.getElementsByTagName('button')[0];

button.addEventListener('click',function(){
  var nameInput = document.getElementById('name').value;
  var messageInput = document.getElementById('message').value;

  var nameP = document.createElement('p');
  nameP.innerHTML = 'Posted By: <strong>' + nameInput + '</strong>';
  nameP.style.borderBottom = '1px solid #eee';
  nameP.style.paddingBottom = '20px';

  var messageP = document.createElement('p');
  messageP.innerHTML = messageInput;

  document.getElementsByClassName('posts')[0].append(messageP);
  document.getElementsByClassName('posts')[0].append(nameP);

  document.getElementsByClassName('form-control')[0].value = '';
  document.getElementsByClassName('form-control')[1].value = '';
});