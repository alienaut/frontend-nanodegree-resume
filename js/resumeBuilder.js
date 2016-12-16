'use-strict';

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
      var $lastSchoolEntry = $('.education-entry:last-of-type');
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
      employer: 'Momentic',
      title: 'Web Developer',
      location: 'İstanbul / Turkey',
      dates: 'October 2016 - in progress',
      description: 'I am working as Momentic\' Team member to build web application of momentic which is great way to tell stories with pictures'
    },
    {
      employer: 'İdemama',
      title: 'Web Developer',
      location: 'Istanbul / Turkey',
      dates: 'December 2015 - September 2016  ',
      description: 'I was recruited to develop new features for idemama.com such as idemama market which freelance logo designers can offer to sale their designs on our website.'
    },
    {
      employer: 'Nomad Commerce',
      title: 'Web Developer',
      location: 'Istanbul / Turkey',
      dates: 'February 2015 - December 2016  ',
      description: 'I was there to continue development of the forivia.com(project moved to another platform after I left the company) later on I build and developed other projects such us backend services for Devrim Erbil\'s exhibits. In nomad commerce I\'ve worked with a large team and various technologies. It was a good experience to learn.'
    },
    {
      employer: 'Bilende',
      title: 'Web Developer Intern',
      location: 'Istanbul / Turkey',
      dates: 'July 2012 – September 2014',
      description: 'I joined Bilende team as a intern and still my education in university continues. Nevertheless I took responsibilities to maintain existing projects and begin to develop my first applications there. It was a great beginning to my web development career and I am proud being a part of Bilende team.'
    }
  ],
  display: function() {
    this.jobs.forEach(function(job) {
      $('#workExperience').append(HTMLworkStart);
      var $lastWorkEntry = $('.work-entry:last-of-type');
      $lastWorkEntry.append(addContent(HTMLworkEmployer, job.employer));
      $lastWorkEntry.append(addContent(HTMLworkTitle, job.title));
      $lastWorkEntry.append(addContent(HTMLworkDates, job.dates));
      $lastWorkEntry.append(addContent(HTMLworkLocation, job.location));
      $lastWorkEntry.append(addContent(HTMLworkDescription, job.description));
    });
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
