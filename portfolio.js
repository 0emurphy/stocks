function Portfolio(){


    this.stocks=[];


    function findStock(trk,list){
        let i;
        for(let s = 0; s < this.stocks.length; s++){
            if(tkr == this.stocks[s].ticker){
                return s;
            }
        }
        return i;
    }


    this.add = function(stk){
        this.stocks.push(stk);
    };
    this.update = function(tkr,val){
        if(findStock(tkr) >= 0){
            this.stocks[findStock(tkr)].value = val;
        }
    };
    this.buy = function(tkr,qnt){
        if(findStock(tkr) >= 0){
            return this.stocks[findStock(tkr)].buy(qnt);
        }
    };
    this.sell = function(tkr,qnt){
        if(findStock(tkr) >= 0){
            return this.stocks[findStock(tkr)].sell(qnt);
        }
    };
    this.totalValue = function(){
        let total = 0
        for(let s = 0; s < this.stocks.length; s++){
            total = total + this.stocks[s].totalValue();
        }
        return total;
    };
}

module.exports = Portfolio;
