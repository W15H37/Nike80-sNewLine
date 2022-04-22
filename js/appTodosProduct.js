function nextPage(){
	let page1btn = document.querySelector('.page1');
	let page2btn = document.querySelector('.page2');
	
	let item = document.getElementsByClassName("item");
	let listItems = [];
	for (var i = 0; i < item.length; i++){
		listItems.push(item[i]);
	}

	page1btn.classList.add("active");
	page2btn.addEventListener("click", ()=>{
		page1btn.classList.remove("active");
		page2btn.classList.add("active");

		for (var i = 0; i < listItems.length; i++){
			listItems[i].src = "media/shoes/pexels-jock-mark-5584504.jpg";
		}
	})
	page1btn.addEventListener("click", ()=>{
		page1btn.classList.add("active");
		page2btn.classList.remove("active");

		for (var i = 0; i < listItems.length; i++){
			listItems[i].src = "media/shoes/pexels-jock-mark-5584504.jpg";
		}
	})
}

function itemHover(){
	let trigger = document.getElementsByClassName("shoe");
	let item = document.getElementsByClassName("item");
	let target = document.querySelector(".addItem");

	for (var i=0; i<trigger.length; i++){
		trigger[i].addEventListener("mouseover", function(){
			if(this){
				this.classList.add("hoverShoe");
				target.classList.add("visible");
			}
		})

		trigger[i].addEventListener("mouseout", function(){
			if(this){
				this.classList.remove("hoverShoe");
				target.classList.remove("visible");
			}
		})
	}
}