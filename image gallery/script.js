let fiteritem = document.querySelector('.items-links');
let fileteimages = document.querySelectorAll('.project-img');

window.addEventListener('load',()=>{
    fiteritem.addEventListener('click',(selectedItem)=>{
        if(selectedItem.target.classList.contains('item-link')){
            document.querySelector('.menu-active').classList.remove('menu-active');
            selectedItem.target.classList.add('menu-active');
            let filterName = selectedItem.target.getAttribute('data-name');
            fileteimages.forEach((image)=>{
                let fileteimages = image.getAttribute('data-name');
                if((fileteimages==filterName) || filterName == 'all'){
                    image.style.display='block'
                }else{
                    image.style.display='none'
                }
            })
        }
    })
})
function FullView(ImgLink){
    document.getElementById("FullImage").src = ImgLink; 
    document.getElementById("FullImageView").style.display = "block";
}
function CloseFullView(){
    document.getElementById("FullImageView").style.display = "none";
}