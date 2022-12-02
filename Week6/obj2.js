var sum1 = 0
var sum2 = 0 
var sum3 = 0
var sum4 = 0
var obj=[{
    "ID":20001,
    "Name":"นางสาวจันทรรัตน์ ปรีดาศิริกุล",
    "department":"ฝ่ายบุคคล",
    "position" : "HR",
    "salary" : 27000,
    "Bonus" : "A",
},{
    "ID":20002,
    "Name":"นายภูพัฒน์ วัชรจิระกุล",
    "department":"ไอที",
    "position" : "System Engineer",
    "salary" : 24000,
    "Bonus" : "S",
},{
    "ID":20003,
    "Name":"นางอนันตญา วัชรจิระกุล",
    "department":"การเงิน",
    "position" : "Account",
    "salary" : 38000,
    "Bonus" : "B",
},{
    "ID":20004,
    "Name":"นางสาวกันสิตา มิ่งมาลา",
    "department":"ฝ่ายบุคคล",
    "position" : "HR",
    "salary" : 23000,
    "Bonus" : "A",
},{
    "ID":20005,
    "Name":"นายสุชาติ วัฒนศักดิ์มนตรี",
    "department":"ฝ่ายบุคคล",
    "position" : "HR",
    "salary" : 76000,
    "Bonus" : "C",
},{
    "ID":20006,
    "Name":"นายกรณ์ อุดมทรัพย์",
    "department":"การเงิน",
    "position" : "Account",
    "salary" : 51000,
    "Bonus" : "S",
},{
    "ID":20007,
    "Name":"นายจักริน ภูงาม",
    "department":"ฝ่ายบุคคล",
    "position" : "HR",
    "salary" : 19000,
    "Bonus" : "A",
},{
    "ID":20008,
    "Name":"นางอรัญญา เหล่าสกุล",
    "department":"การเงิน",
    "position" : "Account",
    "salary" : 33000,
    "Bonus" : "C",
},{
    "ID":20009,
    "Name":"นางสาวจสราวลี ธาราวงศ์",
    "department":"บุคคล",
    "position" : "HR",
    "salary" : 27000,
    "Bonus" : "A",
}]
for(objsum=0;objsum<obj.length;objsum++){
    if(obj[objsum].Bonus == "S"){
        sum5 = obj[objsum].salary*1.6;
        sum3 += sum5;
    }else if(obj[objsum].Bonus == "A"){
        sum5 = obj[objsum].salary*1.3;
        sum3 += sum5;
    }else if(obj[objsum].Bonus == "B"){
        sum5 = obj[objsum].salary*1.0;
        sum3 += sum5;
    }else if(obj[objsum].Bonus == "C"){
        sum5 = obj[objsum].salary*0.8;
        sum3 += sum5;
    }
    sum1 = obj[objsum].salary*12;
    sum7 = sum1+sum5
    sum4 += sum7;
    if(sum7<300000){
        tax = 0;
    }else if(sum7=>300000&&sum7<=600000){
        tax = sum7*0.01;
        sum2 += tax;
    }else if(sum7=>600000&&sum7<=1000000){
        tax = sum7*0.25;
        sum2 += tax;
    }else if(sum7=>1000000){
        tax = sum7*0.35;
        sum2 += tax;
    }
    console.log(obj[objsum].Name,"มีรายได้สุทธิต่อปี =",sum7,"บาท","ต้องจ่ายภาษี",tax,"บาท","ได้โบนัส",Math.ceil(sum5));
}
console.log("พนักงานแผนกการเงิน")
for(i=0;i<obj.length;i++){
    if(obj[i].position=="Account"){
        console.log(obj[i].Name,"ตำแหน่ง",obj[i].position,"ต้องจ่ายภาษี",obj[i].tax);
    }
}
console.log("ผลประเมินA")
for(i=0;i<obj.length;i++){
    if(obj[i].Bonus=="A"){
        console.log(obj[i].Name,"ผลประเมิน",obj[i].Bonus);
    }
}
console.log("บริษัทต้องจ่ายภาษีทั้งหมด :",sum2)
console.log("โบนัสที่ต้องให้พนักงานทั้งหมด :",sum3)
console.log("รายจ่ายต่อปีของบริษัท :",sum4)