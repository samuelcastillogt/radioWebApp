import './header.css'
export const Header = () =>{
    return(
        <header className='header'>
            <div className='header__container'>
                <div className='header__branding'>
                    <div className='header__logo'>
                        <span className='logo-icon'>📻</span>
                        <h1>RadioLibre</h1>
                    </div>
                    <p className='header__subtitle'>Radios Online Gratis</p>
                </div>
                <nav className='header__nav'>
                    <button>Explore</button>
                    <button>Categories</button>
                </nav>
            </div>
        </header>
    )
}

