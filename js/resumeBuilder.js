

var bio = {
  "name": "Ilva Ravinska",
  "role": "Web Developer",
  "contacts": {
    "mobile": "691304229",
    "email": "ravi.ilva@gmail.com",
    "github": "raviilva",
    "location": "Luxembourg,Luxembourg"
  },
  "welcomeMessage": "My name is Ilva and I'm a Web Developer!",
  "skills": [
    "HTML", "CSS", "JavaScript", "Responsive Design", "Bootstrap"
  ],
  "biopic": "images/Ilva.jpg"
};

bio.display = function() {

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  var formattedSkill = HTMLskillsStart;
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    
    var formattedSkill = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkill);
 
});


  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

  $("#topContacts").append(allContacts);
  $("#footerContacts").append(allContacts);

};


var education = {
  "schools": [
    {
      "name": "Anglia Ruskin University",
      "location": "Cambridge, UK",
      "degree": "Bachelors of Arts",
      "majors": ["International Business Management"],
      "dates": "2009-2013"
    },
    {
      "name": "Zuyd University",
      "location": "Maastricht, The Netherlands",
      "degree": "Bachelors of Arts",
      "majors": ["International Business Management"],
      "dates": "2010-2011"
    }
  ],
    "onlineCourses": [
    {
      "title": "Front End Web Developer",
      "school": "Udacity",
      "dates": "2016-2017",
      "url" : "https://www.udacity.com/",
    }
  ]
};


education.display = function() {
  education.schools.forEach(function(school) {
    $("#education").append(HTMLschoolStart);

    var formattedschoolName = HTMLschoolName.replace("%data%", school.name);
    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedschoolDates = HTMLschoolDates.replace("%data%", school.dates);
    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", school.location);
    var formattedschoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
    var formatteduniinfo = formattedschoolName + formattedschoolDegree + formattedschoolDates + formattedschoolLocation + formattedschoolMajor;
    $(".education-entry:last").append(formatteduniinfo);
  });


  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);

  education.onlineCourses.forEach(function(course) {

    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", course.title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", course.school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", course.dates);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", course.URL);
    var formattedonlineinfo = formattedonlineTitle + formattedonlineSchool + formattedonlineDates + formattedonlineURL;
    $(".education-entry:last").append(formattedonlineinfo);
  });
};



var work = {
  "jobs": [
    {
    "employer": "RBC",
    "title": "Transfer Agent",
    "dates": "2016-present",
    "location": "Luxembourg, Luxembourg",
    "description": "Processing and validating shareholder transactions dedicated to European clients.Producing advanced shareholder reports and internal reports related to the daily Transfer Agent records in relation to compliance. Managing sensitive cash processes, ensuring that deadlines are followed."
  },
    {
    "employer": "State Street Bank",
    "title": "Transfer Agent",
    "dates": "2013-2014",
    "location": "Luxembourg,Luxembourg",
    "description": "Transfer Agent of the Investor & Distributor Services team, answering all queries received via phone, email, facsimile and post on behalf of fund clients including shareholders, brokers or financial intermediaries, as well as fund promoters and fund management companies."
  }
  ]
};

work.display = function () {
  work.jobs.forEach(function(job) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedworkDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedworkLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", job.description);
    var formattedEmployerTitle = formattedEmployer + formattedTitle + formattedworkDates + formattedworkLocation + formattedworkDescription;
    $(".work-entry:last").append(formattedEmployerTitle);

 });
};


var projects = {
  "projects": [
    {
    "title": "Portfolio",
    "images": ["images/Portfolio.jpg"],
    "dates": "2016",
    "description": "Developed a personal portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop browsers.",
    }
  ]
};

projects.display = function() {

    projects.projects.forEach(function(project) {

        $("#projects").append(HTMLprojectStart);

        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.description);

        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDescription);

        project.images.forEach(function(image){
            var formattedprojectImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedprojectImage);
    });
  });      
};



$("#mapDiv").append(googleMap);

bio.display();
projects.display();
work.display();
education.display();

