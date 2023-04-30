$(document).ready(function(){
    $("#btnEnviar").click(function(){
        var nombre = $("#nombre").val();
        var celular = $("#celular").val();
        var email = $("#email").val();
        var pais = $("#pais").val();
        var ciudad = $("#ciudad").val();
        if(nombre == ""){
            $("#nomError").css("visibility", "visible");
            return false;
        }
        else{
            $("#nomError").css("visibility", "hidden");
            if(celular == ""){
                $("#celError").css("visibility", "visible");
                return false;
            }
            else{
                $("#celError").css("visibility", "hidden");
                if(email == ""){
                    $("#emailError").css("visibility", "visible");
                    return false;
                }else{
                    $("#emailError").css("visibility", "hidden");
                    if(pais == ""){
                        $("#paisError").css("visibility", "visible");
                        return false;
                    }else{
                        $("#paisError").css("visibility", "hidden");
                        if(ciudad == ""){
                            $("#ciudadError").css("visibility", "visible");
                            return false;
                        }else{
                            $("#ciudadError").css("visibility", "hidden");
                        }
                    }
                }
            }
        }
        
    });
});