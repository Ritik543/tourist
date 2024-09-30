import Card from "./Card"


function Tours({tours,removeTour}){
    console.log(tours);
    console.log(removeTour);
    return(
        <div className="container">
            <div><h2 className="title">Plan with Me </h2></div>
            
                <div className="cards"> {
tours.map((tour) => {
    return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
})
                 }
            </div>
        </div>
    )

}
export default Tours;