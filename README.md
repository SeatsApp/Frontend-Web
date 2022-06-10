# Seat App Frontend Web

## About

### Purpose

This application was developed during an internship at Xplore. The intent of this application is that a cronos employee
could log in through Azure Ad and then get a list of available seats in the office. Here he would then be able to
reserve a seat so that he would definitely have a seat. Once arrived at the seat, the user would scan a QR code and thus
check in at his seat so that the system knows that he is actually present.

### Why React?

We have chosen to build the frontend of the seat app in React. We made this choice because we were already creating an
app in React Native. Besides that we have worked with React in some projects in the past, so we already have some
experience with it.

### How to login

Another important implementation is about security, in order to access the application you have to login on Azure Ad but
at this moment only people with an account from Cronos can login onto the application.

## Development

### Setup

Before launching the app you need to download all the packages. 
You can do this by running: `npm install`.

Start up the application using the code: `npm start`.

**note:** When using development it is important that the backendurl is configured correctly. 
You can find the url in the `src/config/EnvironmentVariableConfig.ts` file.


## Deploy

### Web deploy

To deploy the website on AWS S3. You can do this by first executing: `npm run build`.

Afterwards deploy the created files to AWS S3 by executing this command: `npm run deploy`. 