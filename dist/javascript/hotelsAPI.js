class HotelFinder{
    constructor(){
        this.country = 'Nigeria';
    }
    async getHotel(hotelSearch){
        const hotelResponse = await fetch(`https://hotels-apis.herokuapp.com/api/v2/${hotelSearch}`);
        const hotel = await hotelResponse.json();
        return{
            hotel
        }
    }
}