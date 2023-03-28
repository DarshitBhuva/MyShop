
// import { countDocuments } from '../../../Backend/models/userModel'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'


function Login() {
  const [admins, setAdmin] = useState([]);

  const [credentials, setCredentials] = useState({ username: "", password: "" })

  const navigate = useNavigate();

  const getAdmins = async () => {
    await fetch("https://localhost:7263/api/Admins", {
      method: "GET"
    }).then(response => response.json()).then(data => setAdmin(data))
  }

  const authenticate = async (e) => {

    e.preventDefault();
    var isadmin = false;
    admins.map(admin => {
      if (admin.username === credentials.username && admin.password === credentials.password) {
        isadmin = true;
        navigate("/products");
      }
    })

    if (isadmin === false) {
      alert("Invalid Credentials");
    }



  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
}

  useEffect(() => {
    getAdmins();
  }, [])
  return (

    <div>

      <div style={{ marginTop: '80px' }}>

      </div>

      <body>

        <div className="bg-img">

          <div className="content">

            <header style={{ color: 'black' }}>MyShop Login</header>
            <form method='post' onSubmit={authenticate}>
              <div className="field">
                <span className="fa fa-user"></span>
                <input type="text" name='username' onChange={onChange} required placeholder="username" />
              </div>
              <div className="field space">
                <span className="fa fa-lock"></span>
                <input type="password" name='password' onChange={onChange} className="pass-key" required placeholder="Password" />
              </div>
              <div className="pass">
                <p Style="visibility: hidden;">Forgot Password?</p>
              </div>
              <div className="field">
                <button type="submit"
                  value="Login"  >Login </button>
              </div>
            </form>
            {/* <div className="signup">Don't have account?
              <a href="/">Signup Now</a>
            </div> */}
          </div>
        </div>




      </body>





    </div>

  )
}

export default Login