$(document).ready(
    function () {
        // add event listener (clicks, etc.)
        $("input[name=week]").change(dayDesc)

        function dayDesc() {
            switch ($("input[name=week]:checked").val())
            {
                case "monday": $("p").text("Get up early and get ready for the new week!");
                break;
                case "tuesday": $("p").text("Make a cup of coffee and eat some cereal before your tennis tournament :)");
                break;
                case "wednesday": $("p").text("You're going bowling with Trump and Biden after school");
                break;
                case "thursday": $("p").text("Dentist appointment!!! :/");
                break;
                case "friday": $("p").text("Forget everything you learned in school this week and go party!");
                break;
                case "saturday": $("p").text("Netflix & Ice Cream day");
                break;
                case "sunday": $("p").text("Church with your grandparents");
                break;
                default: $("p").text("Please select a day");
            }

        }




    }
)