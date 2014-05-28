self.addEventListener('message', function(e) {
  self.postMessage(JSON.stringify(eval(e.data)));
});

function help() {
  self.postMessage('//You can use these different fonctions');
  self.postMessage('');
  self.postMessage(' profileHelp()  // Show methods about my profile');
  self.postMessage(' socialHelp()  // Show methods about my social activity');
  self.postMessage(' resumeHelp()  // Show methods about my resume');
  self.postMessage(' log()  // Console.log or alert are not available in a web worker');
  self.postMessage('');
}

function log() {
  return arguments[0];
}

function profileHelp() {
  self.postMessage('//You can use these different methods');
  self.postMessage('');
  self.postMessage(' profile.name()  // Show my name');
  self.postMessage(' profile.eyes()  // Show the color of my eyes');
  self.postMessage(' profile.age()  // Show my age');
  self.postMessage(' profile.sports()  // Show the sports I play');
  self.postMessage(' profile.location()  // Show my current location');
  self.postMessage(' profile.nationalities()  // Show my nationalities');
  self.postMessage(' profile.languages()  // Show the languages that I can speak');
  self.postMessage(' profile.countries()  // Show the countries that I visited');
  self.postMessage(' profile.series()  // Show the series that I watch(ed)');
  self.postMessage(' profile.kdramas()  // Show the Korean series that I watch(ed)');
  self.postMessage(' profile.jdramas()  // Show the Japanese series that I watch(ed)');
  self.postMessage(' profile.mangas()  // Show the mangas that I watch(ed)/read');
  self.postMessage('');
}

var profile = {
  name: function name() {
    return 'Yacine Rezgui';
  },

  eyes: function languages() {
    return 'brown eyes';
  },

  age: function age() {
    var diff =  new Date() - new Date(1992, 3, 9);
    diff = diff / (1000 * 60 * 60 * 24 * 31 * 12); // number of milliseconds in a year

    return 'I am ' + Math.round(diff) + ' years old';
  },

  sports: function languages() {
    return ['football', 'biking', 'climbing', 'swimming'];
  },

  location: function location() {
    return 'I am living in London, UK';
  },

  nationalities: function nationalities() {
    return ['french', 'tunisian'];
  },

  languages: function languages() {
    return ['french', 'english', 'arabic'];
  },

  countries: function countries() {
    return ['France', 'United Kingdom', 'Tunisia', 'Morocco', 'Switzerland', 'Belgium', 'Italy'];
  },

  series: function series() {
    return ['24', 'Heroes', 'The Mentalist', 'Fringe', 'Game of Thrones', 'The Following', 'Continuum', 'The Big Bang Theory'];
  },

  kdramas: function kdramas() {
    return ['City Hunter', 'Secret Garden', 'Full House', 'Answer me 1997', 'You\'re All Surrounded', 'Love from another star', 'The Cyrano Agency', 'Cheongdam-dong Alice', 'Three days', 'I hear your voice', 'That Winter, the Wind Blows'];
  },

  jdramas: function jdramas() {
    return ['Unubore Deka', 'My boss, my Hero', 'GTO', 'Hana Yori Dango', 'Tiger & Dragon', 'Densha Otoko', 'Yama Onna Kabe Onna', 'Gokusen'];
  },

  mangas: function mangas() {
    return ['Dragon Ball Z', 'Captain Tsubasa', 'GTO', 'Naruto', 'Bleach', 'One Piece', 'School Rumble', 'Negima', 'Suzuka'];
  }
};



function socialHelp() {
  self.postMessage('//You can use these different methods');
  self.postMessage('');
  self.postMessage(' social.facebook()  // Show my Facebook account');
  self.postMessage(' social.twitter()  // Show my Twitter account');
  self.postMessage(' social.lastTweet()  // Show my last tweet');
  self.postMessage(' social.github()  // Show my Github account');
  self.postMessage(' social.lastGithubEvent()  // Show my last Github activity');
  self.postMessage(' social.googlePlus()  // Show my Google+ account');
  self.postMessage(' social.googlePlus()  // Show my last Google+ status');
  self.postMessage(' social.linkedin()  // Show my LinkedIn account');
  self.postMessage(' social.medium()  // Show my Medium account');
  self.postMessage(' social.lastPost()  // Show my last blog post');
  self.postMessage(' social.oldBlog()  // Show my old blog on Tumblr');
  self.postMessage('');
}

var social = {
  facebook: function twitter() {
    return 'I use it for my family and friends. Ping me on Twitter or Google+';
  },

  twitter: function twitter() {
    return 'http://twitter.com/yrezgui';
  },

  lastTweet: function lastTweet() {
    return 'Twitter API has to many limitations now. Sorry dude :(';
  },

  github: function github() {
    return 'https://github.com/yrezgui';
  },

  lastGithubEvent: function lastGithubEvent(data) {
    if(!data) {
      importScripts("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22https%3A%2F%2Fapi.github.com%2Fusers%2Fyrezgui%2Fevents%2Fpublic%22&format=json&callback=social.lastGithubEvent");
    } else {
      self.postMessage('"' + data.query.results.json.json[0].type + ' | ' + data.query.results.json.json[0].repo.url + '"');
    }
  },

  googlePlus: function googlePlus() {
    return 'http://google.com/+YacineRezgui';
  },

  lastStatus: function lastStatus(data) {
    return 'Google+ API does not have a public API. Sorry dude :(';
  },

  linkedin: function linkedin() {
    return 'http://www.linkedin.com/in/yrezgui/en';
  },

  medium: function medium() {
    return 'https://medium.com/@yrezgui';
  },

  lastPost: function getLastPost(data) {
    if(!data) {
      importScripts("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%3D'https%3A%2F%2Fmedium.com%2Ffeed%2F%40yrezgui'&format=json&callback=social.lastPost");
    } else {
      self.postMessage('"' + data.query.results.item[0].title + ' | ' + data.query.results.item[0].link + '"');
    }
  },

  oldBlog: function oldBlog() {
    return 'http://blog.yrezgui.com/';
  }
};

function resumeHelp() {
  self.postMessage('//You can use these different methods');
  self.postMessage('');
  self.postMessage(' resume.level()  // Show my current level');
  self.postMessage(' resume.languages()  // Show the languages that I know');
  self.postMessage(' resume.technologies()  // Show the technologies that I\'m excited about');
  self.postMessage(' resume.platforms()  // Show the platforms which I develop with');
  self.postMessage(' resume.databases()  // Show the databases that I use(d)');
  self.postMessage(' resume.editors()  // Show the editors that I use(d)');
  self.postMessage(' resume.frameworksBack()  // Show the back frameworks that I used');
  self.postMessage(' resume.frameworksFront()  // Show the front frameworks that I use');
  self.postMessage(' resume.librariesFront()  // Show the front libraries that I use');
  self.postMessage(' resume.meetups()  // Show the meetups where I gave a talk');
  self.postMessage(' resume.conferences()  // Show the conferences that I attended');
  self.postMessage(' resume.companies()  // Show the series that I watch(ed)');
  self.postMessage(' resume.education()  // Show the Korean series that I watch(ed)');
  self.postMessage('');
}

var resume = {
  level: function name() {
    return 'Intermediate';
  },

  languages: function languages() {
    return ['JavaScript', 'HTML', 'CSS', 'PHP', 'SQL', 'Python (beginner)', 'Go (going to learn)'];
  },

  technologies: function technologies() {
    return ['WebRTC', 'Web workers', 'GraphDB', 'Firefox OS', 'NFC', 'Internet of objects', 'Machine Learning', 'Elastichsearch', 'Docker'];
  },

  platforms: function platforms() {
    return ['Desktop browsers', 'Phonegap apps', 'Chrome apps', 'Firefox extensions'];
  },

  databases: function databases() {
    return ['MongoDB', 'Redis', 'MySQL', 'CouchDB', 'Neo4j (beginner)'];
  },

  editors: function editors() {
    return ['Sublime Text', 'Atom', 'Notepad++', 'WebStorm', 'Netbeans', 'Eclipse', 'Visual Studio'];
  },

  frameworksBack: function frameworksBack() {
    return ['ExpressJS', 'CodeIgniter', 'Symfony', 'Flask (beginner)'];
  },

  frameworksFront: function frameworksFront() {
    return ['AngularJS', 'BackboneJS', 'SammyJS', 'ReactJS (beginner)'];
  },

  librariesFront: function librariesFront() {
    return ['Ionic', 'Lodash', 'MomentJS', 'XDomain', 'jQuery', 'Boostrap', 'Foundation'];
  },

  meetups: function meetups() {
    return ['London Phonegap', 'Angular Paris', 'JSSophia'];
  },

  conferences: function conferences() {
    return ['Apps World', 'DotJS', 'SudWeb'];
  },

  companies: function companies() {
    return ['GovernorHub', 'Tequila Rapido', 'Médiamétrie eStat'];
  },

  education: function education() {
    return ['Bachelor Degree in Computer Sciences at University of Nice Sophia-Antipolis'];
  }
};