import React from 'react'

const CH_panel2 = () => {
  return (
    <div className="hero bg-base-200 min-h-auto">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://plus.unsplash.com/premium_photo-1681692092648-9243865930fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold text-right">Implementasi Perancangan dan Perencanaan</h1>
          <p className="py-6 text-right" >
            Implementasikan perancangan dan perencaan yang anda telah buat anda juga bisa
            mengawasi 
          </p>
          <div className=" float-right">
          <button className="btn btn-accent  text-white ">Detailnya</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CH_panel2