/* 1.  Write a JavaScript function to get an array and to read the first element of an array.
 Check whether it is prime or not. */ 

 

 function primeNumber(b)
 {
    console.log(b[0]);
    let n=b[0];
    if(n%2!=0 && n!=1)
    {
        return true;
    }
    else if(n==2)
    {
        return true;
    }
    else
    {

        return false;
    }
 }
 let a=[7,44,3];
 var c=primeNumber(a);

 if (c==true){
    console.log("it is a prime number");
 }
 else{
    console.log("it is not a prime number");
 }

 console.log("\n");
 /* ---------------- End 1 ---------------*/


/* 2.  Write a JavaScript program to find the most frequent item of an array */


let ar=['Potato','Onion','Tomato','Potato'];
let l=ar.length;
let inc =0;
let store=0;
let item;
for(let t=0;t<l;t++){
    for(let s=t+1;s<l;s++){
        if(ar[t]==ar[s]){
            inc++;
            if(store<inc)
            {
                store=inc;
                item=ar[t];
            }
            inc=0;
        }
    }
}
console.log(item);
console.log("\n");

/*-----------------------End 2--------------------------*/


/* 3.  Write a JavaScript for loop that will iterate from 0 to 15. For each iteration,
 check if the current number is odd or even, and display the message to the screen as odd or even.*/


for (var i=0;i<=15;i++)
{
    if(i%2==0)
    {
        console.log(i+" is even");
    }
    else
    {
        console.log(i+" is odd");
    }

}
console.log("\n");
/*------------------------ End 3-----------------------*/


/* 4.  Write a JavaScript program to find the sum of squares of the elements of an array.*/

var ay=[2,4,5,15];
var ln=ay.length;
var s;
var t=0;
for(var i=0;i<ln;i++){
    s=ay[i]*ay[i];
    console.log(s);
    t+=s;
}
console.log("sum of squares of the elements of an array : "+t);


/*------------------------ End 4-----------------------*/