import React from 'react'
import photosNew from "./image.json"
import "./gallery.scss"


const Gallery = () => {
  return (
    <div className='gallery-photo'>
        {photosNew.map((photo,i)=> <div><a href={require(`../assets/images/${photo.name}`)}><img src={require(`../assets/images/${photo.name}`)} alt="" /></a></div> )}
  
    </div>
  )
}

export default Gallery