// bio object
var bio = {
    "name": "Déjà vu",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "111111111",
        "email": "aaa@d.com",
        "github": "Déjà vu",
        "twitter": "dejavu",
        "location": "San Francisco"
    },
    "biopic": "images/fry.jpg",
    "welcomeMessage": "May the force be with you.",
    "skills": ["HTML", "CSS", "JavaScript"]
};

// work object
var work = {
    "jobs": [{
            "employer": "Company A",
            "title": "Title A",
            "location": "Copenhagen",
            "dates": "2016-1-1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "employer": "Company B",
            "title": "Title B",
            "location": "Moerben",
            "dates": "2017-1-1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
    ]
};

// project object
var projects = {
    "projects": [{
            "title": "Project A",
            "dates": "2015-1-1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "images": [
                "http://lorempixel.com/350/200/animals/",
                "http://lorempixel.com/300/200/animals/"
            ]
        },
        {
            "title": "Project B",
            "dates": "2016-1-1",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "images": [
                "http://lorempixel.com/400/300/animals/"
            ]
        }
    ]
};

// education object
var education = {
    "schools": [{
        "name": "A University",
        "location": "Shanghai",
        "degree": "Undergraduate",
        "dates": "2014",
        "url": "www.uni.com",
        "majors": ["major"]
    }],
    "onlineCourses": [{
        "title": "front-end",
        "school": "Udacity",
        "dates": "2017",
        "url": "www.udacity.com"
    }]
};


// DISPLAY function of bio object
bio.display = function () {
    // name and role
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    // contacts
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedLocation;
    $("#topContacts").append(formattedContacts);
    $("#footerContacts").append(formattedContacts);

    // pic and messages
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedPicWel = formattedPic + formattedWelcome;
    $("#header").append(formattedPicWel);

    // skills
    if (bio.skills !== null) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkills = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkills);
        });
    }
};

// DISPLAY function of work object
work.display = function () {
    if (work.jobs !== null) {
        work.jobs.forEach(function (job) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

            var formattedContent = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
            $(".work-entry:last").append(formattedContent);
        });
    }
};

// DISPLAY function of projects object
projects.display = function () {
    if (projects.projects !== null) {
        projects.projects.forEach(function (project) {
            $("#projects").append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

            var formattedContent = formattedTitle + formattedDates + formattedDescription;
            $(".project-entry:last").append(formattedContent);

            // append project images
            if (project.images.length > 0) {
                for (var i = 0; i < project.images.length; i++) {
                    var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        });
    }
};

// DISPLAY function of education object
education.display = function () {
    // append schools
    if (education.schools !== null) {
        education.schools.forEach(function (school) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", school.name);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var joinedMajors = school.majors.join(", ");
            var formattedMajors = HTMLschoolMajor.replace("%data%", joinedMajors);

            var formattedContent = formattedName + formattedLocation + formattedDegree + formattedDates + formattedMajors;
            $(".education-entry:last").append(formattedContent);
        });
    }
    // append onlineCourses
    if (education.onlineCourses !== null) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(function (course) {
            $("#education").append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedUrl = HTMLonlineURL.replace("%data%", course.url);

            var formattedContent = formattedTitle + formattedSchool + formattedDates + formattedUrl;
            $(".education-entry:last").append(formattedContent);
        });
    }
    $("#education").find("h3").attr("style", "padding-top: 0");
};

// call the display function
bio.display();
work.display();
projects.display();
education.display();



// internationalize the name
function inName() {
    var mName = bio.name.split(" ");
    mName[0].slice(0, 1).toUpperCase();
    mName[0].slice(1).toLowerCase();
    mName[1] = mName[1].toUpperCase();
    return mName.join(" ");
}


// append the google map
$("#mapDiv").append(googleMap);


// icon fonts
function insertIcon() {
    var topContacts = $("#topContacts").find(".blue-text");
    var contacts_1 = topContacts[0];
    var contacts_2 = topContacts[1];
    var contacts_3 = topContacts[2];
    var contacts_4 = topContacts[3];
    var contacts_5 = topContacts[4];
    var i_mobile = $("<i class=\"fa fa-mobile\" aria-hidden=\"true\"></i>");
    var i_email = $("<i class=\"fa fa-inbox\" aria-hidden=\"true\"></i>");
    var i_github = $("<i class=\"fa fa-github\" aria-hidden=\"true\"></i>");
    var i_twitter = $("<i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>");
    var i_location = $("<i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i>");
    i_mobile.insertBefore(contacts_1);
    i_email.insertBefore(contacts_2);
    i_github.insertBefore(contacts_3);
    i_twitter.insertBefore(contacts_4);
    i_location.insertBefore(contacts_5);
}
insertIcon();