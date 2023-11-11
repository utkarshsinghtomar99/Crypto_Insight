import { useState } from "react";
import { Link } from "react-router-dom"
import logo from "../assets/Logo.png";


const Navbar = () =>
{
    const [ searchTerm, setSearchTerm ] = useState( '' );

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        setSearchTerm( '' );
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid">
                    <img src={logo} width={'22px'} className="me-1" />
                    <Link className="navbar-brand p-0 m-0" to="/">
                        <span className="m-0 p-0" >Crypto Insight</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <form className="d-flex ms-auto" onSubmit={handleSubmit}>
                            <input
                                className="form-control me-2"
                                // type="search"
                                placeholder="Search Coin Here"
                                aria-label="Search"
                                onChange={( e ) => setSearchTerm( e.target.value )}
                                value={searchTerm}
                            />
                            <Link to={`/search/${ searchTerm }`} onClick={() => setSearchTerm( '' )}><button className="btn btn-outline-primary" type="submit">Search</button></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
