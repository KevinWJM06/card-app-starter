import "./home.css";

export default function Home() {
  return (
    <main className="home-container">
      <div className="home-content">
        <h1 className="home-title">Card Management App</h1>
        <p className="home-subtitle">Manage your digital cards with ease</p>
        
        <div className="instructions-section">
          <h2 className="instructions-title">How to Use</h2>
          <div className="instructions-list">
            <div className="instruction-item">
              <h3>View Cards</h3>
              <p>Browse all your stored cards in one place</p>
            </div>
            <div className="instruction-item">
              <h3>Add New Cards</h3>
              <p>Create and store new card entries</p>
            </div>
            <div className="instruction-item">
              <h3>Edit Cards</h3>
              <p>Update existing card information</p>
            </div>
            <div className="instruction-item">
              <h3>Delete Cards</h3>
              <p>Remove cards you no longer need</p>
            </div>
          </div>
        </div>

        <div className="backend-placeholder">
          <h3>Backend Connection</h3>
          <p>This app connects to a database to store and retrieve your cards.</p>
          <div className="placeholder-box">
            <p>[Backend API endpoints will be connected here]</p>
          </div>
        </div>

        <div className="cta-section">
          <h2>Get Started</h2>
          <p>Click the button below to start managing your cards</p>
          <button className="cta-button" onClick={() => alert("Cards page would open here (routing not implemented)")}>
            Go to Cards Dashboard
          </button>
        </div>

        <div className="features-section">
          <h2>Features</h2>
          <ul className="features-list">
            <li>Clean and intuitive interface</li>
            <li>Full CRUD operations (Create, Read, Update, Delete)</li>
            <li>Responsive design</li>
            <li>Secure data management</li>
          </ul>
        </div>
      </div>
    </main>
  );
}