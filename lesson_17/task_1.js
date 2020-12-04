function saveColor(event){
    let element = event.target;
    if(element.classList.contains('color_disable')){
        element.classList.remove('color_disable');
        element.classList.add('color_enable');
    }else{
        element.classList.remove('color_enable');
        element.classList.add('color_disable');
    }

}