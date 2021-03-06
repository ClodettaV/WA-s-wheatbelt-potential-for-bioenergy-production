import pandas as pd 
import joblib 

def predict(user_inputs):
    # load model binaries 
    model = joblib.load("static/py/model.sav")
    # encoder = joblib.load("static/py/encoder.sav")
    X_scaler = joblib.load("static/py/x_scaler.sav")
    y_scaler  = joblib.load("static/py/y_scaler.sav")

    # get the user input data 
    soilpH = user_inputs["tos_field_ph"]
    rain = user_inputs["rainfall.yearToDate"]
            
    # store soilpH and rain into df 
    input_df = pd.DataFrame({
        "tos_field_ph": [soilpH],
        "rainfall.yearToDate": [rain]
    })

    # combine both df's using indexes 
    # df = input_df.merge(shire_df, left_index=True, right_index=True)

    # scale the X input df 
    X_scaled = X_scaler.transform(input_df)

    # obtain prediction (y) 
    prediction_scaled = model.predict(X_scaled)
    
    # scale prediction to human readable terms 
    prediction = y_scaler.inverse_transform(prediction_scaled)
    return prediction [0][0]
    