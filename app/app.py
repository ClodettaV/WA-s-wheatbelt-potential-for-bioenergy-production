from distutils.log import debug
from flask import Flask, render_template 
import pandas as pd
import os 
from prediction import predict

# create app 
app = Flask(__name__)

# engine = create_engine(connection_url)
# CSV_ENDPOINT = os.environ.get("CSV_ENDPOINT")
# print (CSV_ENDPOINT)

# page routes
    
@app.route("/index")
def index():
   return render_template("index.html")

@app.route("/objectives")
def objectives():
   return render_template("objectives.html")

@app.route("/data")
def data():
   return render_template("data.html")

@app.route("/conclusions")
def conclusions():
   return render_template("conclusions.html")

@app.route("/forecast")
def forecast():
    return render_template("forecast.html")

# API routes 

# @app.route("/api/StrawYield")
# def get_straw_yield():
# #     print (CSV_ENDPOINT)
#     df = pd.read_csv(CSV_ENDPOINT)
#     data = df.to_dict(orient="records")
#     return {"data": data}


# prediction route
@app.route("/api/predict/<soilpH>/<rain>", methods=["GET"])
def do_predict(soilpH, rain):
    user_input = {
        "tos_field_ph": float(soilpH), 
        "rainfall.yearToDate": float(rain), 
        }
    prediction = predict(user_input)

    return {"prediction": prediction}

if __name__ == "__main__":
    app.run(debug=True)
