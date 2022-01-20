const request = new XMLHttpRequest();

request.addEventListener('readystatechange', ()=> {
  //console.log(request,)

  if(request.readyState === 4 && request.status === 200){
    console.log(request.responseText);
  } else if(request.readyState === 4){
    console.log('could not ftech the data')
  }
});

request.open('GET', 'https://jsonplaceholder.tyicode.com/todoss/');
request.send();
