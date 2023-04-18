window.onload=function(){
    //document.write("HelloJavaScript");
};



$(function () {
    $("input").on("click", function () {
      // 获取列表长度和随机索引
      var numberOfListItem = $("li").length;
      var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
  
      // 更新标题文本
      $("h1").text($("li").eq(randomChildNumber).text());
  
      // 根据选中的项目更改图片源
      var imgSrc = "";
      var selectedFood = $("li").eq(randomChildNumber).text();
      switch (selectedFood) {
        case "拉麵":
          imgSrc = "ramen.jpg";
          break;
        case "滷肉飯":
          imgSrc = "braised_pork_rice.jpg";
          break;
        case "水餃":
          imgSrc = "dumplings.jpg";
          break;
      }
  
      // 更新图片并显示
      $("#foodImage").attr("src", imgSrc).show();
    });
  });

