let number=[1,2,4,5,7,10,13,24,56,39,40];
const isPrime=(n)=>{
    if(n<2) return false;
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i ===0) return false;
    }
    return true;
};

let result= number.filter(isPrime);
console.log(result);