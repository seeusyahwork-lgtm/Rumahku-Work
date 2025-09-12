import React from 'react'

 const HeaderUser = () => {
  return (
    <div
  className="hero min-h-screen "
  style={{
    backgroundImage:
      "url(https://www.99.co/id/panduan/wp-content/uploads/2022/11/15145025/Rumah-Tipe-36-1120x630.jpeg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold  text-teal-300">Haloo.. </h1>
      <p className="mb-5">
        berikut ini adalah laporan dan progres rumah yang anda sedang bangun.
      </p>
      <button className="btn btn-accent text-white ">Selengkapnya</button>
    </div>
  </div>
  <div className="divider"></div>
</div>
  )
}

export default HeaderUser