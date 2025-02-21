let marks=[30,46,78,95,51,75]

let count=0

for(i=0;i<marks.length;++i){
    if(marks[i]<40)
        marks[i]+=20;
    if(marks[i]>90)
        marks[i]=90;
    if(marks[i]>=50)
        ++count;
    
        
}
console.log("Number of students passed: ",count)
console.log("Marks of Students: ",marks)