const assetsDirectory = './assets/';

// default projects shown on front page
export const showcaseProjects = [
  {
    name: 'Tic Tac Toe',
    img: require(assetsDirectory + 'tic-tac-toe.png'),
    techList: ['html', 'css', 'javascript']
  },
  {
    name: 'Dungeon Crawler',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['html', 'css', 'javascript', 'react']
  },
  {
    name: 'Chore Chart',
    img: require(assetsDirectory + 'chore-chart.png'),
    techList: ['html', 'css', 'javascript', 'react', 'redux'],
    gitLink: 'https://github.com/libeja/chore-chart',
    liveLink: 'https://libeja.github.io/chore-chart/'
  },
  {
    name: 'Game of Life',
    img: require(assetsDirectory + 'game-of-life.png'),
    techList: ['html', 'css', 'javascript', 'react']
  },
  {
    name: 'Simon',
    img: require(assetsDirectory + 'simon.png'),
    techList: ['html', 'css', 'javascript']
  },
  {
    name: 'JavaScript Calculator',
    img: require(assetsDirectory + 'js-calculator.png'),
    techList: ['html', 'css', 'javascript', 'react']
  },
];

// these projects will be revealed after clicking show more projects
export const moreProjects = [
  {
    name: 'Meteorite Landings with D3.js',
    img: require(assetsDirectory + 'meteorite-landings.png'),
    techList: ['javascript', 'D3.js', 'Webpack\u00a02'],
    gitLink: 'https://github.com/libeja/d3-meteorite-landings',
    liveLink: 'https://libeja.github.io/d3-meteorite-landings/'
  },
  {
    name: 'Heatmap with D3.js',
    img: require(assetsDirectory + 'heat-map.png'),
    techList: ['javascript', 'D3.js', 'Webpack\u00a022'],
    gitLink: 'https://github.com/libeja/d3-heat-map',
    liveLink: 'https://libeja.github.io/d3-heat-map/'
  },
  {
    name: 'Timestamp Microservice',
    img: require(assetsDirectory + 'timestamp.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/timestamp-microservice',
    liveLink: 'https://fcc-timestamper-ms.herokuapp.com/'
  },
  {
    name: 'Request Header Parser Microservice',
    img: require(assetsDirectory + 'req-header.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/req-header-parser-ms',
    liveLink: 'https://req-header-ms.herokuapp.com/'
  },
  {
    name: 'Scatterplot Graph with D3.js',
    img: require(assetsDirectory + 'scatterplot.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/d3-scatterplot-graph',
    liveLink: 'https://libeja.github.io/d3-scatterplot-graph/'
  },
  {
    name: 'Force Directed Graph with D3.js',
    img: require(assetsDirectory + 'force-directed-graph.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/d3-force-directed-graph',
    liveLink: 'https://libeja.github.io/d3-force-directed-graph/'
  },
  {
    name: 'Recipe Box',
    img: require(assetsDirectory + 'recipe-box.png'),
    techList: ['javascript', 'react', 'redux'],
    gitLink: 'https://github.com/libeja/recipe-box',
    liveLink: 'https://libeja.github.io/recipe-box/'
  },
];