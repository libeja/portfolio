const assetsDirectory = './assets/';

// default projects shown on front page
export const showcaseProjects = [
  {
    name: 'PinBored',
    projectUrl: 'pinbored',
    img: require(assetsDirectory + 'pinbored.png'),
    techList: ['html', 'css', 'javascript', 'react', 'react router', 'mongoDB', 'node', 'express'],
    gitLink: 'https://github.com/libeja/pinbored',
    liveLink: 'https://pinbored.herokuapp.com/',
    description: 'Final full stack application for freeCodeCamp\'s back end certification. Pin and like images' + 
    ' to a multi-user communal board. Authenticates with Twitter.',
    longDescription: [
      'This project uses authentication strategy with Passport.js that allows users to sign in. The database was organized with a User and Pin Mongoose model. The pin record in the database contains an array that holds all the users that have liked that pin. The client uses this array to count likes, and to see if the current user has already liked that particular pin.',
      "One challenge I ran into with this project included trouble shooting someone else's library when I did not fully understand it's implementation. I used Masonry.js in order to create a Pinterest style layout that automatically places pins to maximize pin density. I noticed an issue for pins that loaded the broken link image. I had the client handle broken images, through the React <Pin> component. The component will inject the broken image jpeg when the <img> receives an error. The problem that occurred was Masonry was arranging the pin before it had it's final size.To fix this issue, I ensured that each pin had minimum dimensions.",
    ],
    userStories: [
      'As an unauthenticated user, I can login with Twitter.',
      'As an authenticated user, I can link to images.',
      'As an authenticated user, I can delete images that I\'ve linked to.',
      'As an authenticated user, I can see a Pinterest-style wall of all the images I\'ve linked to.',
      'As an unauthenticated user, I can browse other users\' walls of images.',
      'As an authenticated user, if I upload an image that is broken, it will be replaced by a placeholder image.'
    ]
  },
  {
    name: 'The Voting Booth',
    projectUrl: 'voting-booth',
    img: require(assetsDirectory + 'voting-booth.png'),
    techList: ['html', 'css', 'javascript', 'react', 'react router', 'mongoDB', 'node', 'express'],
    gitLink: 'https://github.com/libeja/voting-app',
    liveLink: 'https://fcc-voting-booth.herokuapp.com/',
    description: 'Full stack application that allows authenticated users to create custom polls that any user can vote on.',
    longDescription: [
      "This full stack application allows all users to view and vote on all polls posted by registered users. Users must sign up and sign in in order to create a poll. Passport.js was used to implement a local strategy of authentication where a users information was stored in a remote database (MongoDB). Passwords are encrypted using bcrypt before saving into the database.",
      "The results of the polls are visualized as a pie chart using the <a target='_blank' href='http://www.chartjs.org/'>Chart.js</a> library. The front end was built with React. The Rest API was build with Express/Node.js"
    ],
    userStories: [
      "As an authenticated user, I can keep my polls and come back later to access them.",
      "As an authenticated user, I can share my polls with my friends.",
      "As an authenticated user, I can see the aggregate results of my polls.",
      "As an authenticated user, I can delete polls that I decide I don't want anymore.",
      "As an authenticated user, I can create a poll with any number of possible items.",
      "As an unauthenticated or authenticated user, I can see and vote on everyone's polls.",
      "As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)"
    ]
  },
  {
    name: 'The Book Club',
    projectUrl: 'book-club',
    img: require(assetsDirectory + 'bookclub.png'),
    techList: ['html', 'css', 'javascript', 'react', 'react router', 'mongoDB', 'node', 'express'],
    gitLink: 'https://github.com/libeja/book-trading-club',
    liveLink: 'https://the-book-club.herokuapp.com/',
    description: 'Full stack app. Trade books with other users. Created custom login and authentication',
    longDescription: [
      "This full stack application was written using React, React Router, Express, Node, and MongoDb",
      "Users can see all books in every user's collection and see whether there is a pending trade on that book. If a user is authenticated, the user can request a trade. When the other user accepts the trade, the ownership of the book swithes to the requestee. An authenticated user can view a small dashboard of all incoming and outgoing requests.",
      "I pulled out all of the api logic from the components into it's own module that exports an object with methods that handle the specific api calls. This helped make the components that made calls to the server much more readable."
    ],
    userStories: [
      "I can view all books posted by every user.",
      "I can add a new book.",
      "I can update my settings to store my full name, city, and state.",
      "I can propose a trade and wait for the other user to accept the trade."
    ]
  },
  {
    name: 'Chore Chart',
    projectUrl: 'chorechart',
    img: require(assetsDirectory + 'chore-chart.png'),
    techList: ['html', 'css', 'javascript', 'react', 'redux'],
    gitLink: 'https://github.com/libeja/chore-chart',
    liveLink: 'https://libeja.github.io/chore-chart/',
    description: 'Final Project for CS50. A chore tracker for housemates.',
    longDescription: [
      "The idea was based on a system I came up with (although I may not have been the first), as a way to decide whose turn it was to do a particular chore. Whenever someone completes a chore, they put a marker next to the chore. Each person can only place one marker next to each chore. The remaining housemates then perform the chore the next time. The last person to not have done any particular chore must then complete that chore. When all housemates have completed the chore, the list resets. This ensures that everyone does the chore at least once per cycle without enforcing the particular time that someone must do it.",
      "The app was implemented using React.js as the view library and Redux for data architecture. There is no backend, and data is persisted via local storage. The user selection box is meant to simulate who is currently logged into the system.",
      "There are 3 main areas to the app:<ol><li>The main screen which shows a brief summary of which chores the current user hasn't completed yet for the current cycle.</li><li>The chore chart lists the chores in a table-like format. By clicking the 'complete' button, the person who is currently 'logged in' will have their token placed next to the chore, indicating that they have completed that chore for the current cycle.</li><li>The settings screen allows a user to add housemates, chores and to edit both records. There is also a delete user data option which clears the Redux store and localStorage.</li></ol>",
      "Some additional implementation notes:<ul><li>Implemented my own modals dialogue boxes</li><li>Used flexbox to create responsive elements and components</li><li>Utilized localStorage to maintain perpetual state</li></ul>"
    ],
    userStories: [
      "This project must draw on the course's lessons. The nature of the project is entirely up to the student",
      "You may implement your project in any language(s).",
      "All that we ask is that you build something of interest to you, that you solve an actual problem, that you impact your community, or that you change the world."
    ]
  },
  {
    name: 'Dungeon Crawler Game',
    projectUrl: 'dungeon-crawler',
    img: require(assetsDirectory + 'dungeon-crawler.png'),
    techList: ['html', 'css', 'javascript', 'react'],
    gitLink: 'https://github.com/libeja/dungeon-crawler',
    liveLink: 'https://libeja.github.io/dungeon-crawler/',
    description: 'Rogue-like adventure inspired game. Collect items and defeat the boss.',
    longDescription: [
      "A random dungeon is created and the player must collect weapons and armor to become stronger in order to beat the enemies. The player gets stronger when leveling up. The boss is hidden in one room that is locked with a key the player must find somewhere in the dungeon.",
      "One of the more challenging aspects of this project was coming up with the algorithm that generates the dungeon.",
      "\"To understand recursion, you must first understand recursion.\"",
      "It was through coming up with an algorithm that randomly generates a dungeon that I deeply learned how utilize recursion for my own purposes. The algorithm first places the boss room, and then chooses a direction at random (north, south, east, west) to begin building off of the rooms. Since I wanted only one room leading to the boss room, there is only one offshoot. After that, the offshoots can range from 1-3 rooms. If there is enough room for another room, the process is repeated until either a wall is hit, or another room is encountered, at which point the algorithm recurses back and performs the same process with the next recently created room. Once the dungeon is built, the amount of hollowed out space is counted, and if it is too small, the process begins again.",
      "The visualization was implemented using React. The game board is represented using a 2 dimensional array. A second array which stores whether the area has been discovered or not is consulted when displaying in order to simulate the \"fog of war\" effect."
    ],
    userStories: [
      "I have health, a level, and a weapon. I can pick up a better weapon. I can pick up health items.",
      "All the items and enemies on the map are arranged at random.",
      "I can move throughout a map, discovering items.",
      "I can move anywhere within the map's boundaries, but I can't move through an enemy until I've beaten it.",
      "Much of the map is hidden. When I take a step, all spaces that are within a certain number of spaces from me are revealed.",
      "When I beat an enemy, the enemy goes away and I get XP, which eventually increases my level.",
      "When I fight an enemy, we take turns damaging each other until one of us loses. I do damage based off of my level and my weapon. The enemy does damage based off of its level. Damage is somewhat random within a range.",
      "When I find and beat the boss, I win.",
      "The game should be challenging, but theoretically winnable."
    ]
  },
  {
    name: 'Nightlife Coordination App',
    projectUrl: 'nightlife',
    img: require(assetsDirectory + 'nightlife.png'),
    techList: ['html', 'css', 'javascript', 'react', 'mongoDB', 'node', 'express'],
    gitLink: 'https://github.com/libeja/nightlife-coordination',
    liveLink: 'https://fcc-nightlife-app-jay.herokuapp.com/',
    description: 'Select locations you will be attending. See how many users are going to different locations.',
    longDescription: [

    ],
    userStories: [
      "As an unauthenticated user, I can view all bars in my area.",
      "As an authenticated user, I can add myself to a bar to indicate I am going there tonight.",
      "As an authenticated user, I can remove myself from a bar if I no longer want to go there.",
      "As an unauthenticated user, when I login I should not have to search again."
    ]
  },
  {
    name: 'Game of Life',
    projectUrl: 'game-of-life',
    img: require(assetsDirectory + 'game-of-life.png'),
    techList: ['html', 'css', 'javascript', 'react'],
    gitLink: 'https://github.com/libeja/game-of-life',
    liveLink: 'https://libeja.github.io/game-of-life/',
    description: 'Simple life simulation based on John Conway\'s Game of Life.',
    longDescription: [
      "Here's an explanation of Conway's Game of Life from John Conway himself: <a target='_blank' href='https://www.youtube.com/watch?v=E8kUJL04ELA'>youtube video</a>",
      "Here is the description and rules of the simulation from <a target='_blank' href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'>wikipedia</a>:",
      "The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead, or \"populated\" or \"unpopulated\". Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:<ul><li>Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.</li><li>Any live cell with two or three live neighbours lives on to the next generation.</li><li>Any live cell with more than three live neighbours dies, as if by overpopulation.</li><li>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.<li>The initial pattern constitutes the seed of the system. The first generation is created by applying the above rules simultaneously to every cell in the seed—births and deaths occur simultaneously, and the discrete moment at which this happens is sometimes called a tick (in other words, each generation is a pure function of the preceding one). The rules continue to be applied repeatedly to create further generations.</li></li></ul>"
    ],
    userStories: [
      "When I first arrive at the game, it will randomly generate a board and start playing.",
      " I can start and stop the board.",
      "I can set up the board.",
      "I can clear the board.",
      "When I press start, the game will play out.",
      "Each time the board changes, I can see how many generations have gone by."
    ]
  },
  {
    name: 'Simon',
    projectUrl: 'simon',
    img: require(assetsDirectory + 'simon.png'),
    techList: ['html', 'css', 'javascript'],
    gitLink: 'https://github.com/libeja/simon',
    liveLink: 'https://libeja.github.io/simon/',
    description: 'Recreation of the elecronic Simon Game.',
    longDescription: [
      "This project was the final advanced front end project for the freeCodeCamp front end certificaiton. It is a recreation of the classic electronic simon game from Milton Bradly. It fully mimics the original game's functionality and can be played in two different modes: normal and strict. In strict mode, any mistake will reset the game back to the first round.",
      "The player wins upon reaching round 20."
    ],
    userStories: [
      "I am presented with a random series of button presses.",
      "Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.",
      "I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.",
      "If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.",
      "I can see how many steps are in the current series of button presses.",
      "If I want to restart, I can hit a button to do so, and the game will return to a single step.",
      "I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.",
      "I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over."
    ]
  },
  {
    name: 'Tic Tac Toe',
    projectUrl: 'tic-tac-toe',
    img: require(assetsDirectory + 'tic-tac-toe.png'),
    techList: ['html', 'css', 'javascript'],
    gitLink: 'http://codepen.io/jugglnaut/pen/aBjBWZ',
    liveLink: 'http://codepen.io/jugglnaut/full/aBjBWZ/',
    description: 'A recreation of a classic game. Play against a custom built AI opponent.',
    longDescription: [
      "A recreation of the classic game. Player plays against computer AI opponent. The player chooses their marker and who goes first.", 
      "The algorithm was designed by first having the computer go through all possible moves that would win in one move, followed by two moves, etc. If the player is going to win in the next turn, the computer plays defensively. After much playtesting, it was discovered that there were several edge cases where the player can win. Defense against these edge cases were hard coded into the algorithm.",
      "I used this project to focus on using css animations when placing markers and drawing winning lines and explored animations and transitions using bezier curve functions."
    ],
    userStories: [
      "I can play a game of Tic Tac Toe with the computer.",
      "My game will reset as soon as it's over so I can play again.",
      "I can choose whether I want to play as X or O."
    ]
  },
  {
    name: 'Chart the Market',
    projectUrl: 'stocks',
    img: require(assetsDirectory + 'stocks.png'),
    techList: ['html', 'css', 'javascript', 'react', 'mongoDB', 'node', 'express', 'socket.io'],
    gitLink: 'https://github.com/libeja/stocks',
    liveLink: 'https://fcc-chart-the-stockmarket.herokuapp.com/',
    description: 'Full stack multi-user application updated in real-time using Websockets and socket.io.',
    longDescription: [
      "One of the main focuses of this project was to use Websockets to create real-time two-way communication between multiple clients and server. I utilized socket.io implementation of Websockets. Utilizing socket.io emit functionality allowed me to broadcast any change on the server to all connected users. In this way I was able have the server, which was connected to the MongoDB update all users in real-time.",
      "The <a target='_blank' href='https://www.highcharts.com/'>Highcharts</a> library was used to visualize the stock data.",
      "One challenge that occured after this project was completed was that the yahoo stocks API stopped working. I then had to swap out the npm module that used that API for one that utilized google stocks. This required remapping many components since the received JSON data was not in a different format."
    ],
    userStories: [
      "I can view a graph displaying the recent trend lines for each added stock.",
      "I can add new stocks by their symbol name.",
      "I can remove stocks.",
      " can see changes in real-time when any other user adds or removes a stock. For this you will need to use Web Sockets."
    ]
  }
];

// these projects will be revealed after clicking show more projects
export const moreProjects = [
  {
    name: 'Recipe Box',
    projectUrl: 'recipe-box',
    img: require(assetsDirectory + 'recipe-box.png'),
    techList: ['javascript', 'react', 'redux'],
    gitLink: 'https://github.com/libeja/recipe-box',
    liveLink: 'https://libeja.github.io/recipe-box/',
    description: 'An app created with React.js and Redux that uses localStorage to store state. '
    + 'A user can enter, edit, or delete recipes.',
    longDescription: [
    ],
    userStories: [
      "I can create recipes that have names and ingredients.",
      "I can see an index view where the names of all the recipes are visible.",
      "I can click into any of those recipes to view it.",
      "I can edit these recipes.",
      "I can delete these recipes.",
      "All new recipes I add are saved in my browser's local storage. If I refresh the page, these recipes will still be there."
    ]
  },
  {
    name: 'File Metadata Microservice',
    projectUrl: 'file-metadata-ms',
    img: require(assetsDirectory + 'file-metadata.png'),
    techList: ['javascript', 'react', 'node', 'express'],
    gitLink: 'https://github.com/libeja/file-metadata-ms',
    liveLink: 'https://file-sizer-fcc.herokuapp.com/',
    description: 'Node/Express app that accepts a file and returns the size of the file in JSON format',
    longDescription: [

    ],
    userStories: [
      "I can submit a FormData object that includes a file upload.",
      "When I submit something, I will receive the file size in bytes within the JSON response"
    ]
  },
  {
    name: 'Image Search Abstraction Layer',
    projectUrl: 'image-search-ms',
    img: require(assetsDirectory + 'image-search.png'),
    techList: ['javascript', 'react', 'node', 'express', 'mongoDB'],
    gitLink: 'https://github.com/libeja/image-search',
    liveLink: 'https://fccapi-imagesearch.herokuapp.com/',
    description: 'This API microservice will shorten a valid URL. The shortened URLs are stored in a MongoDB database. '
    + 'Use API endpoints to redirect to URLS',
    longDescription: [

    ],
    userStories: [
      "I can get the image URLs, alt text and page urls for a set of images relating to a given search string.",
      "I can paginate through the responses by adding a ?offset=2 parameter to the URL.",
      "I can get a list of the most recently submitted search strings."
    ]
  },
  {
    name: 'Markdown Previewer',
    projectUrl: 'markdown-previewer',
    img: require(assetsDirectory + 'markdown-previewer.png'),
    techList: ['javascript', 'react'],
    gitLink: 'https://github.com/libeja/markdown-previewer',
    liveLink: 'https://libeja.github.io/markdown-previewer/',
    description: 'Type text with Markdown syntax in one pane, and see it converted in real-time to '
    + 'HTML in a second pane. Built with React.',
    longDescription: [

    ],
    userStories: [
      "I can type GitHub-flavored Markdown into a text area.",
      "I can see a preview of the output of my markdown that is updated as I type."
    ]
  },
  {
    name: 'JavaScript Calculator',
    projectUrl: 'javascript-calc',
    img: require(assetsDirectory + 'js-calculator.png'),
    techList: ['html', 'css', 'javascript', 'react'],
    gitLink: 'https://github.com/libeja/JavaScript-Calculator',
    liveLink: 'http://codepen.io/jugglnaut/full/zoqpKp/',
    description: 'Functioning calculator built with JavaScript',
    longDescription: [

    ],
    userStories: [
      "I can add, subtract, multiply and divide two numbers.",
      "I can clear the input field with a clear button.",
      "I can keep chaining mathematical operations together until I hit the equal button, and the calculator will tell me the correct output."
    ]
  },
  {
    name: 'Pomodoro Timer',
    projectUrl: 'pomodoro-timer',
    img: require(assetsDirectory + 'pomodoro.png'),
    techList: ['javascript', 'html', 'css'],
    gitLink: 'http://codepen.io/jugglnaut/pen/VmzdpK',
    liveLink: 'http://codepen.io/jugglnaut/full/VmzdpK/',
    description: 'A productivity timer that alternates between focus and break sessions.',
    longDescription: [

    ],
    userStories: [
      "I can start a 25 minute pomodoro, and the timer will go off once 25 minutes has elapsed.",
      "I can reset the clock for my next pomodoro.",
      "I can customize the length of each pomodoro.",
    ]
  },
  {
    name: 'Meteorite Landings with D3.js',
    projectUrl: 'd3-meteorite',
    img: require(assetsDirectory + 'meteorite-landings.png'),
    techList: ['javascript', 'D3', 'Webpack\u00a02'],
    gitLink: 'https://github.com/libeja/d3-meteorite-landings',
    liveLink: 'https://libeja.github.io/d3-meteorite-landings/',
    description: 'D3 visualization of meteorite landings across the globe using geojson and topojson data.',
    longDescription: [
      "This project displays a visualization of meteorite landings across the globe using the <a href='https://d3js.org/' target='_blank' D3.js data visualization library's geographic path generator and using geojson and topojson data. The radius and color of the circles visualizes the mass of the meteorite.",
      "Hovering over each landing will display additional information about the meteorite. You can zoom and pan the map."
    ],
    userStories: [
      "I can see where all Meteorites landed on a world map",
      "I can tell the relative size of the meteorite, just by looking at the way it's represented on the map",
      "I can mouse over the meteorite's data point for additional data"
    ]
  },
  {
    name: 'Heatmap with D3.js',
    projectUrl: 'd3-heatmap',
    img: require(assetsDirectory + 'heat-map.png'),
    techList: ['javascript', 'D3', 'Webpack\u00a02'],
    gitLink: 'https://github.com/libeja/d3-heat-map',
    liveLink: 'https://libeja.github.io/d3-heat-map/',
    description: 'Request JSON data containing the global land-surface temperature from 1753 - 2015.' 
      + 'Shows variance on a chromatic scale.',
    longDescription: [

    ],
    userStories: [
      "I can see where all Meteorites landed on a world map.",
      "I can tell the relative size of the meteorite, just by looking at the way it's represented on the map.",
      "I can mouse over the meteorite's data point for additional data."
    ]
  },
  {
    name: 'URL Shortening Microservice',
    projectUrl: 'url-shortening-ms',
    img: require(assetsDirectory + 'url-shortener.png'),
    techList: ['javascript', 'react', 'node', 'express', 'mongoDB'],
    gitLink: 'https://github.com/libeja/url-shortener',
    liveLink: 'https://urlshorten-fcc.herokuapp.com/',
    description: 'This API microservice will shorten a valid URL. The shortened URLs are stored in a MongoDB database.',
    longDescription: [

    ],
    userStories: [
      "I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.",
      "If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.",
      "When I visit that shortened URL, it will redirect me to my original link."
    ]
  },
  {
    name: 'Timestamp Microservice',
    projectUrl: 'timestamp-ms',
    img: require(assetsDirectory + 'timestamp.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/timestamp-microservice',
    liveLink: 'https://fcc-timestamper-ms.herokuapp.com/',
    description: 'API endpoint that accepts a string or Unix '
      + 'timestamp and returns a date in both string and Unix timestamp format as a JSON object.',
    longDescription: [

    ],
    userStories: [
      "I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).",
      "If it does, it returns both the Unix timestamp and the natural language form of that date.",
      "If it does not contain a date or Unix timestamp, it returns null for those properties."
    ]
  },
  {
    name: 'Request Header Parser Microservice',
    projectUrl: 'request-header-parser-ms',
    img: require(assetsDirectory + 'req-header.png'),
    techList: ['javascript', 'react', 'fullstack'],
    gitLink: 'https://github.com/libeja/req-header-parser-ms',
    liveLink: 'https://req-header-ms.herokuapp.com/',
    description: 'API endpoint that parses client header information and returns the parsed information as a JSON object.',
    longDescription: [

    ],
    userStories: [
      "I can get the IP address, language and operating system for my browser."
    ]
  },
  {
    name: 'Scatterplot Graph with D3.js',
    projectUrl: 'd3-scatterplot',
    img: require(assetsDirectory + 'scatterplot.png'),
    techList: ['javascript', 'react', 'fullstack', 'D3'],
    gitLink: 'https://github.com/libeja/d3-scatterplot-graph',
    liveLink: 'https://libeja.github.io/d3-scatterplot-graph/',
    description: '2 dimensional data visualization of Tour de France doping allegations vs. finishing time.',
    longDescription: [

    ],
    userStories: [
      "I can see performance time visualized in a scatterplot graph.",
      "I can mouse over a plot to see a tooltip with additional details."
    ]
  },
  {
    name: 'Force Directed Graph with D3.js',
    projectUrl: 'd3-force-directed-graph',
    img: require(assetsDirectory + 'force-directed-graph.png'),
    techList: ['javascript', 'react', 'fullstack', 'D3'],
    gitLink: 'https://github.com/libeja/d3-force-directed-graph',
    liveLink: 'https://libeja.github.io/d3-force-directed-graph/',
    description: 'App makes an AJAX request and visualizes JSON as a force-directed graph to show national contiguity',
    longDescription: [

    ],
    userStories: [
      "I can see a Force-directed Graph that shows which countries share borders.",
      "I can see each country's flag on its node."
    ]
  },
  {
    name: 'Bar Chart with D3.js',
    projectUrl: 'd3-barchart',
    img: require(assetsDirectory + 'bar-chart.png'),
    techList: ['javascript', 'react', 'D3'],
    gitLink: 'https://github.com/libeja/d3-bar-chart',
    liveLink: 'https://libeja.github.io/d3-bar-chart/',
    description: 'App makes an AJAX request for JSON data from the Federal Reserve Economic Data and ' 
      + 'then visualizes that data using D3.js.',
    longDescription: [

    ],
    userStories: [
      "I can see US Gross Domestic Product by quarter, over time.",
      "I can mouse over a bar and see a tooltip with the GDP amount and exact year and month that bar represents."
    ]
  },
  {
    name: 'Random Quote Machine',
    projectUrl: 'random-quote-machine',
    img: require(assetsDirectory + 'random-quote-machine.png'),
    techList: ['javascript', 'html', 'css'],
    gitLink: 'http://codepen.io/jugglnaut/pen/rrOPxY/',
    liveLink: 'http://codepen.io/jugglnaut/full/rrOPxY/',
    description: 'App generates a random quote from received AJAX request from the forismatic API. ' 
      + 'User can request more, and tweet the quotes.',
    longDescription: [

    ],
    userStories: [
      "I can click a button to show me a new random quote.",
      "I can press a button to tweet out a quote."
    ]
  },
  {
    name: 'Wikipedia Viewer',
    projectUrl: 'wikipedia-viewer',
    img: require(assetsDirectory + 'wikipedia-viewer.png'),
    techList: ['javascript', 'html', 'css'],
    gitLink: 'http://codepen.io/jugglnaut/pen/GjWVdg',
    liveLink: 'http://codepen.io/jugglnaut/full/GjWVdg/',
    description: 'Utilized Wikipedia’s API to search for Wikipedia articles and display within the interface.',
    longDescription: [

    ],
    userStories: [
      "I can search Wikipedia entries in a search box and see the resulting Wikipedia entries.",
      "I can click a button to see a random Wikipedia entry."
    ]
  },
  {
    name: 'Twitch.tv JSON API',
    projectUrl: 'twitchtv-api',
    img: require(assetsDirectory + 'twitch-api.png'),
    techList: ['javascript', 'html', 'css'],
    gitLink: 'https://codepen.io/jugglnaut/pen/PGRqQB',
    liveLink: 'https://codepen.io/jugglnaut/full/PGRqQB',
    description: 'Use the Twitch API to see which users are currently streaming.',
    longDescription: [

    ],
    userStories: [
      "I can see whether Free Code Camp is currently streaming on Twitch.tv.",
      "I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.",
      "if a Twitch user is currently streaming, I can see additional details about what they are streaming.",
      "I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers."
    ]
  },
  {
    name: 'Local Weather',
    projectUrl: 'local-weather',
    img: require(assetsDirectory + 'local-weather.png'),
    techList: ['javascript', 'html', 'css'],
    gitLink: 'https://github.com/libeja/local-weather',
    liveLink: 'https://libeja.github.io/local-weather/index.html',
    description: 'Requests weather data from OpenWeatherMap\'s API and displays the local weather based on client location.',
    longDescription: [

    ],
    userStories: [
      "I can see the weather in my current location.",
      "I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.",
      "I can push a button to toggle between Fahrenheit and Celsius."
    ]
  },
];