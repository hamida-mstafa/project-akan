function fn(){
    var d = new Date();

    var date = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value) - 1;
    var year = parseInt(document.getElementById("year").value);

    if (day < 0 || day > 31) {
        document.getElementsByClassName("dayerror").innerHtml = "Enter valid date";
        return false;
    } else if (date == "") {
        document.getElementsByClassName("dayerror").innerHtml = "This field cannot be empty";
        return false;
    } else {
        d.setDate(date);
    }

    if (month < 0 || day > 12) {
        document.getElementsByClassName("montherror").innerHtml = "Enter valid month";
        return false;
    } else if (month == "") {
        document.getElementsByClassName("montherror").innerHtml = "This field cannot be empty";
        return false;
    } else {
        d.setMonth(month);
    }

    if (month < 0) {
        document.getElementsByClassName("yearerror").innerHtml = "Enter valid year";
        return false;
    } else if (month == "") {
        document.getElementsByClassName("yearerror").innerHtml = "This field cannot be empty";
        return false;
    } else {
        d.setYear(year);
    }

    var day = d.getDay();

    function gender() {
        var ismale = document.getElementById('male').checked;
        var isfemale = document.getElementById('female').checked;

        if (isfemale && ismale == true) {
            document.getElementById("check-boxerror").innerHTML = "both cannot be checked. Select one";
        }
        else if (ismale && isfemale == false) {
            document.getElementById("check-boxerror").innerHTML = "cannot be empty select your gender";
        }
        else if (ismale == true) {
            return ismale;
        }
        else if (isfemale == true) {
            return isfemale;
        }
    }

    gender();

    var males = [{ "Sunday": "Kwasi", "Monday": "Kwadwo", "Tuesday": "Kwabena", "Wednesday": "Kwaku", "Thursday": "Yaw", "Friday": "Kofi", "Saturday": "Kwame" }];

    var females = [{ "Sunday": "Akosua", "Monday": "Adwoa", "Tuesday": "Abenaa", "Wednesday": "Akua", "Thursday": "Yaa", "Friday": "Afua", "Saturday": "Ama" }];
    

}