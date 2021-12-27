var percentInserted = false;


function displaying(value){
    var lastInsert= String(document.getElementById("display").innerHTML).slice(-1);
    var doc = document.getElementById("display");
    
    if(percentInserted && 
        (value === '-' 
        || value === '+' 
        || value === '/' 
        || value === '*' 
        || value === '.'
        || value === '%')){
        doc.innerHTML = calculate(false) + value;
    } else {
        if((value === '-' 
            || value === '+' 
            || value === '/' 
            || value === '*' 
            || value === '.'
            || value === '%')
        &&    (lastInsert ===  '-' 
            || lastInsert ===  '+' 
            || lastInsert ===  '/' 
            || lastInsert ===  '*' 
            || lastInsert ===  '.'
            || lastInsert ===  '%')) {
            
            doc.innerHTML = document.getElementById("display").innerHTML.replace(/.$/,value);
        }else {
            if(doc.innerHTML==='0'){
                doc.innerHTML=value;
            } else {
                if(value==='%'){
                    percentInserted=true;
                }
                doc.innerHTML+=value;
                console.log(percentInserted);
            }
        }
    }
    
}
function deleteOne(){
    var doc = document.getElementById("display");
    doc.innerHTML=doc.innerHTML.slice(0,length-1);
    
}
function deleteAll(){
    var doc = document.getElementById("display");
    doc.innerHTML=0;
}
function calculate(isEnter){
    var doc = document.getElementById("display");
    var lastInsert= String(document.getElementById("display").innerHTML).slice(-1);
    if(lastInsert === '-' 
    || lastInsert === '+' 
    || lastInsert ===  '/' 
    || lastInsert ===  '*' 
    || lastInsert ===  '.'
    || lastInsert ===  '%'){
        doc.innerHTML = doc.innerHTML.substring(0, doc.innerHTML.length-1);
    }
    
    if(percentInserted){
        var calc = doc.innerHTML.split('%');
        percentInserted=false;
        if(isEnter){
            doc.innerHTML=((calc[0]*calc[1])/100);
        } else {
            return ((calc[0]*calc[1])/100);
        }
    } else {
        doc.innerHTML= eval(doc.innerHTML);
    }
}
