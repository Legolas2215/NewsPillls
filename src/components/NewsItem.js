import React from 'react'

const NewsItem = (props)=> {

        let { title, imageurl, desc, url, author, dateTime } = props;
        return (

            <div className="my-3">
                <div className="card" >
                    <img className="card-img-top" src={imageurl?imageurl:"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><small className="text-muted">By {author?author:'Anonymous'} </small></p>
                        <p className="card-text"><small className="text-muted">{new Date(dateTime).toGMTString()}</small></p>
                        <p className="card-text">{desc}</p>
                        <a href={url} className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem