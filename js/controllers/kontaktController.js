angular.module('jecaApp')

.controller('kontaktCtrl', function () {

    // Mapa

    $(document).ready(function () {
        $(".see-map").click(function () {
            $(this).fadeOut(600);
        })
    });


    let userName = document.getElementsByName('username')[0];
    let userEmail = document.getElementsByName('usermail')[0];
    let userPhone = document.getElementsByName('userphone')[0];
    let userMessage = document.getElementsByName('usermessage')[0];
    let main = document.getElementById('main');
    

    $("button[type='submit']").on('click', function(e){
        e.preventDefault();

        if (userName.value != "" && userEmail.value != "" && userPhone.value != "" && userMessage.value != "") {
            console.log('radi');
        } else {
            main.innerHTML = '<h3>Sva polja su obavezna!!!</h3>';
            return false;
        }
        

        $.ajax({
            url : "php/poruke.php",
            type : "post",
            data : {
                username : $("input[type='text']").val(),
                usermail : $("input[type='email']").val(),
                userphone : $("input[type='number']").val(),
                usermessage : $("textarea").val()
            }
        })
        .done(function(res){
            $("#main").html(res)
            userName.value = "";
            userEmail.value = "";
            userPhone.value = "";
            userMessage.value = "";
        })
    })
});