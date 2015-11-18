var MoneyOps=function (){

}

MoneyOps.add = function(m1,m2){
	
	if(m1.getCurrency().toUpperCase() === m2.getCurrency().toUpperCase())
		return new money(m1.getValue() + m2.getValue(),m1.getCurrency());
	else
		throw new DevisesIncompatibleExc(m1.getCurrency().toUpperCase(), m2.getCurrency().toUpperCase());
}

MoneyOps.substract = function(m1,m2){
	
	if((m1.getCurrency().toUpperCase() === m2.getCurrency().toUpperCase()) && (m1.getValue() - m2.getValue() > 0))
		return new money(m1.getValue() - m2.getValue(),m1.getCurrency());
	else
		throw new DevisesIncompatibleExc(m1.getCurrency().toUpperCase(), m2.getCurrency().toUpperCase());
}

