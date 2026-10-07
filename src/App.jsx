import "./App.css";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>🚀 DevOps Demo</h2>
        <span>Learning Project</span>
      </nav>

      <main className="container">
        <div className="welcome">
          <h1>My React App</h1>
          <p>
            This application is deployed on an AWS EC2 instance.
          </p>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Application</h3>
            <p>React Demo</p>
          </div>

          <div className="card">
            <h3>Environment</h3>
            <p>Production</p>
          </div>

          <div className="card">
            <h3>Version</h3>
            <p>v1.0.0</p>
          </div>

          <div className="card">
            <h3>Status</h3>
            <p className="success">● Running</p>
          </div>
        </div>

        <div className="server">
          <h2>EC2 Deployment</h2>

          <div className="info">
            <span>Server</span>
            <strong>AWS EC2</strong>
          </div>

          <div className="info">
            <span>Web Server</span>
            <strong>Nginx</strong>
          </div>

          <div className="info">
            <span>Application</span>
            <strong>React</strong>
          </div>

          <div className="info">
            <span>Deployment</span>
            <strong className="success">Successful ✓</strong>
          </div>
        </div>

        <div className="message">
          <h2>🎉 Hello DevOps!</h2>
          <p>
            If you can see this page from your browser using your EC2
            public IP, your deployment is working.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
