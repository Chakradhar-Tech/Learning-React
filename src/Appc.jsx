import Header from './components/cHeader.jsx'
import Main from './components/mainC.jsx'
function AppC(){

    function signUp(formData){
        const email = formData.get("email")
        const password = formData.get("password");
        const description = formData.get("description");
        const radio = formData.get("fruit");
        console.log(email, password, description,radio)
    }

    return(
        <>
          <Header />
          <Main />

          <section className='container  border border-black rounded-3 p-4 mb-3 bg-white'>
            <form action={signUp} >
            <label htmlFor='email' className='form-label'>Email: </label>
            <input id='email' defaultValue="chakri@gmail.com" className='form-control' type='email' name='email' placeholder='user@gmail.com' />

            <label htmlFor='password' className='form-label'>Password: </label>
            <input id='password' defaultValue="123456789" className='form-control' type='password' name='password' />

            <label htmlFor="description" className='form-label'>Description: </label>
            <textarea name="description" defaultValue="this is for the old values to update used in the react" className='form-control' id="description"></textarea>
            <br />

            <fieldset className='dotted-border rounded p-3 w-50 mb-2'>
                <legend className='w-auto px-2 fw-semibold'>Select Fruit</legend>
                     <div className='form-check'>
                <label htmlFor='radio1' className='form-check-label me-2'> orange </label>
                <input type="radio" className='form-check-input' name="fruit" id="radio1" value="orange" />
                </div>

                 <div className='form-check'>
                    <label htmlFor='radio2' className='form-check-label me-2'> apple </label>
                    <input type="radio" className='form-check-input' defaultChecked={true} name="fruit" id="radio2" value="apple"/>
                </div>

                 <div className='form-check'>
                    <label htmlFor='radio3' className='form-check-label me-2'> mango </label>
                    <input type="radio" className='form-check-input' name="fruit" id="radio3" value="mango" />
                </div>
            </fieldset>
       
               <fieldset className='dotted-border rounded p-3 w-50'>
                <legend className='w-auto px-2 fw-semibold'>Select Fruit</legend>
                     <div className='form-check'>
                <label htmlFor='checkbox1' className='form-check-label me-2'> orange </label>
                <input type="checkbox" className='form-check-input' name="fruit" id="checkbox1" value="Badam" />
                </div>

                 <div className='form-check'>
                    <label htmlFor='checkbox2' className='form-check-label me-2'> apple </label>
                    <input type="checkbox" className='form-check-input' defaultChecked={true} name="Raisins" id="checkbox2" value="apple"/>
                </div>

                 <div className='form-check'>
                    <label htmlFor='checkbox3' className='form-check-label me-2'> mango </label>
                    <input type="checkbox" className='form-check-input' name="fruit" id="checkbox3" value="cashewgit" />
                </div>
            </fieldset>

            <br />



            <button className='btn btn-primary'>Submit</button>
            </form>
          </section>
        </>
    )
}

export default AppC;