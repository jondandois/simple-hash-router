window.Switches = (function(){
  return {
    switchState: [false, false, false],
    getSwitches: function(){
      return document.querySelectorAll('input.switch');
    },

    logSwitchState: function(){
      Switches.switchState[this.dataset.switch - 1] = this.checked;
      Switches.switchStateToHash(Switches.switchState);
    },

    switchStateToHash(state){
      var hash = "switches=";
      state.map( function(s){
        hash += (s ? 1 : 0);
      });
      Router.setHash(hash);
    },
  };
})();

