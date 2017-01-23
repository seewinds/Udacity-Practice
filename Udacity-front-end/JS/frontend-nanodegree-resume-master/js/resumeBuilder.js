/*
This is empty on purpose! Your code to build the resume will go here.
formatted
 */

// $("#main").append("Saoirse");

// var awesomeThoughts = "I am Saoirse and I am AWESOME!";

// console.log(awesomeThoughts);

// var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

// console.log(funThoughts);

// $("#main").append(funThoughts);

/*
var skills = ["A","B","C"];

var bio = {
    "m_name" : "Saoirse",
    "m_role" : "Designer",
    "m_contact" : {
        "mobile": "111",
        "email": "a.aa@d.com",
        "github": "Partly Cloudy",
        "twitter": "Seewinds",
        "location": "Nanjing"
    },
    "m_pic" : "images/fry.jpg",
    "m_welcome" : "hello",
    "m_skills" : skills
};

bio.work = {
    "employer": "SEU",
    "title": "student",
};
bio["education"] = {
    "name": "SEU",
    "degree": "undergraduate",
    "major": "transportation"
};


var formattedName = HTMLheaderName.replace("%data%",bio.m_name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.m_role);

var formattedmobile = HTMLmobile.replace("%data%",bio.m_contact.mobile);
var formattedemail = HTMLemail.replace("%data%",bio.m_contact.email);
var formattedtwitter = HTMLtwitter.replace("%data%",bio.m_contact.twitter);
var formattedgithub = HTMLgithub.replace("%data%",bio.m_contact.github);
var formattedlocation = HTMLlocation.replace("%data%",bio.m_contact.location);
var formattedPic = HTMLbioPic.replace("%data%",bio.m_pic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.m_welcome);
var formattedSkills = HTMLskills.replace("%data%",bio.skills);

var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",bio.work.employer);
var formattedWorkTitle = HTMLworkTitle.replace("%data%",bio.work.title);

var formattedSchoolName = HTMLschoolName.replace("%data%",bio.education.name);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",bio.education.degree);
var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",bio.education.major);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#topContacts").append(formattedmobile);
$("#topContacts").append(formattedemail);
$("#topContacts").append(formattedtwitter);
$("#topContacts").append(formattedgithub);
$("#topContacts").append(formattedlocation);

$("#header").append(formattedPic);
$("#header").append(formattedWelcome);

$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);

$("#workExperience").append(HTMLworkStart);
$(".work-entry").prepend(formattedWorkEmployer);
$(".work-entry").append(formattedWorkTitle);

$("#education").append(HTMLschoolStart);
$(".education-entry").append(formattedSchoolName);
$(".education-entry").append(formattedSchoolDegree);
$(".education-entry").append(formattedSchoolMajor);

*/


var bio = {
    "name": "Saoirse",
    "role": "Designer",
    "contact": {
        "mobile": "111",
        "email": "a.aa@d.com",
        "github": "Partly Cloudy",
        "twitter": "Seewinds",
        "location": "Nanjing"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "hello",
    "skills": ["skill 1","skill 2","skill 3"]
};

var work = {
    "jobs": [
        {
            "employer": "Company A",
            "title": "Title A",
            "location": "Somewhere 1",
            "dates": "2016",
            "description": "balalalala"
        },
        {
            "employer": "Company B",
            "title": "Title B",
            "location": "Somewhere 2",
            "dates": "2017",
            "description": "balalalala"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Project A",
            "dates": "2015",
            "description": "something"
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "Southeast University",
            "location": "Nanjing",
            "degree": "Undergraduate",
            "dates": "2014",
            "url": "www.seu.edu.com",
            "majors": ["transportation"]
        }
    ],
    "onlineCourses": [
        {
            "title": "front-end",
            "school": "Udacity",
            "dates": "2017",
            "url": "Udacity.com"
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);

var formattedContact = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
$("#topContacts").append(formattedContact);

var formattedPic = HTMLbioPic.replace("%data%",bio.biopic);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedPicWel = formattedPic + formattedWelcome;
$("#header").append(formattedPicWel);

if (bio.skills !== null) {
    $("#header").append(HTMLskillsStart);
    var formattedContent = bio.skills.join(" ");
    var formattedSkills = HTMLskills.replace("%data%", formattedSkills);
    $("#skills").append(formattedSkills);
}


if (work !== null) {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedContent = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
        $(".work-entry:last").append(formattedContent);
    }
}

if (projects !== null) {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        var formattedContent = formattedTitle + formattedDates + formattedDescription;
        $(".project-entry:last").append(formattedContent);
    }
}

if (education !== null) {
    if (education.schools !== null) {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var joinedMajors = education.schools[school].majors.join(", ");
            var formattedMajors = HTMLschoolMajor.replace("%data%", joinedMajors);

            var formattedContent = formattedName + formattedLocation + formattedDegree + formattedDates + formattedMajors;
            $(".education-entry:last").append(formattedContent);
        }
    }
    if (education.onlineCourses !== null) {
        $("#education").append(HTMLonlineClasses);
        for (course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

            var formattedContent = formattedTitle + formattedSchool + formattedDates + formattedUrl;
            $(".education-entry:last").append(formattedContent);
        }
    }
}

