window.onload = function(){
    let myimg = document.querySelector('img');
    let btn = document.querySelector('button');

    myimg.onclick = function(){
        let imgsrc = myimg.getAttribute('src');
        if(imgsrc === 'favicon.jpg'){
            myimg.setAttribute('src','illuminati.jpg');
        }else{
            myimg.setAttribute('src','favicon.jpg');
        }
    }

    btn.onclick = function(){
        runIvent();
    }

}

function runIvent(){
    alert('画像をクリックすると何かが起こるよ！');
}
