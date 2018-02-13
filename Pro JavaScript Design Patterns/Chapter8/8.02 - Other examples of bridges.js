var Public = function() {
  var secret = 3;
  this.priviledgedGetter = function() {
    return secret;
  };
};

var o = new Public;
var data = o.priviledgedGetter();