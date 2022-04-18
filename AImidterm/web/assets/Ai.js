const URL = "./assets/my_model/";

let model, maxPredictions, highestProbability_name;

var highestProbability = 0.0;

async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();
    const flip = true;
    console.log("INIT COMPLETE");
}

async function predict() {
    var image = document.getElementById('imagePreview')
    const prediction = await model.predict(image, false);
    for(let i = 0; i < maxPredictions; i++) {
        // console.log(prediction[i])
        // console.log(prediction[i].probability.toFixed(2))
        if(prediction[i].probability.toFixed(2) > highestProbability){
            highestProbability_name = prediction[i].className;
        }
    }
    console.log(highestProbability_name);
    if(highestProbability_name == "고구마"){
        window.location.href = "./results/sweet_potato.html"
    }else if(highestProbability_name =="감자"){
        window.location.href = "./results/potato.html"
    }else if(highestProbability_name =="토마토"){
        window.location.href = "./results/tomato.html"
    }else if(highestProbability_name =="돼지감자"){
        window.location.href = "./results/pig_potato.html"
    }else if(highestProbability_name =="고추"){
        window.location.href = "./results/chili.html"
    }
}


window.onload = function () {
    init();
}