import React from 'react'

export default function Content() {
  return (
    <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Escritorio aplicación impulso local en construcción</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Layout</a></li>
            <li className="breadcrumb-item active">Fixed Layout</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          {/* Default box */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Titulo</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                  <i className="fas fa-minus" />
                </button>
                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="card-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla possimus eveniet magni nesciunt quidem alias minus unde quia impedit, laboriosam quo, cupiditate totam assumenda nisi veritatis earum mollitia perferendis aperiam.
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              Pie de página
            </div>
            {/* /.card-footer*/}
          </div>
          {/* /.card */}
        </div>
      </div>
    </div>
  </section>
  {/* /.content */}
</div>



  )
}
