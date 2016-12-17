$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});

document.getElementbyId("dodajEl").addEventListener('click', function() {
  alert("siema");
});
