import react from "react";
import NotesA from "./NotesA.jsx";

function Notes() {
  return (
    <div className="notes">
      <NotesA
        title="Definition of React"
        description="React is a library of web and native user interfaces."
      />

      <NotesA
        title="Definition of Internet"
        description="The Internet is the global system of interconnected computer networks that uses the Internet protocol suite to communicate between networks and devices."
      />

      <NotesA
        title="Definition of HTML"
        description="HTML stands for Hypertext Markup Language. It is a markup language for the web that defines the structure of web pages."
      />

      <NotesA
        title="Definition of CSS"
        description="CSS stands for Cascading Style Sheets. It is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML)."
      />

      <NotesA
        title="Definition of Javascript"
        description="JavaScript is a programming language commonly used in web development2. Originally developed by Netscape as a means to add dynamic and interactive elements to websites"
      />

      <NotesA
        title="Definition of Express"
        description="Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. "
      />

      <NotesA
        title="Definition of Node.js"
        description="Node.js is a cross-platform, open-source server environment that can run on Windows, Linux, Unix, macOS, and more. Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser"
      />

      <NotesA
        title="Definition of Next.js"
        description="Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application."
      />

      <NotesA
        title="Definition of API"
        description="An application programming interface (API) is a way for two or more computer programs to communicate with each other. It is a type of software interface, offering a service to other pieces of software."
      />

      <NotesA
        title="Definition of Server"
        description="A server is a computer or system that provides resources, data, services, or programs to other computers, known as clients, over a network."
      />

      <NotesA
        title="Definition of RESTFUL API"
        description="A RESTful API is an architectural style for an application program interface ( API) that uses HTTP requests to access and use data. That data can be used to GET, PUT, POST and DELETE data type."
      />

      {/* <NotesA title="Definition of" description="" />

      <NotesA title="Definition of" description="" />
      <NotesA title="Definition of" description="" /> */}
    </div>
  );
}

export default Notes;
