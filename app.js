const input = [2,3,-5,-2,4]
console.log(input)

const newarr = []

for(i=0 ; i<input.length ; i++){
        console.log(input[i]*input[i+1])
        newarr.push(input[i]*input[i+1])
}
newarr.sort((a,b)=>b-a)
console.log(newarr[0])
