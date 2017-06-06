const assetsDirectory = './assets/';

// default projects shown on front page
export const showcaseProjects = [
  {
    name: 'PinBored',
    img: require(assetsDirectory + 'pinbored.png'),
    techList: ['html', 'css', 'javascript', 'react', 'react router', 'mongoDB', 'node', 'express'],
    gitLink: 'https://github.com/libeja/pinbored',
    liveLink: 'https://pinbored.herokuapp.com/',
    description: 'Final full stack application for freeCodeCamp\'s back end certification. Pin and like images' + 
    ' to a multi-user communal board. Authenticates with Twitter.'
  },
  {
    name: 'The Voting Booth',
    img: require(assetsDirectory + 'voting-booth.png'),
    techList: ['html', 'css', 'javascript', 'react', 'react router', 'mongoDB', 'node', 'express'],
    gitLink: 'https://github.com/libeja/voting-app',
    liveLink: 'https://fcc-voting-booth.herokuapp.com/',
    description: 'Create polls that other users can vote on.'
  },
  {
    name: 'The Book Club',
    img: require(assetsDirectory + 'bookclub.png'),
    techList: ['html', 'css', 'javascript', 'react', 'react router', 'mongoDB', 'node', 'express'],
    gitLink: 'https://github.com/libeja/book-trading-club',
    liveLink: 'https://the-book-club.herokuapp.com/',
    description: 'Full stack app. Trade books with other users. Created custom login and authentication'
  },
  {
    name: 'Nightlife Coordination App',
    img: require(assetsDirectory + 'nightlife.png'),
    techList: ['html', 'css', 'javascript', 'react', 'mongoDB', 'node', 'express'],
    gitLink: 'https://github.com/libeja/nightlife-coordination',
    liveLink: 'https://fcc-nightlife-app-jay.herokuapp.com/',
    description: 'Select locations you will be attending. See how many users are going to different locations.'
  },
  {
    name: 'Chart the Market',
    img: require(assetsDirectory + 'stocks.png'),
    techList: ['html', 'css', 'javascript', 'react', 'mongoDB', 'node', 'express', 'socket.io'],
    gitLink: 'https://github.com/libeja/stocks',
    liveLink: 'https://fcc-chart-the-stockmarket.herokuapp.com/',
    description: 'Fullstack project updated in real-time using socket.io.'
  },
  {
    name: 'Dungeon Crawler Game',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['html', 'css', 'javascript', 'react'],
    gitLink: 'https://github.com/libeja/dungeon-crawler',
    liveLink: 'https://libeja.github.io/dungeon-crawler/',
    description: 'Rogue-like adventure inspired game. Collect items and defeat the boss.'
  },
  {
    name: 'Game of Life',
    img: require(assetsDirectory + 'game-of-life.png'),
    techList: ['html', 'css', 'javascript', 'react'],
    gitLink: 'https://github.com/libeja/game-of-life',
    liveLink: 'https://libeja.github.io/game-of-life/',
    description: 'Simple life simulation based on John Conway\'s Game of Life.'
  },
  {
    name: 'Simon',
    img: require(assetsDirectory + 'simon.png'),
    techList: ['html', 'css', 'javascript'],
    gitLink: 'https://github.com/libeja/simon',
    liveLink: 'https://libeja.github.io/simon/',
    description: 'Recreation of the elecronic Simon Game.'
  },
  {
    name: 'Tic Tac Toe',
    img: require(assetsDirectory + 'tic-tac-toe.png'),
    techList: ['html', 'css', 'javascript'],
    gitLink: 'http://codepen.io/jugglnaut/pen/aBjBWZ',
    liveLink: 'http://codepen.io/jugglnaut/full/aBjBWZ/',
    description: 'Player plays agains custom built AI opponent.'
  },
  {
    name: 'Recipe Box',
    img: require(assetsDirectory + 'recipe-box.png'),
    techList: ['javascript', 'react', 'redux'],
    gitLink: 'https://github.com/libeja/recipe-box',
    liveLink: 'https://libeja.github.io/recipe-box/',
    description: 'An app created with React.js and Redux that uses localStorage to store state. '
    + 'A user can enter, edit, or delete recipes.'
  }
];

// these projects will be revealed after clicking show more projects
export const moreProjects = [
  {
    name: 'File Metadata Microservice',
    img: require(assetsDirectory + 'file-metadata.png'),
    techList: ['javascript', 'react', 'node', 'express'],
    gitLink: 'https://github.com/libeja/file-metadata-ms',
    liveLink: 'https://file-sizer-fcc.herokuapp.com/',
    description: 'Node/Express app that accepts a file and returns the size of the file in JSON format'
  },
  {
    name: 'Image Search Abstraction Layer',
    img: require(assetsDirectory + 'image-search.png'),
    techList: ['javascript', 'react', 'node', 'express', 'mongoDB'],
    gitLink: 'https://github.com/libeja/image-search',
    liveLink: 'https://fccapi-imagesearch.herokuapp.com/',
    description: 'This API microservice will shorten a valid URL. The shortened URLs are stored in a MongoDB database. '
    + 'Use API endpoints to redirect to URLS'
  },
  {
    name: 'Markdown Previewer',
    img: require(assetsDirectory + 'markdown-previewer.png'),
    techList: ['javascript', 'react'],
    gitLink: 'https://github.com/libeja/markdown-previewer',
    liveLink: 'https://libeja.github.io/markdown-previewer/',
    description: 'Type text with Markdown syntax in one pane, and see it converted in real-time to '
    + 'HTML in a second pane. Built with React.'
  },
  {
    name: 'JavaScript Calculator',
    img: require(assetsDirectory + 'js-calculator.png'),
    techList: ['html', 'css', 'javascript', 'react'],
    gitLink: 'https://github.com/libeja/JavaScript-Calculator',
    liveLink: 'http://codepen.io/jugglnaut/full/zoqpKp/',
    description: 'Functioning calculator built with JavaScript'
  },
  {
    name: 'Pomodoro Timer',
    img: require(assetsDirectory + 'pomodoro.png'),
    techList: ['javascript', 'html', 'css'],
    gitLink: 'http://codepen.io/jugglnaut/pen/VmzdpK',
    liveLink: 'http://codepen.io/jugglnaut/full/VmzdpK/',
    description: 'A productivity timer that alternates between focus and break sessions.'
  },
  {
    name: 'Meteorite Landings with D3.js',
    img: require(assetsDirectory + 'meteorite-landings.png'),
    techList: ['javascript', 'D3', 'Webpack\u00a02'],
    gitLink: 'https://github.com/libeja/d3-meteorite-landings',
    liveLink: 'https://libeja.github.io/d3-meteorite-landings/',
    description: 'D3 visualization of meteorite landings across the globe using geojson and topojson data.'
  },
  {
    name: 'Heatmap with D3.js',
    img: require(assetsDirectory + 'heat-map.png'),
    techList: ['javascript', 'D3', 'Webpack\u00a02'],
    gitLink: 'https://github.com/libeja/d3-heat-map',
    liveLink: 'https://libeja.github.io/d3-heat-map/',
    description: 'Request JSON data containing the global land-surface temperature from 1753 - 2015.' 
      + 'Shows variance on a chromatic scale.'
  },
  {
    name: 'URL Shortening Microservice',
    img: require(assetsDirectory + 'url-shortener.png'),
    techList: ['javascript', 'react', 'node', 'express', 'mongoDB'],
    gitLink: 'https://github.com/libeja/url-shortener',
    liveLink: 'https://urlshorten-fcc.herokuapp.com/',
    description: 'This API microservice will shorten a valid URL. The shortened URLs are stored in a MongoDB database.'
  },
  {
    name: 'Timestamp Microservice',
    img: require(assetsDirectory + 'timestamp.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/timestamp-microservice',
    liveLink: 'https://fcc-timestamper-ms.herokuapp.com/',
    description: 'API endpoint that accepts a string or Unix '
      + 'timestamp and returns a date in both string and Unix timestamp format as a JSON object.'
  },
  {
    name: 'Request Header Parser Microservice',
    img: require(assetsDirectory + 'req-header.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/req-header-parser-ms',
    liveLink: 'https://req-header-ms.herokuapp.com/',
    description: 'API endpoint that parses client header information and returns the parsed information as a JSON object.'
  },
  {
    name: 'Scatterplot Graph with D3.js',
    img: require(assetsDirectory + 'scatterplot.png'),
    techList: ['javascript', 'react', 'fullstack', 'D3'],
    gitLink: 'https://github.com/libeja/d3-scatterplot-graph',
    liveLink: 'https://libeja.github.io/d3-scatterplot-graph/',
    description: '2 dimensional data visualization of Tour de France doping allegations vs. finishing time.'
  },
  {
    name: 'Force Directed Graph with D3.js',
    img: require(assetsDirectory + 'force-directed-graph.png'),
    techList: ['javascript', 'react', 'fullstack', 'D3'],
    gitLink: 'https://github.com/libeja/d3-force-directed-graph',
    liveLink: 'https://libeja.github.io/d3-force-directed-graph/',
    description: 'App makes an AJAX request and visualizes JSON as a force-directed graph to show national contiguity'
  },
  {
    name: 'Bar Chart with D3.js',
    img: require(assetsDirectory + 'bar-chart.png'),
    techList: ['javascript', 'react', 'D3'],
    gitLink: 'https://github.com/libeja/d3-bar-chart',
    liveLink: 'https://libeja.github.io/d3-bar-chart/',
    description: 'App makes an AJAX request for JSON data from the Federal Reserve Economic Data and ' 
      + 'then visualizes that data using D3.js.'
  },
  {
    name: 'Random Quote Machine',
    img: require(assetsDirectory + 'random-quote-machine.png'),
    techList: ['javascript', 'html', 'css'],
    gitLink: 'http://codepen.io/jugglnaut/pen/rrOPxY/',
    liveLink: 'http://codepen.io/jugglnaut/full/rrOPxY/',
    description: 'App generates a random quote from received AJAX request from the forismatic API. ' 
      + 'User can request more, and tweet the quotes.'
  },
  {
    name: 'Wikipedia Viewer',
    img: require(assetsDirectory + 'wikipedia-viewer.png'),
    techList: ['javascript', 'html', 'css'],
    gitLink: 'http://codepen.io/jugglnaut/pen/GjWVdg',
    liveLink: 'http://codepen.io/jugglnaut/full/GjWVdg/',
    description: 'Utilized Wikipedia’s API to search for Wikipedia articles and display within the interface.'
  },
  {
    name: 'Twitch.tv JSON API',
    img: require(assetsDirectory + 'twitch-api.png'),
    techList: ['javascript', 'html', 'css'],
    gitLink: 'https://codepen.io/jugglnaut/pen/PGRqQB',
    liveLink: 'https://codepen.io/jugglnaut/full/PGRqQB',
    description: 'Use the Twitch API to see which users are currently streaming.'
  },
  {
    name: 'Local Weather',
    img: require(assetsDirectory + 'local-weather.png'),
    techList: ['javascript', 'html', 'css'],
    gitLink: 'http://codepen.io/jugglnaut/pen/QKEPRR',
    liveLink: 'http://codepen.io/jugglnaut/full/QKEPRR/',
    description: 'Requests weather data from OpenWeatherMap\'s API and displays the local weather based on client location.'
  },
];