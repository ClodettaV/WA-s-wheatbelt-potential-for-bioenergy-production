$("#forecast").click(() =>{
    var pressure = $("#pressure").val();
    var humidty = $("#humidty").val();
    var city = $("#city").val();
    console.log(pressure)
    console.log(humidty)
    console.log(city)
    $.getJSON(`/api/predict/${pressure}/${humidty}/${city}`, (predicted) => { 
        var temp = Math.floor(predicted.prediction)
        var img_src = ""
        var temp_text = ""
        if(temp > 30){
            img_src = "static/img/hot.png"
            temp_text = `It is a hot sunny day. The temperature is expected to be ${temp}.`
        } else if (temp > 15){
            img_src = "static/img/perfect.png"
            temp_text = `It is a perfect day to be out. The temperature is expected to be ${temp}.`
        } else { 
            img_src = "static/img/cold.png"
            temp_text = `It is a shivering cold day. The temperature is expected to be ${temp}.`
        }

        $("#forecasted-temp").html(`
        <div class="card" style="width: 18rem;">
            <img src="${img_src}" class="card-img-top">
            <div class="card-body">
            <p class="card-text">${temp_text}</p>
            </div>
        </div>
        `)
    });
});
