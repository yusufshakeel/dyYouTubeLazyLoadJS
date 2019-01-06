/*!
 * dyYouTubeLazyLoadJS
 *
 * Author: Yusuf Shakeel
 * https://github.com/yusufshakeel
 *
 * GitHub Link: https://github.com/yusufshakeel/dyYouTubeLazyLoadJS
 *
 * MIT license
 * Copyright (c) 2019 Yusuf Shakeel
 *
 * Date: 2017-12-29 Fri
 */
(function () {

    // width of the youtube videos
    var ytThumbnailWidth = [320, 480, 640, 1920];

    // filename of the youtube video thumbnails
    var ytThumbnailFilename = ['mqdefault.jpg', 'hqdefault.jpg', 'sddefault.jpg', 'maxresdefault.jpg'];

    // get all the elements having the targeted class
    var dyYTLazyLoadElems = document.querySelectorAll('.dy-yt-lazyload-container');

    Array.prototype.forEach.call(dyYTLazyLoadElems, function (el) {

        // create the play button
        var playBtn = document.createElement("div");
        playBtn.setAttribute("class", "dy-yt-lazyload-playbtn");
        el.appendChild(playBtn);

        // width of the container in which the youtube video
        // will be embedded
        var containerWidth = el.offsetWidth;

        // figure out the cover size using the container width
        var imgIdx = -1;
        for (var i = 0; i < ytThumbnailWidth.length; i++) {
            if (ytThumbnailWidth[i] < containerWidth) {
                if ((containerWidth - ytThumbnailWidth[i]) / ytThumbnailWidth[i] <= 0.25) {
                    imgIdx = i;
                    break;
                }
            } else {
                imgIdx = i;
                break;
            }
        }
        if (imgIdx === -1) {
            imgIdx = ytThumbnailWidth[ytThumbnailWidth.length - 1];
        }

        // get the video id from the attribute
        // and prepare the thumbnail url
        var videoId = el.getAttribute('data-videoid');
        var source = "https://img.youtube.com/vi/" + videoId + "/" + ytThumbnailFilename[imgIdx];

        // lazy load video thumbnail
        var thumbnail = new Image();
        thumbnail.src = source;
        thumbnail.setAttribute("class", "dy-yt-lazyload-thumbnail");
        thumbnail.addEventListener("load", function () {
            el.appendChild(thumbnail);
        });

        // handle the click event
        el.addEventListener("click", function () {

            var iframe = document.createElement("iframe");

            iframe.setAttribute("class", "dy-yt-lazyload-iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);

            this.innerHTML = "";
            this.appendChild(iframe);

        });

    });

}());