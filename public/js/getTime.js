function fetch(type, url) {
  // 
  // 
  // https://gomakethings.com/why-i-still-use-xhr-instead-of-the-fetch-api/
  // 
  // 
  return new Promise((resolve, reject) => {
    // Set up our HTTP request
    var xhr = new XMLHttpRequest();

    // Setup our listener to process compeleted requests
    xhr.onreadystatechange = function () {

      // Only run if the request is complete
      if (xhr.readyState !== 4) return;

      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
        // What do when the request is successful
        console.log('success', JSON.parse(xhr.responseText));
        resolve(JSON.parse(xhr.responseText));
      } else {
        // What to do when the request has failed
        console.error('error', xhr);
        reject(xhr);
      }
    };

    // Create and send a GET request
    // The first argument is the post type (GET, POST, PUT, DELETE, etc.)
    // The second argument is the endpoint URL
    //
    //xhr.open('GET', 'https://jsonplaceholder.typicode.com/postses');
    //
    xhr.open(type, url);
    xhr.send();
  });
}

async function getTime() {
  console.log('getTime()');
  let clientTime = new Date();
  
  let serverTime = await fetch('GET', '/api/time');


  let clientOutlet = document.getElementById('client-time');
  let serverOutlet = document.getElementById('server-time');

  clientOutlet.innerText = `Time from Client: ${clientTime.toISOString()}`;
  serverOutlet.innerText = `Time from Server: ${serverTime.timeString}`;

  let requestOutlet = document.getElementById('request-time');
  requestOutlet.innerText = `Request Took: ${new Date() - clientTime}ms`;
}

