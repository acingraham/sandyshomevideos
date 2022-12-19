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
