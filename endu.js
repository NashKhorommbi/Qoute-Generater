

var name = prompt('Enter your name and surname');
var count = 0;
var total = 0;
var discount = 0.30;
var head = document.getElementById('heading');
var res = document.getElementById('res');
var tot = document.getElementById('tot');
var nme = document.getElementById('name');
var reset = document.getElementById('reset');
var container = document.querySelector('.container2');
var close = document.querySelector('.close');
var ccCont = document.querySelector('.course');
var date = document.getElementById('date');
var dd = new Date();
var r = dd.toDateString();


var courses;
var el;
// var parantNode;



var add = document.querySelectorAll('.add');
add.forEach((i,index) => {
	i.addEventListener('click',function(){
		count++;
	    total = total + 5000;
        res.innerHTML = 'Total is = ' + total;
        // parentNode = i.parentNode;
        courses = i.parentNode.firstChild.textContent;
        el = document.createElement('p');
        el.innerHTML = courses;
       // parentNode.style.textDecoration  = 'line-through';
      
       ccCont.appendChild(el)
       


	})
});

var del = document.querySelectorAll('.del');

/*
function row(){
	count++;
	total = total + 5000;
    res.innerHTML = 'Total is = ' + total;
}
*/
function qoute(){

   if(count >= 5){
    	var disAm = total * discount;
    	total = total - disAm;
    }

    container.style.display = 'block';
	tot.innerHTML = 'Total cost = ' + 'R'+total;
	nme.innerHTML = name;
	heading.innerHTML ='';
    

}

function resett(){
	total = 0;
	count = 0;
	res.innerHTML = 'Total is = ' + total;
	ccCont.innerHTML = '';
}

close.onclick = function(){
	container.style.display = 'none';
	total = 0;
	count = 0;
	res.innerHTML = 'Total is = ' + total;
	ccCont.innerHTML = '';
	heading.innerHTML = 'Select your courses'
}

date.innerHTML = r;