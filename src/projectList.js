const assetsDirectory = './assets/';

const projectList = [
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

export default projectList;