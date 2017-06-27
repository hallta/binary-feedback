# binary-feedback

## Installation
1. Install node
1. Install npm
1. ```git clone <this project>```
1. ```cd <this project>```
1. npm install
1. ```npm start```

## If you're using the default Google Sheet for storage
1. ```cp config/google-feedback-template.json config/google-feedback.json```
1. Edit the newly copied .json file
1. Follow "Step 1": https://developers.google.com/sheets/api/quickstart/nodejs#step_1_turn_on_the_api_name 
1. ```node bin/google_init.js```
1. Reference https://developers.google.com/sheets/api/quickstart/nodejs#step_4_run_the_sample 

## Usage
### Web Input
http://localhost:3000/?key=<feedback key>

