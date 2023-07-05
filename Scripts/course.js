// Course data
const courses = {
    "courses":[
        {"name":"Introduction to Computer Programming(Java)", "level":"1", "code":"CST7116", "description":"An introduction to computer programming with emphasis on problem analysis and design, using algorithms, pseudocode, flowcharts, UML class diagrams and testing, with the Java programming language used as a means to implement problem solution designs.", "image":"Lv1Java.jpg"},
        {"name":"Introduction to Database", "level":"1", "code":"CST7215", "description":"the fundamentals of relational databases design using Entity Relation Diagrams (ERDs), and use Structured Query Language (SQL) to create, modify and query a database. ", "image":"Lv1Data.jpg"},
        {"name":"Computer Essentials", "level":"1", "code":"CST7101", "description":"Maintaining a computer, using operating system and productivity software, and expressing related environmental and sustainability concerns.", "image":"Lv1CE.jpg"},
        {"name":"Tech Math for Computer Science", "level":"1", "code":"MAT7100", "description":"Algebraic and transcendental functions, equations, linear systems, graphing functions, computer number systems, Boolean algebra and logic, and vector addition/subtraction. ", "image":"Math.png"},
        {"name":"College and Career Success", "level":"1", "code":"PRL7532", "description":"Awareness of self as a learner and study of learning, motivation and problem-solving theories. ", "image":"Success.png"},
        {"name":"Object-Oriented Programming(Java)", "level":"2", "code":"CST7284", "description":"Object oriented concepts, such as encapsulation, inheritance, abstraction and polymorphism are covered and reinforced with practical applications. The basics of data structures and algorithms as well as basic Graphical User Interface (GUI) programming.", "image":"Lv2Java.jpg"},
        {"name":"Database Systems", "level":"2", "code":"CST7355", "description":"Hands-on experience with advanced engineering modeling tools along with SQL, SQL scripts and programming with Oracle's PL/SQL blocks. ", "image":"Database2.png"},
        {"name":"Operating Systems Fundamentals(GNU/Linux)", "level":"2", "code":"CST7102", "description":"The basic concepts and components of Operating Systems (OS), and how they function and interact with hardware and software components. ", "image":"Linux.png"},
        {"name":"Web Programming", "level":"2", "code":"CST7285", "description":"Basic skills of web programming, website design and implementation. JavaScript, HTML5, and PHP are used to explore web-based solutions to problems of increasing interactivity and complexity.", "image":"Web.png"},
        {"name":"World Religious", "level":"2", "code":"GED5006", "description":"The history, teachings, and practices of six world religions.", "image":"Religious.png"},
        {"name":"Technical Communication for Engineering Technologies", "level":"2", "code":"ENL7019", "description":" Exercises and assignments designed to foster independent and collaborative critical thinking, research, writing, visual communication and presentation skills related to technical topics.", "image":"Communication.png"},
        {"name":"Network Programming", "level":"3", "code":"CST7109", "description":" The basic structure, design and layered communications models, with an emphasis on data communications, TCP/IP protocol suite, socket programming and multi-threading concepts.", "image":"Lv3Java.jpg"},
		{"name":"Mobile Graphical Interface Programming", "level":"3", "code":"CST7109", "description":"graphical user interface programming in a mobile Android environment, using the latest Android development tools.", "image":"Android.png"}	
    ]
}

function selectCourse(event) {
    // Get user's input, using toLowerCase() to implement case-insensitive search
    let searchTerm = document.getElementById("search-course").value.toLowerCase();
    let selectedLevel = document.getElementById("filter-level").value;
    let selectedSort = document.getElementById("sort-level").value;

   // Store filtered courses
       let filteredCourses = courses.courses.filter(course =>
           course.name.toLowerCase().includes(searchTerm)  // Check if the course name contains the search term
		   &&
           (selectedLevel === "All" || course.level === selectedLevel)
       );

    // Select sort
    if (selectedSort === "Lowest to Highest") {
		// Sort courses in ascending order
        filteredCourses.sort((a, b) => a.level - b.level);
    } else if (selectedSort === "Highest to Lowest") {
		// Sort courses in descending order
		filteredCourses.sort((a, b) => b.level - a.level);
    }

    // Get the course list container element
    let courseListContainer = document.getElementById('course-list');
    courseListContainer.innerHTML = '';

	// Generate HTML markup for each course block
	let courseBlockHTML = filteredCourses.map(course => `
    <div class="course-block">
        <img src="Images/${course.image}" alt="${course.name}">
        <h2>${course.name}</h2>
        <p>Level ${course.level}</p>
        <p>Code: ${course.code}</p>
        <p class="small-description">Description: ${course.description}</p>
    </div>
	`).join('');

	// Add the course 
	courseListContainer.innerHTML = courseBlockHTML;


    event.preventDefault();
}

// Call the selectCourse function when the page is loaded
window.addEventListener("load",selectCourse);