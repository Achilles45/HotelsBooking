const hotels = new HotelFinder;
const ui = new UI;
const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchText = e.target.value;
    if (searchText !== '') {
        //Make HTTP Call here
        hotels.getHotel(searchText)
        .then(data=>{
            ui.showHotel(data.hotel)
        })
    }
    clearFields();
})

//Function to clear fields
function clearFields(){
    document.querySelector('#search-form--input').value = '';
}