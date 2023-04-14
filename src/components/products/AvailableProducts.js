import Products from "./Products";
import classes from "./AvailableProducts.module.css";
import { Fragment, useContext } from "react";
import CartContext from "../store/cart-context";
import axios from "axios";

const AvailableProducts = (props) => {
    const cartCntx = useContext(CartContext);

    const productsArr = [
        {
            "id": 1,
            "title": "The Dark Knight",
            "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
            "director": "Christopher Nolan",
            "producer": "Christopher Nolan, Emma Thomas, Charles Roven",
            "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            "ratings": 9,
            "genre": ["Action", "Crime", "Drama"],
            "poster": "https://www.imdb.com/title/tt0468569/mediaviewer/rm1319007489/",
            "release_date": "2008-07-18",
            "price": 152
          },
          {
            "id": 2,
            "title": "Pulp Fiction",
            "cast": ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
            "director": "Quentin Tarantino",
            "producer": "Lawrence Bender",
            "description": "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            "ratings": 8.9,
            "genre": ["Crime", "Drama"],
            "poster": "https://www.imdb.com/title/tt0110912/mediaviewer/rm1126166785/",
            "release_date": "1994-10-14",
            "price": 154
          },
          {
            "id": 3,
            "title": "Forrest Gump",
            "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
            "director": "Robert Zemeckis",
            "producer": "Wendy Finerman, Steve Tisch, Steve Starkey",
            "description": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
            "ratings": 8.8,
            "genre": ["Drama", "Romance"],
            "poster": "https://www.imdb.com/title/tt0109830/mediaviewer/rm2196052224/",
            "release_date": "1994-07-06",
            "price": 142
          },
          {
            "id": 4,
            "title": "The Shawshank Redemption",
            "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            "director": "Frank Darabont",
            "producer": "Niki Marvin",
            "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "ratings": 9.2,
            "genre": ["Drama"],
            "poster": "https://www.imdb.com/title/tt0111161/mediaviewer/rm1743887873/",
            "release_date": "1994-09-23",
            "price": 142
          },
          {
            "id": 5,
            "title": "The Godfather",
            "cast": ["Marlon Brando", "Al Pacino", "James Caan"],
            "director": "Francis Ford Coppola",
            "producer": "Albert S. Ruddy",
            "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
            "ratings": 9.2,
            "genre": ["Crime", "Drama"],
            "poster": "https://www.imdb.com/title/tt0068646/mediaviewer/rm1808768000/",
            "release_date": "1972-03-24",
            "price": 175
          },
          {
            "id": 6,
            "title": "Inception",
            "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
            "director": "Christopher Nolan",
            "producer": "Christopher Nolan, Emma Thomas",
            "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            "ratings": 8.8,
            "genre": ["Action", "Adventure", "Sci-Fi"],
            "poster": "https://www.imdb.com/title/tt1375666/mediaviewer/rm1718345216/",
            "release_date": "2010-07-16",
            "price": 148
          },
          {
            "id": 7,
            "title": "The Matrix",
            "cast": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
            "director": "Lana Wachowski, Lilly Wachowski",
            "producer": "Joel Silver",
            "description": "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
            "ratings": 8.7,
            "genre": ["Action", "Sci-Fi"],
            "poster": "https://www.imdb.com/title/tt0133093/mediaviewer/rm4023839232/",
            "release_date": "1999-03-31",
            "price": 136
          },
          {
            "id": 8,
            "title": "The Silence of the Lambs",
            "cast": ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
            "director": "Jonathan Demme",
            "producer": "Edward Saxon, Kenneth Utt, Ron Bozman",
            "description": "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
            "ratings": 8.6,
            "genre": ["Crime", "Drama", "Thriller"],
            "poster": "https://www.imdb.com/title/tt0102926/mediaviewer/rm1754711296/",
            "release_date": "1991-02-14",
            "price": 118
          },
          {
            "id": 9,
            "title": "Forrest Gump",
            "cast": ["Tom Hanks", "Robin Wright", "Gary Sinise"],
            "director": "Robert Zemeckis",
            "producer": "Wendy Finerman, Steve Tisch, Steve Starkey",
            "description": "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
            "ratings": 8.8,
            "genre": ["Comedy", "Drama", "Romance"],
            "poster": "https://www.imdb.com/title/tt0109830/mediaviewer/rm3456926976/",
            "release_date": "1994-07-06",
            "price": 142
          },
          {
            "id": 10,
            "title": "The Shawshank Redemption",
            "cast": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
            "director": "Frank Darabont",
            "producer": "Niki Marvin",
            "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            "ratings": 9.3,
            "genre": ["Drama"],
            "poster": "https://www.imdb.com/title/tt0111161/mediaviewer/rm515582720/",
            "release_date": "1994-09-23",
            "price": 142
          }
    ];

    const newEmailId = localStorage.getItem('email')
        const getCart = async () => {
            try {
                const res = await axios.get(`https://crudcrud.com/api/71562618bffb4c31820bc73ff27bfa04/cart${newEmailId}`);
                
                const cartData = res.data;
                const cartLength = res.data.length;
                console.log(res.data);
                console.log(cartLength);

                cartCntx.cartFetch(cartLength, cartData);
            } catch (err) {
                console.log(err);
            }
        };

        getCart();

    const productList = productsArr.map((item) => (
        <ul key={item.id}>
          <Products data={item} />
        </ul>
      ));
      

    return(
        <Fragment>
            <div className={classes.container}>
                {productList}
            </div>
        </Fragment>

    )
};

export default AvailableProducts;