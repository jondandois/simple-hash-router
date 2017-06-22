// listen on switches
var switches = document.querySelectorAll('input');
switches.forEach(function(s){
  s.addEventListener('change', Switches.logSwitchState);
});
