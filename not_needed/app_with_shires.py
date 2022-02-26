from distutils.log import debug
from flask import Flask, render_template 
import pandas as pd
import os 
from prediction import predict

# create app 
app = Flask(__name__)

# engine = create_engine(connection_url)
CSV_ENDPOINT = os.environ.get("CSV_ENDPOINT")


# page routes
    
@app.route("/")
def index():
   return render_template("index.html")

@app.route("/forecast")
def forecast():
    return render_template("forecast.html")

# API routes 

@app.route("/api/StrawYield")
def get_straw_yield():

    df = pd.read_csv(CSV_ENDPOINT)
    data = df.to_dict(orient="records")
    return {"data": data}


# @app.route("/straw_yield")
# def forecast():

#     df = pd.read_csv(CSV_ENDPOINT)
#     data = df.to_dict(orient="records")
#     return {"data": data}


    # recent_temps = pd.read_sql(f"""
    #     select * 
    #     from 
    #         temperature inner join city on temperature.city_id = city.city_id
    #     where
    #         name = 'Perth'
    #     order by datetime desc limit 100
    # """, engine)
    # return {"temps": recent_temps.to_dict(orient="records")}


@app.route("/api/predict/<soilpH>/<rain>/<shire>", methods=["GET"])
def do_predict(soilpH, rain, shire):
    user_input = {
        "tos_field_ph": float(soilpH), 
        "rainfall.yearToDate": float(rain), 
        "shire": shire
    }
    prediction = predict(user_input)

    return {"prediction": prediction}

if __name__ == "__main__":
    app.run(debug=True)
