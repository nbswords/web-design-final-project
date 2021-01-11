function hello() {
  $.ajax({
    url:'https://freegeoip.app/json/',
    success: function(data){
          var helloString = 'こんぺこ~  \n' + data.ip + ' From:  ' + data.country_code +' ' + data.time_zone + '\nHA↘️HA↗️HA↘️HA↗️';
          alert(helloString);
      },
    dataType: 'json'
  });
}
