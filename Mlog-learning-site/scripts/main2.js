
let func1 = (text1 , text2) => {
    var nya1 = document.getElementById(text1);
    var nya2 = document.getElementById(text2);
    if(nya1.hidden) {
        nya1.hidden = false;
        nya2.hidden = true;
    }else{
        nya1.hidden = true;
        nya2.hidden = false;
    }
}

let copy1 = (copy) => {
    const textToCopy = document.getElementById(copy).innerText;
    navigator.clipboard.writeText(textToCopy);
}

let openF = () => {
    document.getElementById("folder1");
    if(folder1.hidden){
        folder1.hidden = false;
        folder2.hidden = false;
    }else{
        folder1.hidden = true;
        folder2.hidden = true;
    }
}

let closeF = () => {
    document.getElementById("folder1");
    folder1.hidden = true; 
    folder2.hidden = true;
}






