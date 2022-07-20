const data = [
    {
        title: 'HTML',
        image: require('../icons/html.png'),
        link: 'https://www.w3schools.com/html/'
    },
    {
        title: 'CSS',
        image: require('../icons/css.png'),
        link: 'https://www.w3schools.com/css/default.asp'
    },
    {
        title: 'JavaScript',
        image: require('../icons/js.png'),
        link: 'https://www.w3schools.com/js/default.asp'
    },
    {
        title: 'PHP',
        image: require('../icons/php.png'),
        link: 'https://www.php.net/'
    },
    {
        title: 'MySQL',
        image: require('../icons/sql.png'),
        link: 'https://www.mysql.com/'
    },
    {
        title: 'jQuery',
        image: require('../icons/jy.png'),
        link: 'https://jquery.com/'
    },
    {
        title: 'Laravel',
        image: require('../icons/laravel.png'),
        link: 'https://laravel.com/'
    },
    {
        title: 'React',
        image: require('../icons/react.png'),
        link: 'https://reactjs.org/'
    },
    {
        title: 'Bootstrap',
        image: require('../icons/bs.png'),
        link: 'https://getbootstrap.com/'
    },
]

function Webdev(){
    return (
        <div>
        <span style={{fontWeight: "bold"}} className="fs-2 mb-3 reveal">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bezier reveal" viewBox="0 2 16 16">
            <path fill-rule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
            <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"/>
          </svg> &nbsp;
          <span className="smol-icon reveal">
            Web Development
          </span>
        </span>

        <br></br> <br></br>

        <div className="card-group">

            {data.map((data) => (
              <div>
                <a className="name" href={data.link} target="_blank" rel="noopener noreferrer">
                <div className="card mx-2 my-2 reveal">
                  <div className="card-body">
                    <div className="cont" >
                      <div className="box"></div>
                      <div className="box overlay shadow p-3 mb-5 bg-white rounded">
                        <img src={data.image} alt={data.title}></img>
                      </div>
                    </div>
                    <br></br>
                    <h5 className="card-title text-center">{data.title}</h5>
                  </div>
                </div>
                </a>
              </div>
            ))}

        </div>
      </div>
    );
}

export default Webdev;