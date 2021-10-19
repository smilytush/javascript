export {employees}
const employees = {
     data:[
    {firstNAme : "smily", 
    middleName : "r", 
    lastName: "tush"},

    {firstNAme : "tushar", 
    middleName : "r", 
    lastName: "patne"},

    {firstNAme : "tushar",
     middleName : "r",
      lastName: "patne"},
    ]};

const result = employees.data.map (
    (item)=>  ` ${item.firstNAme} ${item.lastName} ${item.middleName}`
    );


console.log(result);