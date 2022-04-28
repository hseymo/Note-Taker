# **Note Taker**

![Badge](https://img.shields.io/badge/license-MIT-blue)
![Badge](https://img.shields.io/badge/npm-v 8.5.0-red)

## **Table of Contents**
---
  - [License](#license)
  - [Installation](#installation)
  - [Packages](#packages)
  - [Description](#description)
  - [Usage](#usage)
  - [Screenshots](#screenshots)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions?](#questions)

<br>

## **License** 
---
[MIT License](./LICENSE) <br>

MIT License

Copyright (c) 2022 Haley Seymour

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 <br>

<br>

## **Installation** 
---
To install this project, start by forking this repository on Github. Clone this project to your machine by using the "git clone + URL" command. Open the project with your favorite text editor, like VS Code (in your terminal, first type "cd foldername" then "code ."). This project includes a package.json file that specifies dependencies for this project, so be sure to run "npm install". Specifically, this project relies on express and uuid npm packages.

<br>

## **Packages** 
---
Node.js: Express, UUID. 

<br>

## **Description**
---
The motivation of this project is to create a note taking application to assist a small business owner (or anyone else) whome wishes to organize their thoughts and keep track of tasks that they need to complete. When you open this application, you can click "Get Started" to see a screen where you can add new notes, view old notes, or trash old notes. Notes contain a title in addition to their text, for easy visual representation. Notes are saved in a server file, so if page is closed and reopened they will still be visible. In creating this project, I learned how the client and server side interact to communicate with eachother.  <br><br>
Please click this [link](https://whispering-springs-36995.herokuapp.com/) to view the deployed application. <br><br>

## **Usage** 
---
To use the front-end app, click the "Get Started" button from the home screen. Enter a new note title and text (both are required to save a note). Click the floppy-disk icon to save the note. It will populate in the list of notes on the left screen. Click on any note to view it. If you wish to delete it, click the trash icon for that note. If you wish to type another note, click the plus logo to add another. If you wish to view dev, open in your integrated terminal and enter "node server.js" or "nodemon server.js" if nodemon is installed. It will begin to listen on port 3001. Open "localhost:3001" and/or "localhost:3001/notes" in your browser or with API client such as Insomnia. <br>

### **Screenshots**
--- 
Homepage <br>
![homepage example](./assets/screenshots/homepage)
<br><br>
Notes page <br>
![notes page example](./assets/screenshots/notes)

<br>

## **Contributing** 
---
This project is my own work with the help and starter code from the University of Washington Web Development Bootcamp. Contribute as you wish. Please contact me with questions. Directions for future development include modifying existing notes with HTML put requests. Additionally tests may be developed.

<br>

## **Tests** 
---
No tests have been developed for this program.

<br>

## **Questions?** 
---
Please contact me on Github at [hseymo](https://github.com/hseymo) or by [email](mailto:haleycseymour@comcast.net).
