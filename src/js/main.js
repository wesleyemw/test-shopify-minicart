

document.addEventListener("DOMContentLoaded", function() {
    let offcanvasElement = document.querySelector( '.minicart-outer' );

    document.addEventListener( 'click', function( event ) {
        if ( event.target.matches( '.open-offcanvas' ) ) {
            offcanvasElement.classList.toggle( 'closed' );
            document.body.classList.toggle( 'no-scroll' );
        }

    });


});

/// inserting vue reactive and hoping 
const store = Vue.reactive({
    state: {
        cartState: []
    },

    getCart() {
    axios.get('/cart.js')
        .then(response => {
        this.state.cartState.unshift(response.data)
        })
        .catch(error => {
        console.log(error)
        })
    }
})