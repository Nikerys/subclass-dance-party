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


  //this.$node.css({color: 'blue'});
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
  //this.$node.toggle();
};

SquareDancer.prototype.lineUp = function() {
  //console.log(window.dancers.length);  
  for (var i = 0; i < window.squareDancers.length; i++) {
    var x = i * 160 + 100;
    x = x.toString();
    x = x + 'px';
    window.squareDancers[i].animate({
      'position': 'absolute',
      'width': '340px',
      'height': '340px',
      'border-radius': '10px',
      'left': x,
      'top': '550px'
    }, 1000);
  }
};

SquareDancer.prototype.interact = function() {
  if ((window.squareDancers.length / 2) % 1 !== 0) {
    window.squareDancers[(Math.floor(window.squareDancers.length / 2))].animate({
      'position': 'absolute',
      'width': '340px',
      'height': '340px',
      'border-radius': '10px',
      'left': '540px',
      'top': '960px'
    }, 1000);
  }

  for (var i = 0; i < (Math.floor(window.squareDancers.length / 2)); i++) {
    console.log(i);
    var x = i * 160;
    x = x.toString();
    x = x + 'px';
    window.squareDancers[i].animate({
      'position': 'absolute',
      'width': '340px',
      'height': '340px',
      'border-radius': '10px',
      'left': x,
      'top': x
    }, 1000);
  }

  for (var j = (Math.ceil(window.squareDancers.length / 2)); j < window.squareDancers.length; j++) {
    console.log(j);
    var y = j * 160;
    y = y.toString();
    y = y + 'px';
    window.squareDancers[j].animate({
      'position': 'absolute',
      'width': '340px',
      'height': '340px',
      'border-radius': '10px',
      'left': y,
      'top': y
    }, 1000);
  }
  

};





















