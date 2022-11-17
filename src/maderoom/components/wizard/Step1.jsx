export const Step1 = () => {
    return (
        <>  
            <div className="container">
                <div className="card mt-3 rounded-3">
                    <div className="card-header">
                        <h4>Contactanos</h4>
                        <p>Ingresa tus datos para ponernos en contacto contigo</p>
                    </div>

                    <div className="card-body">
                        <form>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3"/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                                <div className="col-sm-10">
                                <input type="" className="form-control" id="inputPassword3"/>
                                </div>
                            </div>
                            <fieldset className="row mb-3">
                                <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                <div className="col-sm-10">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                    First radio
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                    Second radio
                                    </label>
                                </div>
                                <div className="form-check disabled">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                                    <label className="form-check-label" htmlFor="gridRadios3">
                                    Third disabled radio
                                    </label>
                                </div>
                                </div>
                            </fieldset>
                            <div className="row mb-3">
                                <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label" htmlFor="gridCheck1">
                                    Example checkbox
                                    </label>
                                </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
