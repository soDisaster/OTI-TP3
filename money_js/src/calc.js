function calc() {
        this.message="";
}

calc.prototype.displayResult=function (resultDiv) {
            if(this.message.contains("Result : ")){
                resultDiv.style.color = "green";
            }
            else{
                resultDiv.style.color = "red";
            }
            resultDiv.innerHTML=this.message;
            alert(this.message);
        };
        
calc.prototype.computeResult=function (form) {
            //alert("Not the same currency");
            m1=new money(parseInt(form.elements['v1'].value),
                            form.elements['c1'].value);
            m2=new money(parseInt(form.elements['v2'].value),
                            form.elements['c2'].value);
                            
            ops=form.elements['ops'].value;
	    
            try{
                if (ops==="ADD" && verif_numeric(m1.v) && verif_numeric(m2.v) && verif_currency(m1.curr) && verif_currency(m2.curr)) {
                    res=MoneyOps.add(m1,m2);
                    this.message="Result : "+(res.toString())+"";

                
                } 
                else if (ops==="SUB" && verif_numeric(m1.v) && verif_numeric(m2.v) && verif_currency(m1.curr) && verif_currency(m2.curr)) {
                    res=MoneyOps.substract(m1,m2);
                    this.message="Result : "+(res.toString())+"";
                }
                else {
                    this.message="Unsupported operation "+ops+"";
                    
                }
            }catch (e) {
                this.message=e.toString();
                
            }
	};

function doComputation(form,resDiv) {
    c=new calc();
    c.computeResult(form);
    c.displayResult(resDiv);
}

/*   Fonction pour verifier que la variable passee est un nombre */
function verif_numeric(variable)
{
   var exp = new RegExp("^[0-9]+$","g");
   return exp.test(variable);
}

/*   Fonction pour verifier que la variable passee est une devise de deux lettres */
function verif_currency(variable)
{
   var exp = new RegExp("[A-Z]{2}");
   return exp.test(variable);
}