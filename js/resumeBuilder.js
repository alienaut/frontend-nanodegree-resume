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

var education = {
  schools: [
    {
      name: 'Marmara Üniversitesi',
      location: 'Istanbul / Turkey',
      degree: 'Bachelor\'s degree',
      majors: ['Teacher Training in Computer and Control'],
      dates: '2010 - 2015',
      url: 'http://elkbil.tef.marmara.edu.tr/en/'
    },
    {
      name: 'Balıkesir Üniversitesi',
      location: 'Balıkesir / Turkey',
      degree: 'Associate\'s degree',
      majors: ['computer Programming'],
      dates: '2007 - 2009',
      url: 'http://www.balikesir.edu.tr/index.php/baun/birim/edremit_meslek_yuksekokulu'
    }
  ],
  onlineCourses: [
    {
      title: 'Ruby on Rails: An Introduction',
      school: 'Johns Hopkins University on Coursera',
      dates: '2015',
      url: 'https://www.coursera.org/account/accomplishments/verify/N6X3QKXKHGAC'
    },
    {
      title: 'Rails with Active Record and Action Pack',
      school: 'Johns Hopkins University on Coursera',
      dates: '2015',
      url: 'https://www.coursera.org/account/accomplishments/verify/TQF329BCKXFH'
    }
  ],
  display: function() {
    this.schools.forEach(function(school) {
      $('#education').append(HTMLschoolStart);
      $lastSchoolEntry = $('.education-entry:last-of-type');
      $lastSchoolEntry.append(addContent(HTMLschoolName, school.name));
      $lastSchoolEntry.append(addContent(HTMLschoolDegree, school.degree));
      $lastSchoolEntry.append(addContent(HTMLschoolDates, school.dates));
      $lastSchoolEntry.append(addContent(HTMLschoolLocation, school.location));
      school.majors.forEach(function(major) {
        $lastSchoolEntry.append(addContent(HTMLschoolMajor, major));
      });
    });

    $('#education').append(HTMLonlineClasses);

    this.onlineCourses.forEach(function(onlineCourse) {
      $('#education').append(HTMLschoolStart);
      $lastSchoolEntry = $('.education-entry:last-of-type');
      $lastSchoolEntry.append(addContent(HTMLonlineTitle, onlineCourse.title));
      $lastSchoolEntry.append(addContent(HTMLonlineSchool, onlineCourse.school));
      $lastSchoolEntry.append(addContent(HTMLonlineDates, onlineCourse.dates));
      $lastSchoolEntry.append(addContent(HTMLonlineURL, onlineCourse.url));
    });
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

var sections = [bio, education, work, projects];

sections.forEach(function(section) {
  section.display();
});
