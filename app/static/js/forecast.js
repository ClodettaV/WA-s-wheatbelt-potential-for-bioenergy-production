d3.select("#forecast").on("click",() =>{
    var soilpH = d3.select("#soilpH").node().value;
    var rain = d3.select("#rain").node().value;
    // var shire = $("#shire").val();
    console.log(soilpH)
    console.log(rain)
    // console.log(shire)
    d3.json(`/api/predict/${soilpH}/${rain}`).then( (predicted) => { 
        var straw_yield = Math.round(predicted.prediction*100)/100
        console.log(straw_yield)
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

        d3.select("#forecasted-strw_yield").html(`
        <div class="card" style="width: 18rem;">
            <img src="${img_src}" class="card-img-top">
            <div class="card-body">
            <p class="card-text">${straw_yield_text}</p>
            </div>
        </div>
        `)
    });
});