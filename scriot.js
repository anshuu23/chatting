const ws = new WebSocket('wss://anshu-joshi.onrender.com');

function namesend(){
  let usernamee=document.querySelector('#name');
   username=usernamee.value;
  console.log(username)
  const userdivv=document.querySelector('.takingusername');
  userdivv.style.display="none"
}


// const Data = require('./index.js');
ws.addEventListener('message', function (event) {

  const messageDiv = document.querySelector('.output');
    messageDiv.innerHTML += ':'+ event.data+'<br>'
    messageDiv.scrollTop = messageDiv.scrollHeight;
});
function buttonclicked(){
  
    let message=document.querySelector('#msg');
    let realmessage=message.value.toString();
    ws.send(username+':'+realmessage)
    // ws.send(realmessage);
    
   }
