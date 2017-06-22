window.Router = (function(){
  return {
    // allows for ignoring hashchange event callback
    silentHashChange: false,

    // set the hash from DOM data
    setHash: function(hash){
      Router.silentHashChange = true;
      location.hash = hash;
    },

    // update the DOM based on the URL hash
    updateState: function(ev){
      if (Router.silentHashChange){
        // console.log('silent hash change, do nothing');
        Router.silentHashChange = false;
      } else {
        var hash = location.hash;
        if (Router.blankHash(hash)){
          console.log('empty hash, do nothing');
        } else {
          Router.updateDOMFromHash(hash);
        }
      }
      console.log(location.hash, Switches.switchState);
    },

    // this would be extended to much more complex logic and probably
    // needs to be refactored to use different controllers depending on the hash parameter
    updateDOMFromHash: function(hash){
      var switchHash = hash.slice(1).split("=")[1];
      var switches = Switches.getSwitches();
      switches.forEach(function(s){
        // if a switches checked status does not equal the state, change it
        var switchIndex = s.dataset.switch-1;
        var switchHashState = switchHash[switchIndex] === '1' ? true : false;
        if (s.checked !== switchHashState){
          s.checked = switchHashState;
          Switches.switchState[switchIndex] = switchHashState;
        }
      });
    },

    // check if blank hash
    blankHash: function(hash){
      return (hash === '' || hash === undefined || hash === null);
    },
  };
})();
