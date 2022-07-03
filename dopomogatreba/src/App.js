import picture from "./images/phone.png";
import picture_shadow from "./images/phone-shadow.png";
import "./App.css";

function App() {
  return (
    <section className="get-mobile-app">
      <div className="container">
        <div className="row get-app">
          <div className="col-md-6 get-app__column_image">
            <img src={picture} alt="Mobile phone" className="image" />

            <img
              src={picture_shadow}
              alt="Mobile phone"
              className="image-shadow"
            />
          </div>
          <div className="col-md-6 get-app__column_text">
            <div className="get-app__title">Download our mobile app</div>
            <div className="get-app__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              autem, alias eius incidunt commodi expedita nam reiciendis Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              laborum
            </div>
            <div className="button-area">
              <a href="#">
                <div className="button google">
                  <div className="button__caption">Get it now</div>
                  <div className="button__app-market">Google Play</div>
                </div>
              </a>
              <a href="#">
                <div className="button apple">
                  <div className="button__caption">Get it now</div>
                  <div className="button__app-market">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
