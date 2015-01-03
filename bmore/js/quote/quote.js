/*
 * ----------------------------------------------------------------------------
 * « LICENCE BEERWARE » (Révision 42):
 * @notnark a créé ce fichier. Tant que vous conservez cet avertissement,
 * vous pouvez faire ce que vous voulez de ce truc. Si on se rencontre un jour et
 * que vous pensez que ce truc vaut le coup, vous pouvez me payer une bière en
 * retour. Marius
 * ----------------------------------------------------------------------------
 */

$(function() {
    $.getJSON('/templates/bmore/js/quote/quote.json',function(data) {
	    /* Take Random number between 0 & quote length */
	    var i = Math.floor(Math.random() * data.quotes.length);
	    /* Assigne value to variable for easier display */
	    var text = data.quotes[i].text;
	    var author = data.quotes[i].author;
	    /* Display the quote */
	    $('.quote').html('<p>'+text+'</p><small>'+author+'</small>');
	});
});

