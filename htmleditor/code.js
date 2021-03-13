var left = document.getElementById('left');
var right = document.getElementById('right');
var bar = document.getElementById('bar');
let a;


const drag = (e) => {
    e.preventDefault();
    document.selection ? document.selection.empty() : window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) + 'px';
    editor.resize();
}

bar.addEventListener('mousedown', () => {
    document.addEventListener('mousemove', drag);
});

bar.addEventListener('mouseup', () => {

    document.removeEventListener('mousemove', drag);
});

var editor = ace.edit("editor", {
    wrap: true
});
// editor.setTheme("ace/theme/cobalt");
editor.session.setMode("ace/mode/html");

editor.setOptions({
    fontSize: '13pt'
    // useWrapMode:true,
    // indentedSoftWrap:false

})
editor.setAutoScrollEditorIntoView(true);
editor.setShowPrintMargin(false);
editor.removeLines(1);
editor.removeLines(2);



// editor.getSession().setUserWrapMode(true);


function fadeOutEffect(id) {
    var fadeTarget = document.getElementById(id);
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 30);
}
function closePopup(){
    //let errPopup = document.getElementById('err');
    //errPopup.style.display = 'none';
    fadeOutEffect('err');
}

function getEditorCode() {
    let errPopup = document.getElementById('err');
    errPopup.style.display = 'none';
    errPopup.style.opacity = 1;
    let resultFrame = document.getElementById('resultFrame');
    let userCode = editor.getSession().getValue();
    

    let ifrw = resultFrame.contentWindow;
    //ifrw = resultFrame.contentWindow ? resultFrame.contentWindow : //resultFrame.contentDocument.document ? resultFrame.contentDocument.document : //resultFrame.contentDocument;
    ifrw.document.open();

    
        userCode = '<script>\n'+
'window.onerror = (message, url, linenumber) =>{'+
' let err = window.parent.document.getElementById("err");let errSpan =window.parent.document.getElementById("err-span"); errSpan.innerHTML = "<b>JavaScript Error: </b>"+message+" on line "+linenumber;err.style.display ="block";err.style.opacity = 1'+
'}\n</'+'script>\n' + userCode;

    console.log(userCode);
    ifrw.document.write(userCode);
    ifrw.document.close();
    resultFrame.contentWindow.document.body.style.wordWrap = 'break-word';
    
}



window.onload = function () {
    let code = '<script>\n'+
    "   document.write('Hello World!!!');\n"+
    '   // Write you JavaScript Code Here\n'+
'</script>'
    editor.getSession().setValue(code);
    //if (localStorage.getItem('theme')) {
    //    editor.setTheme(localStorage.getItem('theme'));
    //} else {
    //     setDarkMode();
        //editor.setTheme('');
        //localStorage.setItem('theme', '');
    //}
    // left.style.width = (window.innerWidth / 2 - bar.offsetWidth / 2) + 'px';
    // right.style.width = (window.innerWidth - left.style.width) + 'px';
    setDarkMode();
    getEditorCode();
    
}

function myFun(){
  console.log('hello there');
}

function setDarkMode() {
    editor.setTheme("ace/theme/cobalt");
    localStorage.setItem('theme', 'ace/theme/cobalt')
}

function setLightMode() {
    editor.setTheme('');
    localStorage.setItem('theme', '');
}