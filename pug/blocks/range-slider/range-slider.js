import 'ion-rangeslider';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';

$('.range-slider__input').ionRangeSlider({
    step: 100,
    type: "double",
    skin: "round",
    hide_min_max: true,
    hide_from_to: true,
    onChange: updateValue,
});

function updateValue(data) {
    document.getElementById("range-note").innerHTML = `${data.from} - ${data.to}`;
}