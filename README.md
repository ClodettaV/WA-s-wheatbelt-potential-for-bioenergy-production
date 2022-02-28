# Bioenergy - Cereal straw yield analysis
## Purpose and motivation

I have created a website that display analysis of straw yield for cereals in some WA shires, rainfall and soil pH. The objective of this project is to understand the relationship between the data and to calculate the straw yield through an application built with javascript and flask.

## Solution
Icons were taken from: https://www.vecta.io/
![steps](https://user-images.githubusercontent.com/88614132/155975839-cde5793f-2a07-48e9-b001-ef9b3dd54d60.png)

## Model
Scikit-learn Python library has been used to create a multi-linear regression model, where the X are rain and soil and the Y is the straw yield.
In order to quantify our model against input values, the data are split into training and testing data. The model is then fit to the training data and scored by the test data. (Sklearn pre-processing provides a library for automatically splitting up the data into training and testing)
MSE (mean square error) and R2 score have been used to quantify the model. the R2 score gives low accuracy for this model: 0.33, where 1 is the best accuracy.

## Usage
Run the application locally

To run the application locally, simply run
 ```
cd app
python app.py
 ```
 You should see the following which indicates that your app is running locally:
 ```
 Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Restarting with stat
 * Debugger is active!
 ```
 
 ## AWS deployment
Follow these steps to deploy the solution to AWS.

Deploy ETL to AWS Elastic Beanstalk

Build app
Before we can deploy the app, we need to first build the app.
Building the app refers to packaging and compiling the app so that it is in a state that can be readily deployed onto the target platform (e.g. AWS, Heroku, Azure, GCP, etc). We can skip the compilation since Python is not a compiled language, however we still need to package the app.
To package the app, we will run the following lines of code:
windows:
Note for Windows-only - You will need to install 7z (7-zip) which is a command line tool used for zipping files.

Go to https://www.7-zip.org/ and download the version for your windows PC (usually 64-bit x64)
Run the installer .exe file
Add the path C:\Program Files\7-Zip to your environment variables path
