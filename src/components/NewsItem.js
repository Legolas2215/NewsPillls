import React from 'react'

const NewsItem = (props)=> {

        let { title, imageurl, desc, url, author, dateTime } = props;
        return (

            <div className="my-3">
                <div className="card" >
                    <img className="card-img-top" src={imageurl?imageurl:"https://images.hindustantimes.com/img/2022/05/12/1600x900/PM_Modi_1652338062156_1652338072712.jpg"} alt="Card image cap" />
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