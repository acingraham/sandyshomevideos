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


const { readdirSync } = require('fs');

const videoDir = '/Users/andrewingraham/Downloads/EverPresent Video Archive/';

// const files = readdirSync('~/Downloads/EverPresent\ Video\ Archive/');
// const files = readdirSync('~/Downloads/');
const files = readdirSync(videoDir);

const vids = [
  {
    original: {
      video:
        '1988 - Erin & Andrew Play Piano, Feathers, Erin Waterfront, Erin Swim Meet.mp4',
      start: 0,
    },
    id: '1',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video: '1989-11-21 - Necker Island2.mp4',
      start: 0,
    },
    id: '2',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 0,
    },
    id: '3',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        `1988-07 Erin's 6th Bday, Pool, E+A+L in Tub, Beach Cookout & Fireworks.mp4`,
      start: 0,
    },
    id: '4',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        '1988-12 - Boston Boat Ride, Dory Party, Play, Waterfront Thanksgiving & Xmas, NYC & More.mp4',
      start: 0,
    },
    id: '5',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        '1989 - Dan Birthday Park, Andrew Birthday Party, Erin Finds Bunny.mp4',
      start: 0,
    },
    id: '6',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        `1995 - Maine '95, Babs 50th - Fuzzy, Andrew's Chorus Recital.mp4`,
      start: 0,
    },
    id: '7',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        `1995 - Mustique '95.mp4`,
      start: 0,
    },
    id: '8',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        `1997 - Skiing Steve's w. Erin, Andrew Baseball, Ross Sports Dinner, Andrew Gold, Erin Ross Grad..mp4`,
      start: 0,
    },
    id: '9',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        `1997-11 - Thanksgiving '97 & More.mp4`,
      start: 0,
    },
    id: '10',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        `Erin's Field Hockey, Erin's Graduation.mp4`,
      start: 0,
    },
    id: '11',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        'Video Tape Memories 01.mp4',
      start: 0,
    },
    id: '12',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        'Video Tape Memories 02.mp4',
      start: 0,
    },
    id: '13',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        'Video Tape Memories 03.mp4',
      start: 0,
    },
    id: '14',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        'Video Tape Memories 04.mp4',
      start: 0,
    },
    id: '15',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        'Video Tape Memories 05.mp4',
      start: 0,
    },
    id: '16',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        'Video Tape Memories 06.mp4',
      start: 0,
    },
    id: '17',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
  {
    original: {
      video:
        'Video Tape Memories 07.mp4',
      start: 0,
    },
    id: '18',
    length: 0,
    locations: [],
    persons: [],
    tags: [],
    years: [],
  },
];


const mapNameToId = {};
vids.forEach(vid => {
  mapNameToId[vid.original.video] = vid.id;
});


console.log(files);
console.log(mapNameToId);


files.forEach(file => {
  const tg = new ThumbnailGenerator({
    sourcePath: videoDir + file,
    thumbnailPath: './public/thumbnails/',
  });

  // tg.generateGif();

  tg.generateOneByPercent(10);
});
/* 
const sourceFilename = process.argv[2];

const tg = new ThumbnailGenerator({
  sourcePath: `./public/videos/${sourceFilename}`,
  thumbnailPath: './public/thumbnails/',
});

// tg.generateGif();

tg.generateOneByPercent(10);
*/