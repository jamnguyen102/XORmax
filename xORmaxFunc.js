// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var result = maxXOR(1,3,3);
console.log(" result = " + result);


function maxXOR( lo,  hi,  k){
    var max = 0;
    
    for (b = hi, a= lo; b > 0; --b){
        for ( a = lo; a < b; ++a){
            if ( (a^b) >= max && max <= k)
                max = a^b;
        }
    }
    
    return max;
}
