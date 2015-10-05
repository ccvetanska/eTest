function countdown(minutes, editor) {
    var seconds = 60;
    var mins = minutes
    function tick() {
        //The script expects an element with an ID = "counter".  
        var counter = document.getElementById("counter");
        var current_minutes = mins - 1
        seconds--;
        if ((current_minutes <= 0 && seconds <= 0) || minutes <= 0) {
            counter.innerHTML = "Time is out.";
            if (typeof editor !== "undefined") {
                editor.options.readOnly = true;
            }
            else if (document.getElementById("field1") !== null && typeof document.getElementById("field1") !== "undefined") {
                document.getElementById("field1").disabled = true;
                document.getElementById("field2").disabled = true;
                document.getElementById("field3").disabled = true;



            }
            else if (document.getElementsByName("inputTextBox") !== null && typeof document.getElementsByName("inputTextBox") !== "undefined") {
                document.getElementsByName("inputTextBox")[0].disabled = true;
            }


            return;
        }
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (mins > 1) {
                countdown(mins - 1);
            }
        }
    }
    tick();
}