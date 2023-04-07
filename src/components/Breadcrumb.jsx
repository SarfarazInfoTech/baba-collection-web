import React from 'react'

const Breadcrumb = ({item1, item2, item3}) => {
  return (
    <div className="container-fluid">
      <div className="row px-xl-5">
        <div className="col-12">
          <nav className="breadcrumb bg-light mb-30">
            <a className="breadcrumb-item text-dark" href="#">{item1}</a>
            <a className="breadcrumb-item text-dark" href="#">{item2}</a>
            <span className="breadcrumb-item active">{item3}</span>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb