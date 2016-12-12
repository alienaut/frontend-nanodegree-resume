var addContent = function(HTML, content) {
  return HTML.replace('%data%', content);
}

var bio = {
  name: 'Yusuf Yalım',
  role: 'Web Developer',
  contacts: {
    mobile: '+905465365242',
    email: 'yusufyalim@gmail.com',
    github: 'https://github.com/alienaut',
    twitter: 'https://twitter.com/@fusuyz',
    location: 'Istanbul / Turkey',
  },
  welcomeMessage: 'A teacher, web developer, linux guy, samurai wannabe. Loves oldschool games, movies, music and science-fiction books.',
  skills: ['Ruby', 'Ruby on Rails', 'Javascript', 'Jquery', 'ReactJS', 'HTML', 'CSS', 'Postgres', 'Manjora Linux', 'Ubuntu', 'MacOS'],
  bioPic: 'images/yusuf.jpg',
  display: function() {
    $('#header').prepend(addContent(HTMLheaderRole, this.role));
    $('#header').prepend(addContent(HTMLheaderName, this.name));

    $('#topContacts').append(addContent(HTMLmobile, this.contacts.mobile));
    $('#topContacts').append(addContent(HTMLemail, this.contacts.email));
    $('#topContacts').append(addContent(HTMLgithub, this.contacts.github));
    $('#topContacts').append(addContent(HTMLtwitter, this.contacts.twitter));
    $('#topContacts').append(addContent(HTMLlocation, this.contacts.location));

    $('#header').append(addContent(HTMLbioPic, this.bioPic));
    $('#header').append(addContent(HTMLwelcomeMsg, this.welcomeMessage));
    $('#header').append(HTMLskillsStart);
    this.skills.forEach(function(skill) {
      $('#skills').append(addContent(HTMLskills, skill));
    });
  }
};

bio.display();

var education = {
  schools: [
    {
      name: 'Ismet Aktar Vocational School',
      location: 'Istanbul / Turkey',
      degree: '',
      majors: [],
      dates: '-',
      url: ''
    }
  ],
  onlineCourses: [
    {
      title: '',
      school: '',
      dates: '-',
      url: ''
    }
  ],
  display: function() {
    return false;
  }
};

var work = {
  jobs: [
    {
      employer: '',
      title: '',
      location: '',
      dates: 'in progress',
      description: ''

    }
  ],
  display: function() {
    return false;
  }
}

var projects = {
  projects: [
    {
      title: 'string',
      dates: 'string -',
      description: '',
      images: ['', '']
    }
  ],
  display: function() {
    return false;
  }
}


