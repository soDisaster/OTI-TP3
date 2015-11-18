var money=function(v,curr) {
	this.v=v;
	this.curr=curr;
}

money.prototype.getCurrency=
        function () {
		return this.curr;
	};

money.prototype.getValue=
        function () {
		return this.v;
	};

money.prototype.equals=
	function (otherM) {
		return (otherM.getValue()==this.getValue() && otherM.getCurrency().toUpperCase() === this.getCurrency().toUpperCase());
	};
        
money.prototype.toString=
	function () {
		return this.getValue()+" ("+this.getCurrency()+")" ;
	};