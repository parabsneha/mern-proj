var axios = require('axios');
var data = JSON.stringify({
  "task": "sports",
  "description": "playing football",
  "status": "completed",
  "dueDate": "22-08-22"
});

var config = {
  method: 'get',
  url: 'http://35.89.12.159:3000/',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
