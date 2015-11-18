module("calc", {
//	setup:function(){alert("setup moneyOps individual test");},
//	teardown:function(){alert("teardown moneyOps individual test");}
});

/* Addition */

test("test_computeresults", 1, function()
{
        var fixture="";
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EU'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");
        
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        
        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        equal(c.message,"Result : 4 (EU)");
}
);

/* Soustraction */

test("test_computeresults_sub", 1, function()
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='3'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EU'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");
        
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        
        
        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        equal(c.message,"Result : 1 (EU)");
}
);

/* Valeur eronnee addition */

test("test_computeresults_add_err_value", 1, function()
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='A'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EU'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");
        
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        equal(c.message,"Unsupported operation ADD");
}
);

/* Valeur eronnee soustraction */

test("test_computeresults_sub_err_value", 1, function()
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='A'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='EU'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");
        
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        
        
        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        equal(c.message,"Unsupported operation SUB");
}
);

/* Devise eronnee addition */

test("test_computeresults_add_err_currency", 1, function()
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='D'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");
        
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        equal(c.message,"Unsupported operation ADD");
}
);

/* Devise eronnee soustraction */

test("test_computeresults_sub_err_currency", 1, function()
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='D'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");
        
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        
        
        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        equal(c.message,"Unsupported operation SUB");
}
);

/* Ajout de parentheses */

test("test_displayResult_green", 2, function()
{
        var fixture="";
        fixture+=("<div id='res'></div>");

        
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        
        var c=new calc();
        c.message="Result : 4 (EU)";
        c.displayResult(document.getElementById('res'));
        equal(document.getElementById('res').innerHTML,"Result : 4 (EU)");
        equal(document.getElementById('res').style.color,"green");
}
);

/* Affichage en rouge si operation impossible */

test("test_displayResult_red", 2, function()
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        var c=new calc();
        c.message="Unsupported operation SUB";
        c.displayResult(document.getElementById('res'));
        equal(document.getElementById('res').innerHTML,"Unsupported operation SUB");
        equal(document.getElementById('res').style.color,"red");
}
);

/* Affichage en vert si operation possible */

test("test_displayResult_alert", 1, function()
{
        var fixture="";
        fixture+=("<div id='res'></div>");

        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        var c=new calc();
        c.message="Unsupported operation SUB";
        c.displayResult(document.getElementById('res'));
        window.alert=function(){
             document.getElementById('res').innerHTML = c.message;  
        }
        equal(document.getElementById('res').innerHTML, c.message);  
}
);


/* Verifie que le message Devises incompatibles s'affiche quand les devises ne sont pas compatibles pour ADD */ 

test("test_devises_incompatibles_add", 1, function()
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='DL'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='ADD'/>");
        fixture+=("</form>");
        
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        equal(c.message,"Devises incompatibles : EU vs DL");
}
);

/* Verifie que le message Devises incompatibles s'affiche quand les devises ne sont pas compatibles pour SUB */ 

test("test_devises_incompatibles_sub", 1, function()
{
        var fixture="";
        fixture+=("<div id='res'></div>");
        fixture+=("<form id='form0'>");
        fixture+=("<input type='text' id='v1' name='v1' value='2'/>");
        fixture+=("<input type='text' id='c1' name='c1' value='EU'/>");
        fixture+=("<input type='text' id='v2' name='v2' value='2'/>");
        fixture+=("<input type='text' id='c2' name='c2' value='DL'/>");
        fixture+=("<input type='text' id='ops' name='ops' value='SUB'/>");
        fixture+=("</form>");
        
        
        var fixtureNode=document.getElementById("qunit-fixture");
        fixtureNode.innerHTML=fixture;
        
        var c=new calc();
        c.computeResult(document.getElementById('form0'));
        equal(c.message,"Devises incompatibles : EU vs DL");
}
);

/* Verifier que v est une valeur numerique */

test("verif_numeric", 2, function()
{
         equal(verif_numeric(1), true);
         equal(verif_currency("A"), false);
}
);

/* Verifier que curr est une devise de deux lettres */

test("verif_currency", 2, function()
{
         equal(verif_currency("EU"), true);
         equal(verif_currency("E"), false);
}
);