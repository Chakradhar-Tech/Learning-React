import Header from './components/JHeader'
import Card from './components/card'
import travels from './places.js'
function AppJ(){

    const travelData  = travels.map((journey)=>{
    return <Card
                key={journey.id}
                {...journey}

                //Like the image tag we discussed below if the values are same for the props and the object keys in
                // the js passed the whole object using the spread operator that is the same as writing the
                // prop names in the componenet and assigning values to them as it spreads the object keys as props.
                // country ={journey.country}
                // // instead of this [  img={{ src:journey.img.src, alt:journey.img.alt }}  ]
                // //if the prop object and it's keys  and the object and it's keys in the js is the same then
                // // we can just pass the whole object in the js this is called foreshadowing.(like below img)
                // img={journey.img}
                // placeName={journey.placeName}
                // googleMaps={journey.googleMaps}
                // date={journey.date}
                // description={journey.description}
                />
    })

    return(
        <>
        <Header />
        {travelData}
        </>
    )
}
export default AppJ;