$.getJSON('js/cirriculum.json', function(d) {
   var $main = $('#main');
   var $BtnRow = $("<div></div>", {class: "row"});

   $.each(d.days, function() {
      var day = this;

      var $DayBtn = $('<a></a>', {id: day.day, class: "col-sm-3 btn btn-info"});
      $DayBtn.html("Day " + day.day);
      $DayBtn.on('click', function(e) {
         showDayUnits(e.target.id);
      });
      $BtnRow.append($DayBtn);

      var $DaysBox = $("<div></div>", {id: "box_" + day.day, class: "col-sm-6 daybox"});
      $DaysBox.html("<h2>Day " + day.day + "</h2>");
      var $UnitBox = $("<div></div>", {id: "cont_" + day.day, class: "panel panel-info"});

      $.each(day.units, function() {
         var unit = this;
         var $UnitHeader = $("<div></div>", {class: "panel-heading"});
         var $UnitTitle = $("<h3></h3>", {class: "panel-title"});
         $UnitTitle.html(unit.unit + "<br>" + unit.title);
         $UnitHeader.html($UnitTitle);
         var $UnitRefs = $("<div></div>", {class: "panel-body"});

         $.each(unit.refs, function() {
            var ref = this;
            $aRef = $("<a></a>", {href: ref.href, target: "_onblank"});
            $aRef.html(ref.name + ";<br>");

            $UnitRefs.append($aRef);
         });

         $UnitBox.append($UnitHeader);
         $UnitBox.append($UnitRefs);
      });

      $DaysBox.append($UnitBox);
      $DaysBox.hide();
      $main.append($DaysBox);
   });
   $main.prepend($BtnRow);
   $('#box_1').show();
   $("#1").addClass('active');
});

function showDayUnits(intDayNum) {
   $('.btn').removeClass('active');
   $("#" + intDayNum).addClass('active');

   $('.daybox').hide();
   $DayBox = $('#box_' + intDayNum);
   console.log($DayBox.attr('id'));
   $DayBox.show();
}

