Car Manufacturer Flowchart Readme
This HTML file provides a visual representation of a hierarchical tree structure using CSS and HTML elements. The tree represents different phases and sub-phases of a project, such as research, planning, designing, manufacturing, and sales/marketing.

Overview
The HTML file consists of a series of nested <div> elements styled using CSS to create a tree-like structure. Each phase and sub-phase of the project is represented by a corresponding <div> element with a class name indicating its category.

File Structure
index.html: This is the main HTML file containing the tree visualization.
style.css: CSS file containing styles for the tree elements.
script.js: JavaScript file containing functions for displaying research details on hover.
HTML Structure
The main container <div> with id wrapper represents the root of the tree.
Each major phase of the project (e.g., Research, Planning, Designing, Manufacturing, Sales/Marketing) is represented by a <div> element with the class entry.
Sub-phases are represented by nested <div> elements within the corresponding major phase <div>.
Each phase or sub-phase is labeled with its name using <span> elements with appropriate class names (e.g., research, planning, designing, manufacturing, sales).
The structure is visually represented using CSS styles, including borders, positioning, and transformations.
Functionality
Research details are displayed dynamically when hovering over the research-related elements.
The JavaScript file (script.js) contains event listeners to handle mouse hover events and display corresponding research details.
Research Details
Research details are stored in a JavaScript object named researchDetails. Each key-value pair represents a research element and its corresponding details. These details are displayed dynamically in a separate container (research-details) when hovering over the research-related elements.

Usage
To use this visualization:

Open index.html in a web browser.
Hover over the research-related elements to view their details.
Explore the tree structure to understand the phases and sub-phases of the project.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Author
[Your Name/Username] - GitHub Profile
Feel free to modify and use this visualization according to your project needs. If you encounter any issues or have suggestions for improvement, please feel free to submit them via GitHub.
