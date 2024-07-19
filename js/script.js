const threeDots=document.querySelector(".fa-ellipsis")
const menuBox=document.querySelector("#menu_box")
Array.from(document.getElementsByTagName("input")).forEach((item, index) => {
    item.addEventListener("keyup", () => {
        if (item.value.length > 0) {
            document.getElementsByClassName("fa-caret-down")[index].style.transform = "rotate(180deg)"
        }
        else {
            document.getElementsByClassName("fa-caret-down")[index].style.transform = "rotate(0deg)"
        }
    })

})

threeDots.addEventListener("click",()=>{
    menuBox.classList.toggle("ul_active")
})