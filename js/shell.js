self.addEventListener('message', function(e) {
  self.postMessage(JSON.stringify(eval(e.data)));
});

function help() {
  self.postMessage('//You can use these different fonctions');
  self.postMessage('');
  self.postMessage(' profileHelp()  // Show functions around my profile');
  self.postMessage(' socialHelp()  // Show functions around my social activity');
  self.postMessage('');
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
  self.postMessage(' profile.jdramas()  // Show the mangas that I watch(ed)/read');
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
  self.postMessage(' social.twitter()  // Show my twitter account');
  self.postMessage(' social.github()  // Show my Github account');
  self.postMessage(' social.googlePlus()  // Show my Google+ account');
  self.postMessage(' social.linkedin()  // Show my LinkedIn account');
  self.postMessage(' social.medium()  // Show my Medium account');
  self.postMessage(' social.oldBlog()  // Show my old blog (on Tumblr)');
  self.postMessage('');
}

var social = {
  twitter: function twitter() {
    return 'http://twitter.com/yrezgui';
  },

  github: function github() {
    return 'https://github.com/yrezgui';
  },

  googlePlus: function googlePlus() {
    return 'http://google.com/+YacineRezgui';
  },

  linkedin: function linkedin() {
    return 'http://www.linkedin.com/in/yrezgui/en';
  },

  medium: function medium() {
    return 'https://medium.com/@yrezgui';
  },

  oldBlog: function oldBlog() {
    return 'http://blog.yrezgui.com/';
  }
};