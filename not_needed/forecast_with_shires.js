$("#forecast").click(() =>{
    var soilpH = $("#soilpH").val();
    var rain = $("#rain").val();
    var shire = $("#shire").val();
    console.log(soilpH)
    console.log(rain)
    console.log(shire)
    $.getJSON(`/api/predict/${soilpH}/${rain}/${shire}`, (predicted) => { 
        var straw_yield = Math.floor(predicted.prediction)
        var img_src = ""
        var straw_yield_text = ""
        if(straw_yield > 2.5){
            img_src = "static/img/hot.png"
            straw_yield_text = `Lucky you! This shire is very productive! ${straw_yield}.`
        } else if (straw_yield > 1.5){
            img_src = "static/img/perfect.png"
            straw_yield_text = `It is ok growing your cereals here. ${straw_yield}.`
        } else { 
            img_src = "static/img/cold.png"
            straw_yield_text = `It is not a productive area. Plant your cereals somewhere else. ${straw_yield}.`
        }

        $("#forecasted-strw_yield").html(`
        <div class="card" style="width: 18rem;">
            <img src="${img_src}" class="card-img-top">
            <div class="card-body">
            <p class="card-text">${straw_yield_text}</p>
            </div>
        </div>
        `)
    });
});
