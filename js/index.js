console.log("I'm ready!"); 

 // Iteration 1: Names and Input
 const hacker1 = 'abhajkhan';
 console.log('The driver\'s name is '+hacker1);
 const hacker2 = 'webdevopen';
 console.log("The navigator's name is "+hacker2);
//
// Iteration 2: Conditionals
const driverLength = hacker1.length;
const navigatorLength = hacker2.length;
if (driverLength > navigatorLength)
    console.log(`The driver has the longest name, it has ${driverLength} characters.`);
else if (navigatorLength > driverLength)
    console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
else {
    console.log(`Wpw, you both have equally long names, ${driverLength} characters.`);
}

// Iteration 3: Loops
const uCaseDriver = hacker1.toUpperCase();
let res = "";
for(let i=0; i < uCaseDriver.length; i++){
    res += uCaseDriver[i]+" ";
}
console.log(res.trim());

let res2 = "";
for (let j = navigatorLength-1; j >= 0; j--){
    res2 += hacker2[j];
}
console.log(res2);

// Lexicographic order
if ( hacker1 > hacker2)
    console.log('The driver\'s name goes first');
else if ( hacker2 > hacker1)
    console.log("Yo, the navigator goes first definitely.");
else {
    console.log("What?! You both have the same name?")
}

//Bonus Task 1

const aString = "Phasellus mattis pretium efficitur. Nam eget viverra orci, non auctor libero. Donec finibus velit non nulla imperdiet tristique. Fusce fringilla dignissim leo, nec egestas enim. Mauris mauris nunc, molestie ac porttitor in, tristique vel est. Mauris et nibh egestas, tempor ante nec, suscipit lacus. Nam sed cursus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis turpis ipsum, sagittis nec ligula quis, venenatis dictum mi. Cras imperdiet lobortis nunc. Nunc arcu turpis, congue eu lacinia sit amet, accumsan vitae ante. \nSed ac quam tempus, volutpat massa a, scelerisque ipsum. Vivamus et arcu dapibus, ultricies neque sed, hendrerit lorem. Quisque fermentum ex magna, non maximus quam pulvinar eu. Mauris tempus metus vel diam lobortis malesuada. Integer ac libero vel sapien facilisis ultrices. Mauris auctor gravida viverra. Morbi non convallis ex. Integer auctor vel metus ac tincidunt. In ullamcorper mi sit amet erat aliquam, vel feugiat sem pretium. Praesent interdum, mi a tincidunt porta, turpis risus pellentesque enim, at interdum augue ex vel velit. Morbi et velit ex. Donec efficitur blandit aliquet. Aliquam vitae enim scelerisque massa dapibus ullamcorper. Nullam non diam quis quam dapibus varius id sed nibh. Interdum et malesuada fames ac ante ipsum primis in faucibus. \nSed sit amet metus placerat, porta dui ac, imperdiet velit. Proin vestibulum eros sed elit venenatis, eget dictum arcu ornare. Sed feugiat mauris eu tellus varius sodales. Vestibulum porta erat elit, nec pretium libero ultricies sed. Nulla risus nisi, vehicula et pulvinar eu, hendrerit eu tellus. Nullam at metus in orci imperdiet tincidunt non sit amet dolor. Nam nisl ex, pharetra sit amet condimentum in, consequat pretium felis. Vestibulum non ligula lorem. Ut blandit id nunc vitae pulvinar. Morbi ullamcorper arcu at sapien maximus sagittis. Vivamus consequat consequat bibendum. Ut nisi augue, faucibus eu eros vitae, porta lobortis ipsum. Donec dictum dictum nulla vitae feugiat. Morbi cursus finibus dui quis sollicitudin. Nunc ut justo at elit congue varius ac eu nisi."
const words = aString.split(" ");
console.log(`There is ${words.length} no.of words in the paragraph`);

let ind = 0;
let count = 0;
while (ind != -1){
    ind = aString.indexOf("et",ind);
    if (ind !==  -1){
        count += 1;
        ind += 2;
    }
}
console.log(`Number of times 'et' appears= ${count}`);

//Bonus Task 2

let phraseToCheck = "malayalam";
let f = 1;
const len = phraseToCheck.length;
console.log(`String = ${phraseToCheck}`);
for (let i=0; i<=len/2; i++){
    if (phraseToCheck[i]!==phraseToCheck[len-1-i]){
        console.log("The string is not palindrome");
        f = 0;
        break;
    }
}
if (f == 1)
    console.log("The string is palindrome.");