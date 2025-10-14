import spacego from "../assets/spacego.png";
import course from "../assets/course.png";
import bank from "../assets/bank.png";
import exam from "../assets/exam.png";
import resource from "../assets/resource.png";
import spring from "../assets/spring.png";
import landsale from "../assets/landsale.jpg";
import portfolio from "../assets/portfolio.png";
import discussion from "../assets/discussion.png";
import freshconnect from "../assets/freshconnect.png";
import procurement from "../assets/procurement.png";
import strawberry from "../assets/strawberry.png";

export const projects = [
  {
    imgSrc: strawberry,
    imgTitle: "strawberry rover",
    heading: "Mobile App - Strawberry Pollinating Rover",
    type: "mobile",
    body: "Developed a mobile application to monitor and control an autonomous rover performing strawberry pollination. Integrated an interactive 3D model (Three.js) to visualize near real-time rover movement and pollination status. Implemented intuitive data visualization dashboards for analytics and operational insights. Implemented user authentication using Firebase. ",
    tools: "#React Native #Expo #Three.js #Nativewind #Firebase",
    github: "https://github.com/IT21292422/Strawberry-Rover-Mobile",
    linkedin:
      "https://drive.google.com/file/d/1-Jxcae3eU3iBs6Lq_LjwBnZ7XuCvH2pX/view?usp=sharing",
  },
  {
    imgSrc: spacego,
    imgTitle: "space go",
    heading: "Space Go - Space Themed Website",
    type: "web",
    body: "Developed a space themed website using React, utilizing NASA Open API for our Application Framework Module. Used APIs such as Astronomy Picture of The Day (APOD), EPIC and Mars Rover. Used Kinde for Authentication. Used Daisy UI and Tailwind for styling. Was able to deploy this in Vercel.",
    tools: "#React #Daisy UI(Tailwind) #API",
    github: "https://github.com/IT21292422/SpaceGo",
    linkedin:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7206149026994429954?compact=1",
  },
  {
    imgSrc: course,
    imgTitle: "course",
    heading: "Learner Management - Course Management System",
    type: "web",
    body: "Developed the Learner Service in the Course Management System we developed for our Distribution System Module. Developed the backend using NestJS with MongoDB as the database, by following the microservice architecture (Course Service, Learner Service, Auth Service, Payment Service). Frontend was developed using Next.js and used Cloudinary to handle media (Images, Videos, PDFs). Used Daisy UI and Tailwind for styling. The learner can view all the courses available in the system, he can enroll on any course he prefers by making the required payment and then he will be redirected to the course page where he can view the course content and also look at the progress of the course.",
    tools: "#Nest JS #Next JS #MongoDB #Microservices #Daisy UI(Tailwind)",
    github: "https://github.com/IT21292422/forge",
    linkedin:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7206195782037721088?compact=1",
  },
  {
    imgSrc: spring,
    imgTitle: "spring boot",
    heading: "Timetable Management",
    type: "web",
    body: "The University Timetable Management System is a RESTful API built with Spring Boot, designed to manage class schedules for students, faculty, and administrative staff. It provides functionalities for course management, booking rooms and resources, class session scheduling and user roles management. Spring Security is used to authenticate and authorize users based on roles such as Admin, Faculty, and Student, with user session management handled using JWT tokens.",
    tools: "#Java #Spring Boot #Spring Security #Mongo DB #REST API",
    github: "https://github.com/IT21292422/timetable-management",
    linkedin: "",
  },
  {
    imgSrc: exam,
    imgTitle: "exam system",
    heading: "Online Exam System",
    type: "web",
    body: "This group project was for the OOP module in the 2nd Year 1st Semester. I developed the Students Dashboard and Feedback Section, where the student can view and edit his certain details, view the enrolled modules, attend the online exam and view the results of his past exams done through the system and also to send any feedbacks regarding the exam.",
    tools: "#Java Servlets #JSP #MySQL #Bootstrap",
    github: "https://github.com/iamakmal/ExamSystem",
    linkedin:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7004138072615354370?compact=1",
  },
  {
    imgSrc: discussion,
    imgTitle: "Discussion Forum",
    heading: "CodeMe - Discussion Forum",
    type: "web",
    body: "Developed the Discussion Forum in our web application CodeMe (a programming environment for novice programmers) for our Software Project Management Module in the 3rd Year 1st Semester. We used TypeScript and NextJS with Firebase as backend, along with this we used Daisy Ui for styling. In this Discussion Forum any user with a user account can chat in the forum. This was mainly developed as a tool for novice programmers to ask their queries related to programming and anyone who is an expert in that can answer the query. Apart from that user can update any of his messages and also delete any of his previous messages.",
    tools: "#TypeScript #NextJS #Firebase #Daisy UI(Tailwind)",
    github: "https://github.com/IT21292422/Code-Me",
    linkedin:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7133748073494708226?compact=1",
  },
  {
    imgSrc: freshconnect,
    imgTitle: "Fresh Connect",
    heading: "Fresh Connect",
    type: "mobile",
    body: "Developed the Fresh Connect mobile app (To connect customers with nearby local farmers) for User Experience Engineering Module in 3rd Year 1st Semester. I mainly focused on developing the customer home page where the customer can view all his saved shops, the shop page where the customer can view all the products in the shop and also the product page where the customer can view additional details about the product and also contact the farmer from there. In addition to this I developed the chat feature so the customer can directly communicate with the farmer. We developed this mobile app using React Native and used Firebase as backend. Used React-Native-Magnus for styling",
    tools: "#React Native #Expo #Firebase",
    github: "https://github.com/IT21292422/Fresh-Connect",
    linkedin:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7135228489602932736?compact=1",
  },
  {
    imgSrc: bank,
    imgTitle: "Bank Management",
    heading: "E-Wallet - Bank Management",
    type: "mobile",
    body: "This group project was for the Mobile Application Development module in the 2nd Year 2nd Semester. I developed the Bank Management component. Here the user can have multiple bank accounts and manage the respective transactions of each bank account separately. It is also equipped with a search function so that a particular transaction could be searched easily.",
    tools: "#Android Studio #Kotlin #Firebase",
    github: "https://github.com/IT21292422/WalletApp-PilotSquad",
    linkedin:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7062784147399835648?compact=1",
  },
  {
    imgSrc: resource,
    imgTitle: "HR system",
    heading: "HRMS - Resource Management",
    type: "web",
    body: "This group project was for the ITP module in the 2nd Year 2nd Semester. I developed the Resource Management component, here all the resources in the company which can be either devices or stationeries, they can be managed easily, by entering the available quantity, supplier details, and also to assign employees to a particular resource. It is also equipped with a search functionality and also reports are generated based on the available quantity and the number of employees assigned to a resource.",
    tools: "#MERN-(MongoDB, Express, React, Node) #Bootstrap",
    github: "https://github.com/IT21292422/HRMS-Resource-System",
    linkedin:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7062811311100891137?compact=1",
  },
  {
    imgSrc: procurement,
    imgTitle: "Procurement System",
    heading: "Procurement System",
    type: "mobile",
    body: "Developed a simple React Native project for the Case Studies in Software Engineering Module in 3rd Year 1st Semester. This is the manager dashboard in the procurement system of a construction company. Here the manager can approve or decline any order initiated by the site-manager, along with that he can view the status of other orders as well. The manager also can view all the policies, create any new policy, update any existing policy or delete any policy. Used Firebase as backend while used React-Native-Paper for styling.",
    tools: "#React Native #Expo #Firebase",
    github: "https://github.com/IT21292422/Procurement-System",
    linkedin:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7134555549538385920?compact=1",
  },
  {
    imgSrc: landsale,
    imgTitle: "Land Sale",
    heading: "Online Landsale System",
    type: "web",
    body: "This group project was for the IWT module in the 1st Year 2nd Semester. I developed the submit request form, edit request form and My Posts section where the user can see all the posts, he has posted which includes both the request posts and sale posts.",
    tools: "#HTML #CSS #PHP #MySQL",
    github: "https://github.com/IT21292422/Landsale",
    linkedin: "",
  },
  {
    imgSrc: portfolio,
    imgTitle: "Portfolio",
    heading: "Personal Portfolio Website",
    type: "web",
    body: "This is my personal portfolio website. As a developer it is quite mandatory to have a portfolio website, inorder to provide information about yourself and to showcase your best projects with your relevant skills and experience. Keeping this in mind, I created this using only client side technologies. Another main aspect I considered here is the mobile responsiveness, which is also quite mandatory since most of the users access internet through smartphones. The contact me form is connected with Email JS, so once someone submits the form, it will be delivered to my personal email.",
    tools: "#React JS #Material UI #Bootstrap",
    github: "https://github.com/iamakmal/portfolio",
    linkedin:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7086013694580568064?compact=1",
  },
];
