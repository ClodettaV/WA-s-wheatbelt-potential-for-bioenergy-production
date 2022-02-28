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
To package the app, we will run the following lines of code:

windows:

Note for Windows-only - You will need to install 7z (7-zip) which is a command line tool used for zipping files.

1. Go to https://www.7-zip.org/ and download the version for your windows PC (usually 64-bit x64)
2. Run the installer .exe file
3. Add the path C:\Program Files\7-Zip to your environment variables path

```
7z a -tzip web-app.zip templates static
7z a -tzip web-app.zip app.py prediction.py requirements.txt Procfile
```

This will produce a .zip file which contains all the code and library packages required to run the app on AWS Lambda.

You can just build the app by running 

windows:
```
build.bat
```
Deploy app

1. In the AWS Console, search for "Elastic Beanstalk".
2. Choose the region closest to you on the top-right e.g. Sydney (ap-southeast-2)
3. Select "Create Application"
4. Configure ELB. Note: Unless specified, leave the settings to default.

   1. Provide the application name
   2. Select Platform: "Python"
   3. Select Platform Branch: "Python 3.8 running on 64bit Amazon Linux 2"
   4. In the "Application code" section, select "Upload your code"

       -Select "Local file" > "Choose file" and select the .zip file you have built


   5. Select "Configure more options"

        1. Select "Software" > "Edit"

           - Provide the environment properties based on your environment variables in _config.template.sh or _config.template.bat.
           - Select "Save"


        2. Select "Capacity" > "Edit"

            - Under "Instance types", ensure that only "t2.micro" is selected.
            - Select "Save"




    6. Select "Create app"
