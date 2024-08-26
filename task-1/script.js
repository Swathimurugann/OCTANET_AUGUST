document.addEventListener('DOMContentLoaded', () => {
    // Get all buttons with class 'view-books' and 'add-to-cart'
    const viewBooksButtons = document.querySelectorAll('.view-books');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Add event listeners to 'View Books' buttons
    viewBooksButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('View Books button clicked!');
            // You can add functionality to display books or redirect here
        });
    });

    // Add event listeners to 'Add to Cart' buttons
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Book added to cart!');
            // You can add functionality to add items to cart here
        });
    });
});
