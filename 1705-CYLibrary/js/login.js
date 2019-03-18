
window.onload = function(){
	var inputs = document.getElementsByClassName("input");
	for (var i = 0;i < inputs.length;i++) {
		inputs[i].onmouseover = function(){
			this.style.boxShadow = "0 0 5px #0dbfdd";
		}
		inputs[i].onmouseout = function(){
			this.style.cssText = "";
		}
	}

}