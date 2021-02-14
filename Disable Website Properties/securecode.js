// ===== PROTECTION OF MY WEBSITE CONTENT & SOURCE CODE FROM COPYRIGHT =====

// Disable CTRL, SHIFT KEY combination
document.onkeydown = function(e) {

	if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 65 || e.keyCode === 83 || e.keyCode === 73 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117 || e.keyCode === 123)) 
	{
	    swal("I'm just protecting my </DESIGN>/</EFFORT>!", "Sorry, It's not allowed, Be Creative; not copycat!", "error");
	    return false;
	}
	else if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && e.keyCode === 73))
	{
	    swal("I'm just protecting my </DESIGN>/</EFFORT>!", "Sorry, It's not allowed, Be Creative; not copycat!", "error");
	    return false;
	} 
	else
	{
	    return true;
	}
};


// Disable Right Click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
    swal("I'm just protecting my </DESIGN>/</EFFORT>!", "Sorry, It's not allowed, Be Creative; not copycat!", "error");
}, false);