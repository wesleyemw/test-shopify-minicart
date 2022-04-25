

document.addEventListener("DOMContentLoaded", function() {
    let offcanvasElement = document.querySelector( '.minicart-outer' );

    document.addEventListener( 'click', function( event ) {
        if ( event.target.matches( '.open-offcanvas' ) ) {
            offcanvasElement.classList.toggle( 'closed' );
            document.body.classList.toggle( 'no-scroll' );
        }

    });


});