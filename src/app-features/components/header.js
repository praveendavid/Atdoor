const Header = (props) => {
  return (
    <header id='header'>
      <div className='row'>
        <div className='intro'>
          <div className='overlay'>
            <div className='container'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a style={{ border: '2px solid #fff' }}
                  href='#about'
                  className='btn btn-custom btn-lg'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;