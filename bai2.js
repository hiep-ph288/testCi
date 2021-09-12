const INPUT =[60, 40, 55, 75, 64]

const newarr = []

for(i=0;i<INPUT.length;i++){
     console.log(INPUT[i+i])
     if(INPUT[i+i]){
     newarr.push(INPUT[i+i])
     }
}


let cannang = 0
for(j=0;j<newarr.length;j++){
   cannang+=newarr[j]
}
console.log(cannang)


let tongcan = 0
for(f=0;f<INPUT.length;f++){
    tongcan +=INPUT[f]
}

let socandoi2 = tongcan -cannang
console.log(socandoi2)