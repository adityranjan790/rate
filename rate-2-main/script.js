document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const selectedRating = document.getElementById('selected-rating');
    const submitButton = document.getElementById('submit-rating');
    const ratingDetails = document.getElementById('rating-details');
    const modal = document.getElementById('rating-modal');
    const closeButton = document.querySelector('.close-button');
    const reviewButton = document.getElementById('review-button');
    let rating = 0;
    let ratingData = {
        rating: null,
        date: null
    };

    stars.forEach(star => {
        star.addEventListener('click', () => {
            rating = star.getAttribute('data-value');
            updateStars(rating);
            selectedRating.textContent = `You selected ${rating} star${rating > 1 ? 's' : ''}`;
        });

        star.addEventListener('mouseover', () => {
            updateStars(star.getAttribute('data-value'));
        });

        star.addEventListener('mouseout', () => {
            updateStars(rating);
        });
    });

    submitButton.addEventListener('click', () => {
        if (rating > 0) {
            ratingData.rating = rating;
            ratingData.date = new Date().toLocaleString();
            displayRatingDetails();
            alert('Successfully submitted');
            modal.style.display = 'none';
        } else {
            alert('Please select a rating.');
        }
    });

    reviewButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    function updateStars(rating) {
        stars.forEach(star => {
            if (star.getAttribute('data-value') <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    function displayRatingDetails() {
        ratingDetails.innerHTML = `
            <h2>Rating Details</h2>
            <p>Rating: ${ratingData.rating} star${ratingData.rating > 1 ? 's' : ''}</p>
            <p>Date: ${ratingData.date}</p>
        `;
    }
});
