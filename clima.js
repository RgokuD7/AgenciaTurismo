$(document).ready(function () {
  const diasSemana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];
  $.get(
    "https://api.weatherbit.io/v2.0/current/daily?city_id=3874787&lang=es&key=71c1eedf6fcb41b68219f19c92fcab7e",
    function (data) {
      $.each(data.data, function (i, item) {
        const fecha = new Date();
        const mes = fecha.getMonth() + 1;
        const dia = fecha.getDate();
        const fechaTexto = `${mes}/${dia}`;
        const diaActual = diasSemana[fecha.getDay()];
        $(".clima-hoy").append("<h2>" + diaActual + " " + fechaTexto + "</h2><img src='" + item.weather.icon + "'><h3>" + item.temp + "°C</h3>");
      });
    }
  );
  $.get(
    "https://api.weatherbit.io/v2.0/forecast/daily?city_id=3874787&lang=es&days=10&key=71c1eedf6fcb41b68219f19c92fcab7e",
    function (data) {
      $.each(data.data, function (i, item) {
        if (i >= 1) {
          const fecha = new Date(item.datetime);
          const mes = fecha.getMonth() + 1;
          const dia = fecha.getDate();
          const fechaTexto = `${mes}/${dia}`;
          const diaActual = diasSemana[fecha.getDay()];
          $(".lista-clima").append(
            "<div class='dia'> <h2>" +
              diaActual +
              " " +
              fechaTexto +
              "</h2><p> Min: " +
              Math.round(item.min_temp) +
              " Max: " +
              Math.round(item.max_temp) +
              "</p></div>"
          );
        }
      });
    }
  );
});
