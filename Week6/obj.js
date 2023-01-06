let obj = {
    "firstName" : "Jonh",
    "lastName" : "Smith",
    " ggv " : true,
    "age" :25,
    "address" : {
        "streetAddress" : "21 2nd Street",
        "city" : "New Yark",
        "state" : "NY",
        "postalCode" : "10021-3100"
    },
    "phoneNuber" : [{
        "type" : "home",
        "number" : "212 555-1234"
    },{
        "type" : "office",
        "number" : "646 555-4567"
    },{
        "type" : "mobile",
        "number" : "1234 456-7890"
    }],
    "children":[],
    "spouse":null
};
console.log(obj.phoneNuber[1].number)