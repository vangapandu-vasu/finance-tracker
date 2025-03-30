import './App.css';
import './designing/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="navbar-top">
          <div className="social-link">
            <i><img src="/image/twitter.png" alt="Twitter" width="30px" /></i>
            <i><img src="./image/facebook.png" alt="Facebook" width="30px" /></i>
            <i><img src="./image/google-plus.png" alt="Google Plus" width="30px" /></i>
          </div>
          <div className="logo">
            <h3>TRACKNANCE</h3>
          </div>
          <div className="icons">
            <i><img src="./image/logo.png" alt="Logo" width="70px" /></i>
          </div>
        </div>
      </div>
      
      <div className="main-content">
        <nav className="navbar navbar-expand-md" id="navbar-color">
          <div className="container">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item text-center"><a className="nav-link" href="#">PROFILE</a></li>
                <li className="nav-item text-center"><a className="nav-link" href="#">TRANSACTION HISTORY</a></li>
                <li className="nav-item text-center"><a className="nav-link" href="#">BALANCE</a></li>
                <li className="nav-item text-center"><a className="nav-link" href="#">INPUT AI</a></li>
                <li className="nav-item text-center"><a className="nav-link" href="#">RESPONSE</a></li>
                <li className="nav-item text-center"><a className="nav-link" href="#">CHAT</a></li>
                <li className="nav-item text-center"><a className="nav-link" href="Payment.html">PAYMENT HISTORY</a></li>
                <li className="nav-item text-center"><a className="nav-link" href="Form.html">YOUR PAYMENT</a></li>
              </ul>
            </div>
          </div>
        </nav>
        
        <div className="content">
          <h1>Make Your Transactions<br />More calculated.</h1>
          <p>Your every transaction counts here!!</p>
          <div id="btn1"><button>Details</button></div>
        </div>
      </div>
      
      <div className="container">
        <div className="row g-3 justify-content-center" style={{ marginTop: "100px" }}> 
          <div className="col-md-3 col-sm-6 py-2">
            <div className="card" id="tpc">
              <img src="./image/chat.png" alt="Chat" className="card-img-top" />
              <div className="card-img-overlay text-center">
                <h4 className="card-title">CHAT</h4>
                <div id="btn3"><button>Click here</button></div>
              </div>
            </div>
          </div>
          
          <div className="col-md-3 col-sm-6 py-2">
            <div className="card" id="tpc">
              <img src="./image/transaction.png" alt="Transaction" className="card-img-top" />
              <div className="card-img-overlay text-center">
                <h4 className="card-title">Transaction</h4>
                <div id="btn3"><button>View</button></div>
              </div>
            </div>
          </div>
        
          <div className="col-md-3 col-sm-6 py-2">
            <div className="card" id="tpc">
              <img src="./image/balance.png" alt="Balance" className="card-img-top" />
              <div className="card-img-overlay text-center">
                <h4 className="card-title">Balance</h4>
                <div id="btn3"><button>View</button></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      
      
      <div className="container">
        <h3 className="text-center" style={{ marginTop: "100px" }}>MORE FEATURES</h3>
        <div className="row g-3 justify-content-center" style={{ marginTop: "50px" }}> 
          <div className="col-md-3 col-sm-6 py-2">
            <div className="card" id="tpc">
              <img src="./image/Profile.png" alt="Profile" className="card-img-top" />
              <div className="card-body text-center">
                <h3 className="card-title">Profile</h3>
                <div id="btn3"><button>Click here</button></div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 py-2">
            <div className="card" id="tpc">
              <img src="./image/Input AI.png" alt="Input AI" className="card-img-top" />
              <div className="card-body text-center">
                <h3 className="card-title">Input AI</h3>
                <div id="btn3"><button>Click here</button></div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 py-2">
            <div className="card" id="tpc">
              <img src="./image/response.png" alt="Response" className="card-img-top" />
              <div className="card-body text-center">
                <h3 className="card-title">Response</h3>
                <div id="btn3"><button>Click here</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        <h1 className="text-center" style={{ marginTop: "50px" }}>ABOUT</h1>
        <div className="row" style={{ marginTop: "50px" }}>
          <div className="col-md-6 py-3 py-md-0">
            <div className="card" id="tpc">
              <img src="./image/about.jpg" alt="About" />
            </div>
          </div>
          <div className="col-md-6 py-3 py-md-0">
            <p>
              At TRACKNANCE, we aim to provide a seamless and secure experience for managing your transactions and purchasing items directly through your bank balance. Leveraging the power of AI and advanced chat technologies, we offer a personalized, easy-to-use platform that lets you track your balance, monitor transaction limits, and make smart purchasing decisions in real time. Whether you're handling everyday purchases or planning for big investments, our system ensures you stay in control of your finances. With a focus on innovation, security, and user satisfaction, we’re here to help you make the most of your financial potential.
            </p>
            <div id="btn4"><button>Read More...</button></div>
          </div>
        </div>
      </div>
      <footer id="footer">
        <h1 class="text-center">TRACKNANCE</h1>
        <p class="text-center">Track. Budget. Prosper – Financial Freedom Starts Here.</p>
        
        <div class="credite text-center">
        
        </div>
    </footer>
    </div>
  );
}

export default App;
