var Monster = function() {};

Monster.prototype.Growl = function(grr) {   
    console.log('Grr!!!');
    return this.Grr() +' '+ grr;
};

Monster.prototype.Grr = function() {
    console.log('Grr call');
    return "Grr!";
};

