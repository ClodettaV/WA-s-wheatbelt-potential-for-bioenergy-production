var renderTemperature = (metric, years) => $.get(`/api/temperature`, (res) => {
    var data = [
        {
            x: res.temps.map(row => new Date(row.datetime + "Z")), 
            y: res.temps.map(row => row.main_temp), 
            type: "line"
        }
    ]
    Plotly.newPlot("temp", data)
});

$(document).ready(()=>{
    renderTemperature()
});