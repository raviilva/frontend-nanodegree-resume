

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

  var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedBioPic);

  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);


  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var allContacts = formattedMobile + formattedEmail + formattedGithub + formattedLocation;

  $("#topContacts").append(allContacts);
  $("#footerContacts").append(allContacts);
};

//if(bio.skills.length > 0) {
bio.skills.forEach(function(skill) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formattedSkill);
});


var education = {
  "schools": [
    {
      "name": "Anglia Ruskin University",
      "location": "Cambridge, UK",
      "degree": "Bachelors of Arts",
      "major": ["International Business Management"],
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
      "url" : "https://www.udacity.com/"
    }
  ]
};


education.display = function(){
  //for (var school in education.schools){ 
  education.schools.forEach(function(school) { 
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
                  .append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"]))
                  .append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"]))
                  .append(HTMLschoolDegree.replace("%data%", education.schools[school]["degree"]));
     });                                                 
    //for(var major in education.schools[school].majors){
  school.majors.forEach(function(major) {
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));

    $("#education").append(HTMLonlineClasses);
  // Display online courses
  //for (var onlineCourse in education.onlineCourses){  
   education.onlineCourses.forEach(function(onlineCourses){  
    var num = education.schools.length + parseInt(onlineCourse);
    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates"]))
                  .append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse]["school"]))
                  .append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse]["title"]))
                  .append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse]["url"]));
        });
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

work.display = function() {
	//for(job in work.jobs) {
   work.jobs.forEach(function(job){  
		$("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedWorkData = formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription;
    $(".work-entry:last").append(formattedWorkData);
  
  });
};



var projects = {
  "projects": [
    {
    "title": "Portfolio",
    "images": "images/Portfolio.jpg",
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

        projects.images.forEach(function(image){
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

