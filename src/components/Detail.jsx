import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieById } from '../utils/utils'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Detail() {

  const path = useParams()
  console.log(path) //{detailId: movie.id}

  const [detail, setDetail] = useState([])

  const getDetail = async () => {
    const detail = await getMovieById(path.id);
    setDetail(detail);
  }

  useEffect(() => {
    getDetail()
  }, [])

  return (
    <div>
      {
        detail ? 
          <div>
              <Link to='/home'>
                <button>GO BACK</button>
              </Link>
              <img src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`} alt={detail.title} />
              <div>
                <h1>{detail.title}</h1>
                <div>
                  <span>{detail.release_date}</span>
                  <span>{detail.vote_average}</span>
                </div>
                <div>
                  <p>{detail.overview}</p>
                </div>
              </div>
            </div>
        : null
      }  
    </div>
  )
}

export default Detail