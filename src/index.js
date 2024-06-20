

let a = 10;

const oddNums = (n, arr=[]) =>{
    for (let i = 0; i <= n; i++){
        if(i % 2 == 1){
            arr.push(i)
        }
    }
}

