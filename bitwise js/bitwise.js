var facebook = 1; //0001 
var twitter = 2;  //0010
var github = 4;   //0100


var myNetworks = facebook | twitter | github;
// 0001 | 0010 | 0100 => 0111

console.log(myNetworks); // 7

console.log(myNetworks & facebook); // 1

myNetworks = ~facebook; //-2

console.log(myNetworks); //-2

// twitter | github - OR
console.log('OR: '+ (twitter | github)); // 6

// twitter & github - AND
console.log('AND: '+(twitter & github)); // 0

// twitter ^ github - XOR 
console.log('XOR: '+(twitter ^ github)); //6  

// ~github - NOT 
console.log('NOT: '+ ~github);  //-5

// twitter>> github - RIGHT SHIFT 
console.log('RS: '+(twitter >> github));  //0

// twitter << github - LEFT SHIFT 
console.log('LS: '+(twitter << github));  //32

 


