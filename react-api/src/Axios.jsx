import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {

    const [books,setBooks] = useState([])

    useEffect(()=>{
        axios.get("https://reactnd-books-api.udacity.com/books",{
            headers: {
                'Authorization' : 'whatever-you-want'
            }
        }).then((res)=>{
            setBooks(res.data.books)
            console.log('data: ', books)
        }).catch((err)=>{
            console.log('err', err)
        })
    },[])
  return (
    <div>
        {books.map((e)=>{
        return <div key={e.id}>
        <h2 className="title" style={{textAlign: 'left'}}>{e.title}</h2>
        <div style={{display: "flex" , alignItems: 'center'}}>
            <img src={e.imageLinks.thumbnail} alt="#"  style={{width: "30vw", height: "40vh"}}/>
            <p className="description" style={{textAlign: 'justify', margin: '0 2vw 0 2vw'}}>{e.description}</p>
        </div>
        <p className="author"  style={{textAlign: 'left' , fontStyle: "italic"}}>Authors: {e.authors[0]}</p>
        <hr style={{border: '0.1px solid grey'}}/>
        </div>
        })}
    </div>
  )
}

export default Axios