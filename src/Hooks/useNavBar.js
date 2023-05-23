import $ from 'jquery'

export default function getNavBar(location) {
  if (location == '/') {
    return function navHome() {
      $("#navbar").css({ "opacity": "0", "z-index": "-1" })
      const aboutSectionScroll = $("#aboutSection").offset()?.top;
      $(window).on("scroll", function () {
        const getScroll = $(this).scrollTop();
        if (getScroll >= aboutSectionScroll - 10)
          $("#navbar").css({ "opacity": "1", "z-index": "20" })
        else
          $("#navbar").css({ "opacity": "0", "z-index": "-1" })
      })
    }
  }
  else if (location == '/AboutEngineer') {
    return function anotherPath() {
      $(window).off('scroll');
      $("#navbar").css({ "opacity": "0", "z-index": "-1" })
    }
  }
  else {
    return function anotherPath() {
      $(window).off('scroll');
      $("#navbar").css({ "opacity": "1", "z-index": "20" })
    }
  }

}
