class Customarray{
    constructor(...arr){
        this.size=arr.length;
        for(var i=0; i<this.size; i++){
            this[i] = arr[i];
        }
    }
}
    Customarray.prototype.push=function (ele){
        this[this.size] = ele;
        this.size++;
    }
    Customarray.prototype.pop=function(){
        delete this[this.size-1]
        this.size--;
    }
    Customarray.prototype.top=function() {
        if (this.size > 0) {
         console.log(this[this.size - 1]);
        }
      }
    Customarray.prototype.print=function(){
        let element=[]
        for(let i=0; i<this.size; i++){
            element.push(this[i]);
        }
        console.log(`[${element.join(',')}]`);
    }
    Customarray.prototype.printReverse=function(){
        let element=[]
        for(let i=this.size-1; i>=0; i--){
            element.push(this[i]);
        }
        console.log(`[${element.join(',')}]`)
    }
    Customarray.prototype.Size=function(){
        console.log(this.size);
    }

const arr = new Customarray(1,2,3,4);

arr.push(5);
arr.print();
arr.pop();
arr.print(); 
arr.top(); 
arr.printReverse(); 
arr.Size(); 