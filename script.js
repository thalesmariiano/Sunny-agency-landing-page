
const float_menu = document.querySelector("#float-menu")
var menuIsOpen = false

document.querySelector("#burger-button").addEventListener("click", () => {
	if(menuIsOpen){
		float_menu.style.display = "none"
		menuIsOpen = false
	}else{
		float_menu.style.display = "block"
		menuIsOpen = true
	}
})

window.onresize = () => {
	menuIsOpen = false
	float_menu.style.display = "none"
}