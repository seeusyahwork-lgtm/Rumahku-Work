import React from 'react'
import CH_panel from '../components/home/CH_panel'
import CH_panel1 from '../components/home/CH_panel1'
import CH_panel2 from '../components/home/CH_panel2'

function Home() {
    return (
        <div className='container m-auto'>
        <div 
            className="hero bg-base-200 min-h-svh"
            style={{
                backgroundImage:
                    "url(https://plus.unsplash.com/premium_photo-1681823671640-c8a69d37d446?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-teal-300">Hai Semua..</h1>
                    <p className="mb-5">
                        mulailah membuat impian rumah anda menjadi nyata dengan diawali perencanaan yang terstrukture dan tercatat bersama kami yang akan membimbingnya
                    </p>
                    <button className="btn btn-accent text-white">Mulai Sekarang</button>
                </div>
            </div>
        </div>
        <CH_panel />
        <CH_panel1 />
        <CH_panel2 />
        </div>
    )
}

export default Home