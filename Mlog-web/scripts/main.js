let openF = (select, mode) => {
	let elem = document.getElementById(select);
	if(elem.classList.contains("active")){
		if(elem.style.display == 'none'){
			elem.style.display = mode;
		}else{
			elem.style.display = "none";
		}
	}
	if(elem == document.getElementById("commands")){
		document.getElementById("examples").style.display = "none";
		document.getElementById("contacts").style.display = "none";
	}else if(elem == document.getElementById("examples")){
		document.getElementById("commands").style.display = "none";
		document.getElementById("contacts").style.display = "none";
	}else if(elem == document.getElementById("contacts")){
		document.getElementById("commands").style.display = "none";
		document.getElementById("examples").style.display = "none";
	}
}

var area = document.getElementsByTagName('h5');

for (var i = 0; i < area.length; i++) {
  var text = area[i].textContent.trim().split(/\r?\n/);

  for (var j = 0; j < text.length; j++) {
    var words = text[j].trim().split(' ');

    for (var k = 0; k < words.length; k++) {
      if (words[k].startsWith('@')) {
        words[k] = '<span class="green">' + words[k] + '</span>';
      } else if (!isNaN(words[k])) {
        words[k] = '<span class="yellow">' + words[k] + '</span>';
      } else if (k === 0) {
        words[k] = '<span class="purple">' + words[k] + '</span>';
      } else {
        words[k] = '<span class="cyan">' + words[k] + '</span>';
      }
    }
    text[j] = words.join(' ');
  }
  area[i].innerHTML = text.join('<br>');
}

let copy1 = (copy) => {
	const textToCopy = document.getElementById(copy).innerText;
	navigator.clipboard.writeText(textToCopy);
}

let select = (text) => {
	document.getElementById("en").style.display = "none";
	document.getElementById("ru").style.display = "none";
	document.getElementById(text).style.display = "block";
}

let active = (button, elem) => {
	document.getElementById("button1").classList.remove("active");
	document.getElementById("button2").classList.remove("active");
	document.getElementById("button3").classList.remove("active");
	document.getElementById("button4").classList.remove("active");
	document.getElementById("button5").classList.remove("active");
	document.getElementById(button).classList.add("active");

	document.getElementById("basic").classList.remove("active");
	document.getElementById("commands").classList.remove("active");
	document.getElementById("examples").classList.remove("active");
	document.getElementById("contacts").classList.remove("active");
	document.getElementById("languages").classList.remove("active");
	document.getElementById(elem).classList.add("active");
	if(!document.getElementById(elem).classList.contains("basic")){
		openF(elem, "flex");
	}
}

let openArea = (area) => {
	document.getElementById("basic").style.display = "none";
	document.getElementById("basic2").style.display = "none";
	document.getElementById("comm").style.display = "none";
	document.getElementById("comm2").style.display = "none";
	document.getElementById("exmp").style.display = "none";
	document.getElementById("exmp2").style.display = "none";
	
	let elem = document.getElementById(area);
	let elem2 = document.getElementById(`${area}2`);
 if(elem.style.display == 'none'){
		elem.style.display = "block";
		elem2.style.display = "block";
	}else{
		elem.style.display = "none";
		elem2.style.display = "none";
	}
}


let navigation = document.getElementById("navigation");
let navLinks = navigation.getElementsByClassName("item");

navigation.addEventListener("click", function(event) {
 if (document.getElementById("ru").style.display === "block") {
  event.preventDefault();
  let link = event.target;
  console.log(link);

  if (link.classList.contains("item")) {
   let href = link.getAttribute("href");
   let itemId = href.substring(href.lastIndexOf("#") + 1);
   let scrollId = `${itemId}2`;
   let scrollItem = document.getElementById(scrollId);
   
   if (scrollItem) {
				scrollItem.style.scrollMarginTop = "100px";
    scrollItem.scrollIntoView({ behavior: "smooth" });
   }
  }
 }else{
		event.preventDefault();
		let link = event.target;
		console.log(link);

		if (link.classList.contains("item")) {
			let href = link.getAttribute("href");
			let itemId = href.substring(href.lastIndexOf("#") + 1);
			let scrollItem = document.getElementById(itemId);
			
			if (scrollItem) {
				scrollItem.style.scrollMarginTop = "100px";
				scrollItem.scrollIntoView({ behavior: "smooth" });
			}
		}
	}
});

let expand = (code) => {
	let text1 = document.getElementById(code);
	if(text1.style.height == "30vh"){
		text1.style.height = "100%";
	}else{
		text1.style.height = "30vh";
	}
}
