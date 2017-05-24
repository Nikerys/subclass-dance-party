$(document).ready(function() {
  window.dancers = [];
  window.blinkyDancers = [];
  window.squareDancers = [];
  window.hopefulDancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     *///console.log(this)
    console.log(this);
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.blinkyDancers.push(dancer.$node);
  });

  $('.addSquareButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

     // dancerMakerFunctionName is a string which must match
     // * one of the dancer maker functions available in global scope.
     // * A new object of the given type will be created and added
     // * to the stage.
     
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var squareDancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
      
    $('body').append(squareDancer.$node);
    window.squareDancers.push(squareDancer.$node);
  });


  $('.addHopefulButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

     // dancerMakerFunctionName is a string which must match
     // * one of the dancer maker functions available in global scope.
     // * A new object of the given type will be created and added
     // * to the stage.
     
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var hopefulDancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
      
    $('body').append(hopefulDancer.$node);
    window.hopefulDancers.push(hopefulDancer.$node);

  });

  $('#linebtn').on('click', function(event) {
    console.log(window.dancers);
    BlinkyDancer.prototype.lineUp();
    SquareDancer.prototype.lineUp();
    HopefulDancer.prototype.lineUp();
  });

  $('#interactbtn').on('click', function(event) {
    // console.log(window.dancers);
    // BlinkyDancer.prototype.lineUp();
    SquareDancer.prototype.interact();
    // HopefulDancer.prototype.lineUp();
  });
});

