import React from 'react'

export default function Footer({ data }) {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 ">
   

         
        {/* Copyright */}
        <div className="text-center mt-4">
          <h2>{data.copyright}</h2>
        </div>
    
    </footer>
  )
}
