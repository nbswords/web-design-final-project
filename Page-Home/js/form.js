$('#google-form').submit(function (e) {
     //擋掉form默認事件
     e.preventDefault();

     // 確認必填欄位是否填寫
     if ($('#name').val() && $('#wish').val()) {
       $.ajax({
         url: "https://docs.google.com/forms/d/e/1FAIpQLSc6H7dqGOF3rritMI3pAqbXyOWZoWjixcfhyBn1-3PmDo1YjQ/formResponse",
         crossDomain: true,
         data: {
           "entry.985282747": $('#name').val(),
           "entry.580958649": $('#wish').val()
         },
         type: "POST",
         dataType: "JSONP",
         complete: function () {
           //完成後把這些欄位清空
           $('#name').val('')
           $('#wish').val('')
         }
       });
     }
     else{
       alert("Please fill out name and wish");
     }
   });
