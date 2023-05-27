
//"{[()]}"

let balance = function Balanced(str){
var balancedString= str;
var res = [];
let iterate = -1;
//var mapped = new Map();

if(balancedString.length % 2 ==0 ){
    for(let index in balancedString){

        if(balancedString[index] == "{" || balancedString[index] == "(" || balancedString[index] == "["){
            res.push(balancedString[index]);
            iterate ++;
        }
        else{
            if(iterate >= 0 && (balancedString[index] == "}" || balancedString[index] == ")" || balancedString[index] == "]")){

                let checking = res.pop();
                console.log(checking, res);
                if((checking =="{" && balancedString[index] == "}") ||  (checking =="(" && balancedString[index] == ")") || (checking =="[" && balancedString[index] == "]")){
                    iterate --;
                }
                else{
                    return false;
                }
                
            }
            else{
                return false;
            }
    }
     

    }

    return true;
}
}
if(! balance("{[]}()") ){
    console.log("Not balanced");
}
else{
    console.log("Balanced");
}
//console.log(res);