var p1 = document.getElementById("p1");
function fun(){
    var width = innerWidth;
	p1.innerHTML = width+"px";
	requestAnimationFrame(fun);
}
fun();



