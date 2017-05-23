var SquareDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // $('#square').slideUp();
  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = timeBetweenSteps;
  //var blinkyDancer = Dancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //console.log(this);
  //this.oldStep = Dancer.prototype.step;

  // this.$node.css({backgroundColor: 'blue'});
  //$('span.dancer').css({color: 'blue'});
  
  //$('span.dancer').append('<img src="http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/order_presidents_game/img/obama.png');

 // this.$node.append('<img src="http://time-static-shared.s3-website-us-east-1.amazonaws.com/interactives/order_presidents_game/img/obama.png');
 // this.$node.css({backgroundColor: 'blue'});


  this.$node.css({color: 'blue'});
};

SquareDancer.prototype = Object.create(Dancer.prototype);
SquareDancer.prototype.constructor = SquareDancer;
SquareDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //console.log(Dancer.prototype.step.call(this));
  Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

SquareDancer.prototype.lineUp = function() {
  console.log(window.dancers.length);  
  for (var i = 0; i < window.dancers.length; i++) {
    var x = i * 160;
    x = x.toString();
    x = x + 'px';
    window.dancers[i].css({
      'position': 'absolute',
      'width': '170px',
      'height': '170px',
      'border-radius': '10px',
      'left': x,
      'top': '100px'
    });
  }

};
