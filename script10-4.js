$(document).ready(function (e) {

  // 1. klik op thumbnail afvangen
  $('#strip').on('click', 'img', function () {

    // 2. bron van nieuwe afbeelding alvast opslaan in variabele.
  const source = $(this).attr('src');
    const titel = $(this).attr('title');
    console.log(titel);
    document.getElementById('tekst').innerHTML = '<h3>'+titel+'</h3>';

    // 3. grote afbeelding uitfaden
    $('#container img').fadeOut('fast', function () {
      // 4. na uitfaden de src verwisselen en nieuwe afbeelding infaden.
      $(this).attr('src', source).fadeIn('fast');
    }); //fadeOut
  }); //click
}); //ready
