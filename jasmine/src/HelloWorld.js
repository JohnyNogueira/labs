var Monster = function() {};

Monster.prototype.Growl = function(grr) {   
    console.log('Grr!!!');
    return this.Grr() +' '+ grr;
};

Monster.prototype.Grr = function() {
    console.log('Grr call');
    return "Grr!";
};


function sum(x, y){
    return x + y;
}


var myArray = [
        { text : 'foo' },
        { text : 'bar' },
        { text : 'baz' }
];

 
 