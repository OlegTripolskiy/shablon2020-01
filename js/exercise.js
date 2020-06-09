// === УПРАЖНЕНИЯ по АНГЛИЙСКОМУ ЯЗЫКУ ==========
$("document").ready(function () {
  
    // ======= SORTABLE =========================
    $('.sort').sortable({ // Все группы с классом sort поддерживают СОРТИРОВКУ.
      connectWith: ".sort", // Элементы ГРУПП можно перемещать между группами имеющими класс '.sort'
      items: "li:not(.title)" // Можно перемещать ТОЛЬКО элементы, не имеющие класс '.title'
    }).disableSelection();
    
    // ==== ПРОВЕРКА УПРАЖНЕНИЯ ===============
  /**/
    $('#check-1').click(function(){
        $('span.hidden').each(function(indx){
            let el_hidd = $(this).html();
            let el_ul = $(this).parents('.sort').attr('id');
            if (el_hidd === el_ul) {
                $(this).parent().css('backgroundColor','#9CEF00');
                //alert(' СОВПАДАЕТ');
            } else {
                $(this).parent().css('backgroundColor','#FF9900');
                //alert(' НЕТ');
            }
        });
    });

}); // Конец $("document").ready