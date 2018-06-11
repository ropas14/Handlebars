function hbsHelpers(hbs) {
return hbs.create({
    helpers: { // This was missing
      compare: function(value) {
        
      }

    }

  });


}

module.exports = hbsHelpers;