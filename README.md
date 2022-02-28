# Bioenergy - Cereal straw analysis
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
