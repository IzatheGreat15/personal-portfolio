import { useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const data = [
  {
      title: 'Vhire:Booking System',
      image: require('./icons/vhire.png'),
      contri: ['Frontend', 'Backend']
  },
  {
    title: 'AMT Timekeeping System',
    image: require('./icons/amt.png'),
    contri: ['Frontend', 'Backend', 'Design']
  },
  {
    title: 'Event Booking System',
    image: require('./icons/event.png'),
    contri: ['Frontend', 'Backend', 'Design']
  },
  {
    title: 'Contact List System',
    image: require('./icons/contact.png'),
    contri: ['Frontend', 'Backend', 'Design']
  },
  {
    title: 'Whisper Chat App',
    image: require('./icons/whisper.png'),
    contri: ['Frontend', 'Backend', 'Design']
  },
  {
    title: 'Metahueristics Optimization Algorithm Implementation using C++',
    image: require('./icons/algo.jpg'),
    contri: ['Part-time Research Assistant']
  },
]

function Projects() {

    return (
      <section id="projects" className="App">
      <div style={{padding: "25px"}}>
        <br></br><br></br>
        
        <div className="skills reveal" style={{backgroundColor: "white", color: "#116889"}}>
          <h1>
            Projects
          </h1>
        </div>

        <br></br><br></br>

        <div className="card-group mt-5" data-toggle="modal" data-target="#projModal">

            {data.map((data, index) => (
              <div>
                <div className="card mx-2 my-2 reveal no-hover bg-transparent">
                  <div className="card-body">
                    <h5 className="card-title text-center">{data.title}</h5>

                    <div className="proj-container card-img-top">
                        <img src={data.image} alt={data.title} className="image"></img>
                        <div className="proj-overlay">
                          <a className="icon" title="zoom" data-target="#carousel" data-slide-to={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                              <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                              <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
                            </svg>
                          </a>
                        </div>
                    </div>

                    <div className='row mt-3'>
                      {data.contri.map((contri) => (           
                      <div className='col px-1'>
                        <p className='badge w-100'>
                        {contri}
                        </p>
                      </div>
                      ))}
                    </div>
                    
                  </div>
                </div>
              </div>
              ))}

          </div>

        <br></br> <br></br>

        <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" id="projModal" aria-labelledby="myLargeModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div id="carousel" className="carousel slide" data-ride="carousel">
              
                <ol className="carousel-indicators">
                  {data.map(index => {
                    if(index == 0){
                      return <li data-target="#carousel" className='active' data-slide-to={index}></li>
                    } else {
                      return <li data-target="#carousel" data-slide-to={index}></li>
                    }
                  }
                  )}
                </ol>
                <div className="carousel-inner">
                {data.map((data, index) => {
                  if(index == 0){
                    return <div className="carousel-item active">
                    <img src={data.image}  alt={data.title} className="carousel-image"></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{data.title}</h5>
                    </div>
                  </div>
                  } else {
                    return <div className="carousel-item">
                    <img src={data.image}  className="d-block w-100 carousel-image" alt={data.title} ></img>
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{data.title} </h5>
                    </div>
                  </div>
                  }
                })}
                

                </div>
                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>
      </section>
    );
  }
  
  export default Projects;