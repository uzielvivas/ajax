const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=> {
  //console.log(request,)
  if(request.readyState === 4){
    console.log(request.responseText);
  }
});

request.open('GET', 'https://jsonplaceholder.tyicode.com/todos/');
request.send();
