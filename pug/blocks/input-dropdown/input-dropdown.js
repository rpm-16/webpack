const $drops = $('.js-input-dropdown');
[...$drops].forEach((drop) => {initDropOption(drop)})

function initDropOption(drop){
  $(drop).on('click', showDrop);
  // $('input', $(drop)).on('focus', function(e) {$(e.currentTarget).blur()});

  function hideDrop() {
    $(drop).removeClass('input-dropdown--expanded');
    $(document).off('click', hideDrop);
  }

  function showDrop(e) {
    $(e.currentTarget).addClass('input-dropdown--expanded');
    $(document).on('click', hideDrop);
  }


}

