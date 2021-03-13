<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="videos.css">
    <title>Html And CSS Video Gallery</title>
</head>
<body oncontextmenu="return false">
    <div class="container">
        <h1>Explore My All Videos</h1>
        <div id="video_player">
            <video controls poster="" class="video" id="video">
                <source src="./media/1.m4v" type="video/mp4">
                <source src="./media/1.m4v" type="video/mp4">
            </video>
            <div class="scrollBox">
                <div class="box">
                    <img src="./img/1.png">
                    <div class="box-content">
                        <h3>How to create Calculator Using Java Script</h3>
                        <a href="./media/video1.m4v" class="btn">Watch</a>
                    </div>
                </div>
                <div class="box">
                    <img src="./img/2.png">
                    <div class="box-content">
                        <h3>How to create a video Gallery using Html and CSS3</h3>
                        <a href="./media/2.m4v" class="btn">Watch</a>
                    </div>
                </div>
                <div class="box">
                    <img src="./img/3.png">
                    <div class="box-content">
                        <h3>How to create a video Gallery using Html and CSS3</h3>
                        <a href="./media/3.m4v" class="btn">Watch</a>
                    </div>
                </div>
                <div class="box">
                    <img src="./img/4.png">
                    <div class="box-content">
                        <h3>How to create a video Gallery using Html and CSS3</h3>
                        <a href="./media/4.m4v" class="btn">Watch</a>
                    </div>
                </div>
                <div class="box">
                    <img src="./img/5.png">
                    <div class="box-content">
                        <h3>How to create a video Gallery using Html and CSS3</h3>
                        <a href="./media/5.m4v"class="btn">Watch</a>
                    </div>
                </div>
                <div class="box">
                    <img src="./img/6.png">
                    <div class="box-content">
                        <h3>How to create a video Gallery using Html and CSS3</h3>
                        <a href="./media/6.m4v" class="btn">Watch</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- ###########################javascript for vidoe Player################ -->

    <script type="text/javascript">
        let anchors = document.querySelectorAll('div .btn');
    let links = [...anchors];
    
    for (let i=0; i<links.length; i++) {
        links[i].onclick = handler;
    }
    function handler(e) {
        e.preventDefault();
        let videotarget = this.getAttribute("href");
        let filename = videotarget.substr(0, videotarget.lastIndexOf('.'));
        let video = document.getElementById("video");
        video.removeAttribute("poster");
        let source = document.querySelectorAll("#video_player video source");
        source[0].src = filename + ".mp4";
        source[1].src = filename + ".m4v";
        video.load();
        video.play();
    }
    </script>
</body>
</html>
