import chefLogo from '../assets/chefLogo.png'
function Header(){
    return(
        <>
        <header className='d-flex justify-content-center align-items-center bg-white border border-white shadow-sm pb-1'>
            <img src={chefLogo} alt="Logo"/>
            <p className="fw-bold fs-3 pt-2">Chef Claude</p>
        </header>
        </>
    )
}

export default Header;