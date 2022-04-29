let mainCard = document.querySelector('.rating-card');
let secondaryCard = document.querySelector('.secondary-card')
let finalRating = document.querySelector('.final-rating')
let ratingNumbers = document.getElementsByClassName('rating-numbers')
let submitButton = document.querySelector('button')

Array.from(ratingNumbers).forEach(btn => {
    btn.addEventListener('click', e => {
        const rating = e.target.textContent
        finalRating.textContent = rating
        removeClass()
        e.target.classList.add('clicked-number')    
    })
})



submitButton.addEventListener('click', function changeCard(event) {
    event.preventDefault()
    secondaryCard.classList.remove('hidden')
    mainCard.classList.add('hidden')
})

function removeClass(){
Array.from(ratingNumbers).forEach(btn => {
    btn.classList.remove('clicked-number')
})
}