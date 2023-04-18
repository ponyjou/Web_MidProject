$(function () {
    var startDate = new Date();
    setStartDate(startDate);
    generateCourseTable();
  
    $("#startDate").on("change", function () {
      var selectedDate = new Date(Date.parse($(this).val()));
      setStartDate(selectedDate);
      generateCourseTable();
    });
  
    $("#addButton").on("click", function () {
      var newTopic = $("#newTopic").val();
      topic.push(newTopic);
      generateCourseTable();
      $("#newTopic").val("");
    });
  
    function setStartDate(date) {
      startDate = date;
    }
  
    function generateCourseTable() {
      $("#courseTable")
        .empty()
        .append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
      var topicCount = topic.length;
  
      var millisecsPerDay = 24 * 60 * 60 * 1000;
  
      for (var x = 0; x < topicCount; x++) {
        var newDate = new Date(startDate.getTime() + x * millisecsPerDay);
        var formattedDate = newDate.toLocaleDateString("zh-TW", {
          month: "short",
          day: "numeric",
        });
  
        $("#courseTable").append(
          $("<tr>")
            .append($("<td>").text(x + 1))
            .append($("<td>").text(formattedDate))
            .append($("<td>").text(topic[x]))
        );
      }
    }
  });
  