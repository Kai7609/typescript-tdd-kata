export default function fizzBuzz (n : number) : string[] {
    let result : string[] = [];
    let three : boolean = false;
    let five : boolean = false;

    for(let i = 1; i < n + 1; i++){
        three = i % 3 == 0;
        five = i % 5 == 0;

        if(three && !five){
            result.push("Fizz");
        }
        else if(!three && five){
            result.push("Buzz");
        }
        else if(three && five){
            result.push("FizzBuzz");
        }
        else{
            result.push(i.toString());
        }
        three = false;
        five = false;
    }
    return result;
};