import logo from '../assets/icons8-logo.svg'
function Header(){
    //   const nums =[1,2,3,4,5]
    //     const square = nums.map((data)=>data*data);
    //     console.log(square);

    //     const names = ["alice", "bob", "charlie", "danielle"]
    //     const cap =names.map((data)=> data[0].toUpperCase() + data.slice(1))
    //     console.log(cap)

    //     const pokemon =["pikachu", "greninja", "diago"]
    //     const pTag = pokemon.map((data)=> <p>{data}</p>)
    //     console.log(pTag)

    return(
        <>
            <header className="d-flex justify-content-center m-1 p-1 text-center text-white bg-danger rounded-3">
                <img src={logo} alt="Icon" />
                <h5 className='pt-3 ps-1'>My Jounery Details</h5>
            </header>
        </>
    )
}

export default Header;