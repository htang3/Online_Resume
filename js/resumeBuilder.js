///////////////////////////////////////BIO
var bio = {
  "name": "Hung Tang",
  "role": "Software Engineer",
  "contacts": {
    "email": "tangquochung2901@gmail.com",
    "mobile": "669 213 38**",
    "github": "Hungtang2901",
    "location": "San Jose, CA"
  },
  "biopic": "images/profilepicture.jpg",
  "welcomeMessage": "Welcome to Hung Tang porfolio!",
  "skills": ["Web Development", "Python", "Java", "Android"]

};
bio.display = function() {
  ///////////////////////// Name +role
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  //$("#header").prepend(formattedRole);
  var formatted_Name = HTMLheaderName.replace("%data%", "Hung Tang");
  $("#header").prepend(formatted_Name,formattedRole);
  ////////////////////////// TOP CONTACT + FOOTER CONTACT
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  // $("#topContacts").append(formattedtopContact);
  // $("#footerContacts").append(formattedtopContact);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts, #footerContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedLocation);
  // $("#footerContacts").append(formattedtopContact);
  ///////////////////////////// BIO PICTURE + WELCOME MESSAGE
  var bioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(bioPic);
  var Welcome_message = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(Welcome_message);
  ///////////////////////////// SKILLS
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").prepend(formattedSkill);
      // formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      // $("#skills").prepend(formattedSkill);
      // formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      // $("#skills").append(formattedSkill);
      // formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      // $("#skills").append(formattedSkill);
    }
  }
};
bio.display();
// ///////////////////////////////////////////////////////// WORK EXPERIENCE
var work = {
  "jobs": [{
    "title": "Peer Educator",
    "employer": "Peer Connection",
    "dates": "2017-2018",
    "location": "San Jose, CA",
    "description": "Mentoring for more than 200 hundred freshmen!"
  }, {
    "title": "International Student Ambassador",
    "employer": "Center for International Education",
    "dates": "2015-2016",
    "location": "Tampa, FL",
    "description": "Represent over 400 international students at Hillsborough Community College."
  }]
};
work.displayed = function() {
  for (var job = 0; job < work.jobs.length; job++) {
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedJobtitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedworkdates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedlocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedjobdescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployer + formattedJobtitle,formattedworkdates,formattedlocation,formattedjobdescription);
    // $(".work-entry:last").append(formattedworkdates);
    // $(".work-entry:last").append(formattedlocation);
    // $(".work-entry:last").append(formattedjobdescription);
  }
};
work.displayed();
// function locationFinder(){
//   var locations =[];
//   locations.push(work.Jobs.officeLocation);
//   for (var place in work.Jobs){
//     locations.push(work.Jobs[place].officeLocation);
//   }
// }
// locationFinder()
///////////////////////////////////// projects
var projects = {
  "projects": [{
    "title": "Magic Quiz",
    "dates": "7/2018",
    "description": "The project is part of Intro to Programming Nanodegree of Udacity using Python",
    "images": ["images/Magicquizimage.PNG"]
  }, {
    "title": "Movie trailer Website",
    "dates": "7/2018",
    "description": "This project is to create a website showing the trailer of movies.",
    "images": ["images/movie_website_image.PNG"]
  }]
};
projects.function = function() {
  for (var p = 0; p < projects.projects.length; p++) {
    var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
    var projectDate = HTMLprojectDates.replace("%data%", projects.projects[p].dates);
    var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(projectTitle,projectDate,projectDescription);
    // $(".project-entry:last").append(projectDate);
    // $(".project-entry:last").append(projectDescription);
    for (var i =0; i<projects.projects[p].images.length;i++){
  //  projects.projects.images.forEach(function(i){
        var projectImage = HTMLprojectImage.replace("%data%", projects.projects[p].images[i]);
        $(".project-entry:last").append(projectImage);
      }
    }
};
projects.function();


///////////////////////////////////////////////////////////////EDUCATION
var education = {
  "schools": [{
      "name": "San Jose State University",
      "degree": "Bachelor in Science",
      "dates": "2017 - present",
      "location": "San Jose, CA",
      "majors": ["Software Engineer"]
    },
    {
      "name": "Hillsborough",
      "degree": "Associate in Art",
      "dates": "2015-2017",
      "location": "Tampa, FL",
      "majors": ["Computer Information System"]
    }
  ],
  "onlineCourses": [{
    "title": "Intro to Programming Nanodegree",
    "school": "Udacity",
    "dates": "2018",
    "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
  }]

};

education.displays = function() {
  for (var school = 0; school < education.schools.length; school++) {
    $("#education").append(HTMLschoolStart);
    var schoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var schoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var schoolDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    var schoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(schoolName + schoolDegree,schoolDate,schoolLocation,schoolMajor);
    //  $("#education").append(schoolDegree);
  //  $(".education-entry:last").append(schoolDate);
  //$(".education-entry:last").append(schoolLocation);
  //  $(".education-entry:last").append(schoolMajor);
  }

  for (var i = 0; i < education.onlineCourses.length; i++) {
    $("#education").append(HTMLonlineClasses);
    ///////////////////////////////
    $("#education").append(HTMLschoolStart);
    /* Create another education-entry for ONline course. Whithout it, onlinve course
          will appear above the HTMLonlineClasses*/

    var onlineschoolTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
    var onlineschoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
    var onlineschooldate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
    var onlineschoolurl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
    $(".education-entry:last").append(onlineschoolTitle + onlineschoolName,onlineschooldate,onlineschoolurl);
    //   $("#education").append(onlineschoolName);
    // $(".education-entry:last").append(onlineschooldate);
    // $(".education-entry:last").append(onlineschoolurl);
  }
};
education.displays();



////////////////////////////////////////GOOGLE Map
$("#mapDiv").append(googleMap);


/*
This is empty on purpose! Your code to build the resume will go he"re.
 */
function inName(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

// $("#main").append("Hung Tang");
// var awesomeThought = "I am Hung and I am awesome!";
// console.log(awesomeThought)
// var funThoughts = awesomeThought.replace("awesome","fine");
// console.log(funThoughts);


/*
This is empty on purpose! Your code to build the resume will go he"re.
 */

// $("#main").append("Hung Tang");
// var awesomeThought = "I am Hung and I am awesome!";
// console.log(awesomeThought)
// var funThoughts = awesomeThought.replace("awesome","fine");
// console.log(funThoughts);
// var formattedRole = HTMLheaderRole.replace("%data%","Web developer");
// $("#header").prepend(formattedRole)
// var formatted_Name = HTMLheaderName.replace("%data%","Hung Tang");
// $("#header").prepend(formatted_Name);
