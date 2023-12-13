import React from 'react'

export default function Cards(props) {
  return (
    <div className="container-fluid d-flex" id="cards">
<div className="card ms-5" id="card1">
  <img className="card-img-top" src="https://www.w3schools.com/bootstrap5/img_avatar1.png" alt="Card image"></img>
  <div className="card-body">
    <h4 className="card-title">{props.name}</h4>
    <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
</div>
<div className="card ms-5" id="card1">
  <img className="card-img-top" src="https://www.w3schools.com/bootstrap5/img_avatar1.png" alt="Card image"></img>
  <div className="card-body">
    <h4 className="card-title">John Doe</h4>
    <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
</div>
<div className="card ms-5" id="card1">
  <img className="card-img-top" src="https://www.w3schools.com/bootstrap5/img_avatar1.png" alt="Card image"></img>
  <div className="card-body">
    <h4 className="card-title">John Doe</h4>
    <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">See Profile</a>
  </div>
</div>
</div>
  )
}
