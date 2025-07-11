import reactLogo from '../assets/react.svg'

function Header(){
    return(
        <>
        <header className='bg-dark py-1 border-bottom border-secondary'>
            <div className='container-fluid d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <img src={reactLogo} alt="react-icon" className="p-2" />
                    <span className='text-info fw-semibold'>React Facts</span>
                </div>

                <ul className='nav'>
                    <li className='nav-item'><a href="#" className='nav-link text-white'>Pricing</a></li>
                    <li className='nav-item'><a href="#" className='nav-link text-white'>About</a></li>
                    <li className='nav-item'> <a href="#" className='nav-link text-white'>Contact</a></li>
                </ul>
            </div>
        </header>
        </>
    )
}

export default Header;