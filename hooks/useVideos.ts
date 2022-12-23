import Fuse from 'fuse.js'
import { useMemo } from 'react'
/*

      '1988 - Erin & Andrew Play Piano, Feathers, Erin Waterfront, Erin Swim Meet.mp4',

  0 - 8:41: erin, andrew, sandy, 'piano', 'singing', 'feathers', 'bird'
  8:41 - 9:03: hose, andrew, erin, sandy
  9:05 - 13:40: feathers, bird, erin, andrew, sandy
  13:52 - 16:45: erin, andrew, phone, jokes,
  16:45 - 17:50: erin, sandy, waterfront school, school, 
  17:50 - : 
*/

// type Person = 'erin' | 'andrew' | 'sandy' | 'kathy' | 'john' | 'laura' | 'barbara' | 'helen' | 'mary ann'
interface Video {
  original: {
    video: string
    start: number
  }
  id: string
  length: number
  locations: string[]
  persons: string[]
  tags: string[]
  years: number[]
}

const vids: Video[] = [
  {
    original: {
      video:
        '1988 - Erin & Andrew Play Piano, Feathers, Erin Waterfront, Erin Swim Meet.mp4',
      start: 1,
    },
    id: '1.1',
    length: 517,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'andrew', 'sandy'],
    tags: ['piano', 'feathers', 'baby bird', 'bird', 'robin', 'singing'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988 - Erin & Andrew Play Piano, Feathers, Erin Waterfront, Erin Swim Meet.mp4',
      start: 519,
    },
    id: '1.2',
    length: 22,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'andrew', 'sandy'],
    tags: ['hose', 'patio'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988 - Erin & Andrew Play Piano, Feathers, Erin Waterfront, Erin Swim Meet.mp4',
      start: 544,
    },
    id: '1.3',
    length: 276,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'andrew', 'sandy'],
    tags: ['feathers', 'bird'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988 - Erin & Andrew Play Piano, Feathers, Erin Waterfront, Erin Swim Meet.mp4',
      start: 831,
    },
    id: '1.4',
    length: 174,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'andrew', 'sandy'],
    tags: ['phone', 'jokes'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988 - Erin & Andrew Play Piano, Feathers, Erin Waterfront, Erin Swim Meet.mp4',
      start: 1010,
    },
    id: '1.5',
    length: 60,
    locations: ['east hampton', 'new york', 'waterfront school'],
    persons: ['erin', 'sandy'],
    tags: ['waterfront school'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 1,
    },
    id: '3.1',
    length: 236,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'andrew', 'sandy', 'kitty', 'carrie'],
    tags: ['breakfast'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 237,
    },
    id: '3.2',
    length: 47,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'andrew', 'sandy', 'kathy'],
    tags: ['bunnies', 'baby bunnies'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 287,
    },
    id: '3.3',
    length: 113,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'andrew', 'sandy', 'kathy', 'kitty'],
    tags: ['wrestling'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 404,
    },
    id: '3.4',
    length: 221,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'sandy'],
    tags: ['bunnies', 'baby bunnies'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 655,
    },
    id: '3.5',
    length: 518,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['andrew', 'sandy', 'kitty', 'kathy'],
    tags: ['dinosaur hunting'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 1174,
    },
    id: '3.6',
    length: 609,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['drew', 'andrew', 'sandy', 'erin', 'carrie', 'luke'],
    tags: ['pool', 'water guns'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 1785,
    },
    id: '3.7',
    length: 0,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['kathy', 'andrew', 'sandy', 'erin'],
    tags: ['beach', 'minnows'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 1983,
    },
    id: '3.9',
    length: 0,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'andrew', 'luke'],
    tags: ['pool', 'swimming', 'diving'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 2480,
    },
    id: '3.10',
    length: 0,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'andrew'],
    tags: [],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 0,
    },
    id: '3.11',
    length: 0,
    locations: ['east hampton', 'new york'],
    persons: ['erin', 'andrew', 'sandy', 'kathy'],
    tags: ['carnival', 'ferris wheel', 'merry go round'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 0,
    },
    id: '3.12',
    length: 0,
    locations: ['east hampton', 'new york', 'west end road'],
    persons: ['erin', 'sandy'],
    tags: ['birds'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 0,
    },
    id: '3.13',
    length: 0,
    locations: ['east hampton', 'new york', 'maidstone'],
    persons: ['erin', 'sandy'],
    tags: ['swimming', 'swimming competition'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 0,
    },
    id: '3.14',
    length: 0,
    locations: ['east hampton', 'new york', 'maidstone'],
    persons: ['sandy'],
    tags: ['golf', 'driving range'],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 0,
    },
    id: '3.15',
    length: 0,
    locations: ['east hampton', 'new york'],
    persons: ['erin', 'sandy'],
    tags: [],
    years: [1988],
  },
  {
    original: {
      video:
        '1988-07 - Aunt Kitty + Erin + Andrew, Erin w. Babs, Andrew Dinosaurs, Pool.mp4',
      start: 0,
    },
    id: '3.16',
    length: 0,
    locations: ['east hampton', 'new york', 'maidstone'],
    persons: [],
    tags: ['golf', 'driving range'],
    years: [1988],
  },
  {
    original: {
      video: '1989-11-21 - Necker Island2.mp4',
      start: 0,
    },
    id: '2.1',
    length: 996,
    locations: ['necker island'],
    persons: [
      'andrew',
      'barbara',
      'erin',
      'kathy',
      'laura',
      'paula',
      'ralph',
      'rob',
      'sandy',
    ],
    tags: ['pool', 'ocean', 'treasure hunt', 'treasure', 'bottle', 'island'],
    years: [1989],
  },
  {
    original: {
      video: '1989-11-21 - Necker Island2.mp4',
      start: 1260,
    },
    id: '2.6',
    length: 523,
    locations: ['necker island'],
    persons: [
      'andrew',
      'barbara',
      'betty',
      'erin',
      'helen',
      'john',
      'kathy',
      'laura',
      'mary ann',
      'paula',
      'randy',
      'ralph',
      'rob',
      'sandy',
    ],
    tags: ['thanksgiving', 'dinner', 'holiday', 'wrestling'],
    years: [1989],
  },
  /*
  {
    video: '1989-11-21 - Necker Island2.mp4',
    years: [1989],
    persons: [],
    locations: [],
    tags: [],
  },
  {
    video: "1995 - Maine '95, Babs 50th - Fuzzy, Andrew's Chorus Recital.mp4",
    years: [1995],
    persons: [],
    locations: [],
    tags: [],
  },
  */
]


const options = {
  includeScore: true,
  // Search in `author` and in `tags` array
  keys: ['locations', 'persons', 'tags', 'years'],
}

const allVids: Fuse.FuseResult<Video>[] = vids.map((vid, index) => ({
  item: vid,
  refIndex: index,
  score: 1,
}))

const fuse = new Fuse(vids, options)

const useVideos = (searchTerm: string) => {
  const results = useMemo(
    () => (searchTerm ? fuse.search(searchTerm) : allVids),
    [searchTerm],
  )

  return results
}


export default useVideos
