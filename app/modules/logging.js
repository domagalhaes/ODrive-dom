module.exports = {
  debug: function() {console.debug.apply(console, arguments);
  },
  verbose: function() {console.info.apply(console, arguments);
  },
  log: function() {console.log.apply(console, arguments);},
  error: function() {console.error.apply(console, arguments);}
};
