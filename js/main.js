$(document).ready(function() {
  var currentFloor = 2;
  var currentFlatNum = 1;
  let usCurrentFloor
  var floorPath = $(".home-image path");
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  var modal = $(".modal");
  var modalFloorCounter = $(".modal-counter")
  var modalCloseButton = $(".modal-close-button");
  var flatsPath = $(".modal-image path");
  var flatsLink = $(".flat-item a");
  var viewFlatsButton = $(".view-flats");

  floorPath.on('mouseover', function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  floorPath.on('click', toggleModal);
  modalCloseButton.on('click', toggleModal);
  viewFlatsButton.on('click', toggleModal);

  // Flat plan hovering
  flatsPath.on('mouseover', function () {
    flatsLink.removeClass("current-link");
    currentFlatNum = $(this).attr("data-flat-num");
    $(`[data-flat-num=${currentFlatNum}]`).toggleClass("current-link");
  });

  flatsPath.on('mouseleave', function() {
    flatsLink.removeClass("current-link")
  });

  // Flat link hovering
  flatsLink.on('mouseover', function () {
    flatsPath.removeClass("current-flat");
    currentFlatNum = $(this).attr("data-flat-num");
    $(`[data-flat-num=${currentFlatNum}]`).toggleClass("current-flat");
  });

  flatsLink.on('mouseleave', function() {
    flatsPath.removeClass("current-flat")
  });

  counterUp.on('click', function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US',
        {
          minimumIntegerDigits: 2,
          useGrouping: false
        });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  });

  counterDown.on('click', function () {
    if (currentFloor > 2) {
      currentFloor --;
      usCurrentFloor = currentFloor.toLocaleString('en-US',
        {
          minimumIntegerDigits: 2,
          useGrouping: false
        });
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })

  function toggleModal() {
    modalFloorCounter.text(currentFloor)
    modal.toggleClass('is-open');
  }

  // function highlightOpposite(obj, attr, tglCls) {
  //   obj.removeClass(tglCls);
  //   currentFlatNum = $(this).attr(attr);
  //   $(`[${attr}=${currentFlatNum}]`).toggleClass(tglCls);
  // };
});
