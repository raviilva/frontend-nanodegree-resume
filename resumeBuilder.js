// $("#main").append([josh]);
// [string].replace([old],[new])

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
    "HTML", "CSS", "JavaScript", "Responsive Design", "Mobile"
  ],
  "bioPic": "images/Ilva.jpg"
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

if(bio.skills.length > 0) {
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
}

};
bio.display();


var education = {
  "schools": [
    {
      "name": "Anglia Ruskin University",
      "location": "Cambridge, UK",
      "degree": "Bachelors of Arts",
      "major": ["Business"],
      "dates": 2013
    },
  ],
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedEduData = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
		$(".education-entry:last").append(formattedEduData);
	}
};
education.display();

var work = {
  "jobs": [
    {
    "employer": "RBC",
    "title": "Transfer Agent",
    "dates": "2013-present",
    "location": "Luxembourg",
    "description": "Handling Investor queries on behalf of fund promoters"
  }
  ]
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    var formattedWorkData = formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription;
    $(".work-entry:last").append(formattedWorkData);
    }
};
work.display();


var projects = {
  "projects": [
    {
    "title": "Portfolio",
    "dates": "2016",
    "description": "Recreated PDF design mockup using HTML/CSS/Responsive Design",
   
  }
  ]
};

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
  	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
	   var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
  	$(".project-entry:last").append(formattedDescription)

  }
};
projects.display();

$("#mapDiv").append(googleMap);




