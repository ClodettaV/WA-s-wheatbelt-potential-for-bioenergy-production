# Setting up 

Before running `train_model.ipynb` you will first need to create a `config.py` file with the following variables: 

```python
DB_USER="secret_goes_here"
DB_PASSWORD="secret_goes_here"
DB_SERVER_NAME="secret_goes_here"
DB_DATABASE_NAME="secret_goes_here"
```

The `config.py` file will contain secrets that can be used by train_model to pull data from the postgres database. 
