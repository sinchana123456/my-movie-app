import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import classes from './ProductDetail.module.css';
import { AiFillStar } from "react-icons/ai";

const ProductDetail = () => {
    const location = useLocation();
    const {data} = location.state;

    const imageUrl = [
        {url: 'https://www.imdb.com/title/tt0468569/mediaviewer/rm1319007489/'},
        {url: 'https://www.imdb.com/title/tt0110912/mediaviewer/rm1126166785/'},
        {url: 'https://www.imdb.com/title/tt0109830/mediaviewer/rm2196052224/'},
        {url: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm1743887873/'},
        {url: 'https://www.imdb.com/title/tt0068646/mediaviewer/rm1808768000/'},
        {url: 'https://www.imdb.com/title/tt1375666/mediaviewer/rm1718345216/'},
        {url: 'https://www.imdb.com/title/tt0133093/mediaviewer/rm4023839232/'},
        {url: 'https://www.imdb.com/title/tt0102926/mediaviewer/rm1754711296/'},
        {url: 'https://www.imdb.com/title/tt0109830/mediaviewer/rm3456926976/'},
        {url: 'https://www.imdb.com/title/tt0111161/mediaviewer/rm515582720/'},
        ];

    return (
        <Fragment>
            <div className={classes.product}>
                <div className={classes.wrapper}>
                    {imageUrl.map((item) => (
                        <img
                            className={classes['product-img-list']}
                            src={item.url}
                            alt='imgs'
                        />
                    ))}
                </div>
                <img
                    src={data.imageUrl}
                    alt='product-imgs'
                    className={classes['product-img']}
                />
                <div className={classes['product-details']}>
                    <h1>{data.title}</h1>
                    <p style={{ color: 'black' }}>${data.price}</p>
                    <div className={classes['product-rating']}>
                        4.3 <AiFillStar />
                    </div>
                    <p>
                    A film also called a movie, motion picture, 
                    moving picture, picture, photoplay or (slang) flick – is a work of visual art that
                     simulates experiences and otherwise communicates ideas, stories, perceptions, feelings,
                      beauty, or atmosphere through the use of moving images. These images are generally 
                      accompanied by sound and, more rarely, other sensory stimulations.[1] 
                      The word "cinema", short for cinematography, is often used 
                    to refer to filmmaking and the film industry, and to the art form
                     that is the result of it.
                     The moving 
                    images of a film are created by photographing actual scenes with a motion-picture camera,
                     by photographing drawings or miniature models using traditional animation techniques, 
                     by means of CGI and computer animation, or by a combination of 
                     some or all of these techniques, and other visual effects.

                    Before the introduction of digital production, series of still images were recorded 
                    on a strip of 
                    chemically sensitized celluloid (photographic film stock), usually at the rate 
                    of 24 frames per second. The images are transmitted through a movie projector at 
                    the same rate as they were recorded, with a Geneva drive ensuring that each frame 
                    remains still during its short projection time. A rotating shutter causes stroboscopic
                     intervals of darkness, but the viewer does not notice the interruptions due to flicker
                      fusion. The apparent motion on the screen is the result of the fact that the visual 
                      sense cannot discern the individual images at high speeds, so the impressions of the 
                      images blend with the dark intervals and are thus linked together to produce the 
                      illusion of one moving image. An analogous optical soundtrack (a graphic recording 
                      of the spoken words, music and other sounds) runs along a portion of the film 
                      exclusively reserved for it, and was not projected.

                    Contemporary films are usually fully digital through the entire process of production,
                     distribution, and exhibition.
                    </p>
                    <h3>Reviews</h3>
                        <li>Contemporary films are usually fully digital through the entire process of production,
                     distribution, and exhibition.</li>
                        <li>Contemporary films are usually fully digital through the entire process of production,
                     distribution, and exhibition.</li>
                        <li>Contemporary films are usually fully digital through the entire process of production,
                     distribution, and exhibition.</li>
                        <li>Contemporary films are usually fully digital through the entire process of production,
                     distribution, and exhibition.</li>
                    </div>
            </div>
        </Fragment>
        
    )
};

export default ProductDetail;