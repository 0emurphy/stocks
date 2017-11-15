function Stock(n,t,i,v,q){
    this.name=n;
    this.ticker=t;
    this.index=i;
    this.value=v;
    this.quantity=q;
    //Initialize the instance variables below
    function add (){}
    function update(){}
    function buy(){}
    function sell(){
        
    }
    //declare and define totalValue function below
    function totalValue(){
        return this.value * this.quantity;
    }

    //declarea and define sell(q) function below

}

module.exports = Stock;
