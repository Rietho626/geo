export default function getDomActions(word){
    return new DomActions(word);
}

class DomActions{
    constructor(test){
        this.test = test;
    }
    bark(){
        console.log(this.test + "woof");
    }
}