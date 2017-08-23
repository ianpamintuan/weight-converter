$(document).ready(function () {
    
    function calculate() {

        var amount;
        var measurement = $('#measurements').find(":selected").text();
        var grams = 0;
        var kgs = 0;
        var lbs = 0;
        var oz = 0;

        if($('#amount').val()) {
            amount = $('#amount').val();
        } else {
            amount = 0;
        }

        if(measurement == "Grams") {

            grams = amount;
            kgs = grams / 1000;
            lbs = grams * 0.0022046;
            oz = grams * 0.035274;

        } else if(measurement == "Kilograms") {

            kgs = amount;
            grams = kgs * 1000;
            lbs = kgs * 2.2046
            oz = kgs * 35.274;

        } else if(measurement == "Pounds") {

            lbs = amount;
            grams = lbs / 0.0022046;
            kgs = lbs / 2.2046;
            oz = lbs * 16;

        } else {
            
            oz = amount;
            grams = oz / 0.035274;
            kgs = oz / 35.274;
            lbs = oz * 0.062500;

        }

        $('#grams').text(grams);
        $('#kgs').text(kgs);
        $('#lbs').text(lbs);
        $('#oz').text(oz);

    }

    $('#amount').on('input', function(e) {
        calculate();
    });

    $('#measurements').on('change', function(e) {
        calculate();
    });


});