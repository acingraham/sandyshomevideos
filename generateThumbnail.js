const ffmpegInstaller = require('@ffmpeg-installer/ffmpeg');
const ffmpeg = require('fluent-ffmpeg');
const ffprobe= require('@ffprobe-installer/ffprobe');

ffmpeg.setFfmpegPath(ffmpegInstaller.path);
ffmpeg.setFfprobePath(ffprobe.path);

/*
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);

const ffprobe = require('@ffprobe-installer/ffprobe');
*/

const ThumbnailGenerator = require('video-thumbnail-generator').default;

const sourceFilename = process.argv[2];
 
const tg = new ThumbnailGenerator({
  sourcePath: `./public/videos/${sourceFilename}`,
  thumbnailPath: './public/thumbnails/',
});

// tg.generateGif();

tg.generateOneByPercent(10);