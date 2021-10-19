const cubicArray = (data) => {
    const newArr=[];
    data.forEach(element => {
        newArr.push(Math.pow(element, 3));
        
        });
    return newArr;
};

console.log(cubicArray([2,4,5,7]));