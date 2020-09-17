import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
      <div classname="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/OWY0MGNjMDYt/OWY0MGNjMDYt-NDBlMDAxNWQt-w3000._CB407772346_.jpg"
            alt=""
          />
          <div className="home_row">
            {/* Product Component 1 */}
            <Product
              id="1"
              title="Koi Beauty Derma Roller Microneedling"
              price={15.99}
              image="https://m.media-amazon.com/images/I/41pxzT1bUzL._AC_SR500,460_.jpg"
              rating={5}
            />
            {/* Product Component 2 */}
            <Product
              id="2"
              title="Amazon Halo - Health & wellness band"
              price={64.99}
              image="https://images-na.ssl-images-amazon.com/images/I/619W3AHrt4L._AC_SL1000_.jpg"
              rating={4}
            />
            {/* Product Component 3 */}
            <Product
              id="8"
              title="Personalized Kids Easter Basket, Custom Easter Basket, Kids Easter Basket, Easter Bucket, Monogram Easter Basket"
              price={26.00}
              image="https://images-na.ssl-images-amazon.com/images/I/611BY6q68zL._SL1100_.jpg"
              rating={3}
            />
          </div>

          <div className="home_row">
            {/* Product Component 1 */}
            <Product
              id="3"
              title="Mr. Beer Complete Beer Making 2 Gallon Starter Kit, Premium Gold Edition, Brown"
              price={47.02}
              image="https://images-na.ssl-images-amazon.com/images/I/81YcxCKrnmL._AC_SL1500_.jpg"
              rating={4}
            />
            {/* Product Component 2 */}
            <Product
              id="4"
              title="Beer-infused Hot Sauce Variety 3-pack (Includes Asian Sriracha, Garlic Serrano, & Roasty Chipotle) - Craft Beer Gift, Hot Sauce Gift Set, Beer Sauce"
              price={24.99}
              image="https://images-na.ssl-images-amazon.com/images/I/919Az-BspvL._SL1500_.jpg"
              rating={3}
            />

            <Product
              id="9"
              title="Keter Pacific Cool Bar Outdoor Patio Furniture and Hot Tub Side Table with 7.5 Gallon Beer and Wine Cooler"
              price={79.99}
              image=" https://images-na.ssl-images-amazon.com/images/I/71xb0bVeV5L._AC_SL1500_.jpg"
              rating={4}
            />

            <Product
              id="10"
              title="DIKAOU Led Flame Table Lamp, Torch Atmosphere Bluetooth Speakers, Outdoor Portable Stereo Speaker with HD Audio and Enhanced Bass"
              price={39.99}
              image="https://images-na.ssl-images-amazon.com/images/I/61gNH4m8oXL._AC_SL1448_.jpg"
              rating={5}
            />

           
           
          </div>
          <div className="home_row">
            <Product
              id="6"
              title="Echo Dot (3rd Gen) with Clock with Mandalorian The Child stand"
              price={79.94}
              image="https://images-na.ssl-images-amazon.com/images/I/51ka-NCLsXL._AC_SL1000_.jpg"
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id="7"
              title="Ring Smart Lighting – Floodlight, Wired, Outdoor Motion-Sensor Security Light, Black"
              price={69.99}
              image="https://images-na.ssl-images-amazon.com/images/I/51xCgCNbZlL._SL1000_.jpg"
              rating={3}
            />
            <Product
              id="5"
              title="Vremi Beverage Refrigerator and Cooler - 100 to 120 Can Mini Fridge with Glass Door for Soda Beer or Wine - Auto Defrost Drink Dispenser Machine"
              price={269.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81o4hOD2XCL._AC_SL1500_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
