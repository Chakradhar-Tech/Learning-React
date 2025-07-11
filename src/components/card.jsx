import LocationLogo from '../assets/icons8-location.gif'
import DefaultLogo from '../assets/react.svg'
function Card({
    country="Country",
    googleMaps="https://maps.google.com/",
    placeName="Name",
    date="Date",
    description="Default description",
    img= {src:DefaultLogo, alt:"Image"} }){
    return(
        <>
        <div className=' m-1 ms-4 mt-3 mb-4 ps-2 pt-3 d-flex flex-row border-light shadow rounded-3' style={{ maxWidth: '900px' }}>
            <div>
                <img src={img.src} alt={img.alt} width={150} height={150} className='rounded-3' />
            </div>
            <div className='container '>
                <img src={LocationLogo} alt="locationLogo" width={20} height={20} />
                <span className='ms-2 mt-1'>
                    <b>{country}</b>
                    <a href={googleMaps}
                    className='ms-2 text-secondary' target='_blank'>View on Google Maps</a>
                </span>
                <h3 className='fw-bold mt-1'>{placeName} </h3>
                <p className='fw-semibold '>{date}</p>
                <p className='mt-0'>{description}</p>
            </div>
        </div>
        </>
    )
}

export default Card;