# Cypress Test Automation
### Install and setup
- In order to run this project you need to make sure you have [nodejs](https://nodejs.org/en/download/) install
```sh
$ node -v
v14.15.3
```
- Run the command to clone the project to your device
```sh
$ git clone https://github.com/mckjs/testautomation.git
``` 
- Open your editor and import project **testautomation**
- Install all the packages you need that is in the package.json file...
```sh
$ cd testautomation
$ npm install 
```
- Execute test by simply run the following command
```sh
$ npx cypress run

```
## Report (Test Evidence)
 ###### After executing the following folders get get generated
 -  cypress\screenshot
 -  cypress\videos
 -  mochawesome-report

## Test Scenario
 -  Invictus Navigation
 -  Register an account
 -  Login with registered account verify Balance
