const assetsDirectory = './assets/';

// default projects shown on front page
export const showcaseProjects = [
  {
    name: 'Tic Tac Toe',
    img: require(assetsDirectory + 'test.png'),
    techList: ['html', 'css', 'javascript']
  },
  {
    name: 'Dungeon Crawler',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['html', 'css', 'javascript', 'react']
  },
  {
    name: 'Chore Chart',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['html', 'css', 'javascript', 'react', 'redux'],
    gitLink: 'https://github.com/libeja/chore-chart',
    liveLink: 'https://libeja.github.io/chore-chart/'
  },
  {
    name: 'Game of Life',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['html', 'css', 'javascript', 'react']
  },
  {
    name: 'Simon',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['html', 'css', 'javascript']
  },
  {
    name: 'JavaScript Calculator',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['html', 'css', 'javascript', 'react']
  },
];

// these projects will be revealed after clicking show more projects
export const moreProjects = [
  {
    name: 'Meteorite Landings with D3.js',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['javascript', 'D3.js', 'Webpack\u00a02'],
    gitLink: 'https://github.com/libeja/d3-meteorite-landings',
    liveLink: 'https://libeja.github.io/d3-meteorite-landings/'
  },
  {
    name: 'Heatmap with D3.js',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['javascript', 'D3.js', 'Webpack\u00a022'],
    gitLink: 'https://github.com/libeja/d3-heat-map',
    liveLink: 'https://libeja.github.io/d3-heat-map/'
  },
  {
    name: 'Timestamp Microservice',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/timestamp-microservice',
    liveLink: 'https://fcc-timestamper-ms.herokuapp.com/'
  },
  {
    name: 'Request Header Parser Microservice',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/req-header-parser-ms',
    liveLink: 'https://req-header-ms.herokuapp.com/'
  },
  {
    name: 'Scatterplot Graph with D3.js',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/d3-scatterplot-graph',
    liveLink: 'https://libeja.github.io/d3-scatterplot-graph/'
  },
  {
    name: 'Force Directed Graph with D3.js',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/d3-force-directed-graph',
    liveLink: 'https://libeja.github.io/d3-force-directed-graph/'
  },
];