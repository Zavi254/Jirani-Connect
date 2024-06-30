import "../styles/Discover.css";

const Discover = () => {
  return (
    <section id="discover">
      <div className="discover-container">
        <img src="/assets/order-food-image.svg" alt="" className="discover-image" />
        <div className="discover-content">
          <h2>DISCOVER NEIGHBORS</h2>
          <p>
            Jirani Connect is a platform designed to foster community
            connections with Hakika Estate. It allows residents to showcase
            their businesses and goods, making it easier for neighbors to
            discover and support local enterprises. Whether you’re looking to
            expand your business reach or simply prefer to buy from trusted
            neighbors. Jirani Connect bridges the gap, creating a thriving local
            economy.
          </p>
          <button className="join-button discover-join-button">Join Waitlist</button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
