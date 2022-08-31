# PrinterPartPicker
## Background
Printer Part Picker is an application based on the website https://pcpartpicker.com/ but for 3D printers in place of PCs. It is common for PC enthusiasts to build PCs from bare components, but this is not the case with 3D printer enthusiasts. Instead, a 3D printers is bought as a "base" printer and parts are bought and exchanged to make custom machines. For this reason, the application is designed to take an initial printer as a base printer and set the initial list of components to that of the selected base printer. 

## Initial Wireframes
The application was planned to have a home page user interface as pictured below. As the project progressed, this design was altered for simplicty, though this is one of the main areas the application could be improved. In place of having a interactive user interface on the index pages, a unique looking home page was added so that the user could always recenter themselves on a unique looking page. 

![Page_1](https://user-images.githubusercontent.com/92054622/187588879-a56970f6-9c4e-41de-b602-eea1fd644860.jpg)

User Stories:
As a user I want to easily be able to get to the main page so that I can always center myself.
As a user I want to receive feedback whenever an action is done so that I am aware of what the database is doing.
As a user I want to be able to always read the information on screen in a presentable format so that I always know where to click.

## The Application
The initial goal of this applicaiton is a full CRUD capablility application that allows 3D printer enthusiasts to plan upgrades and builds. A mongo database was incorporated to hold the data of users entering new parts or printers. 

The initial page of the application is called the home page and is always accessible in the header. At this page, the user can make new items, view items, or explore recent builds from other users. This page is meant to be the one-stop-shop for most of the functionality in the application. 
