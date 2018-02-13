addEvent(element, 'click', getBeerById);

function getBeerById(e) {
  var id = this.id;
  asyncRequest('GET', 'beer.uri?id=' + id, function(resp) {
    // Callback response.
    console.log('Requested Beer: ' + resp.responseText);
  });
}

function getBeerByid(id, callback) {
  // make request for beer by id, then return the beer data.
  asyncRequest('GET', 'beer.uri?id=' + id, function(resp) {
    callback(resp.responseText);
  });
}

addEvent(element, 'click', getBeerByIdBridge);
function getBeerByIdBridge(e) {
  getBeerById(this.id, function(beer) {
    console.log('Requested Beer: ' + beer);
  });
}