self.addEventListener('message', function(e) {
  self.postMessage({
    code: e.data,
    result: JSON.stringify(eval(e.data))
  });
});

function help() {
  var result = 'You can use these different fonctions : \n';
  result += 'age()\n';
  result += 'location()\n';

  return result;
}

function age() {
  var diff =  new Date() - new Date(1992, 3, 9);
  diff = diff / (1000 * 60 * 60 * 24 * 31 * 12); // number of milliseconds in a year

  return 'I am ' + Math.round(diff) + ' years old';
}

function location() {
  return 'I am living in London, UK';
}