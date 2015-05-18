# scrub-video-on-scroll
After seeing a <a href="http://www.apple.com/macbook/" target="_blank">Macbook Pro scroll animation</a> on the apple website, I wanted to figure out how it works and incoporate it into my own projects. 

The effect works by setting the playhead of a video (vid.currentTime) to a value based on the total distance scrolled. See the notes in the main.js folder to see how to adjust the speed at which a 'scroll' will scrub through a video. See the css folder to adjust the total amount of px that can be scrolled in one direction. 

I have begun to build out a feature where you can press two keys to alternate between two parts of the video. This feature could be improved by creating a smooth transition between the two points, instead of the the abrupt jump that it is now. Feel free to submit a pull request with any improvements!