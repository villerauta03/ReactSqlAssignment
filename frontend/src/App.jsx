import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from "./components/CreateUser.jsx";
import ReadUsers from "./components/ReadUsers.jsx";

function App() {
  return (
    <div className="container">
      <div className="row">  {/* Bootstrap row */}
        <div className="col-md-6">  {/* 6 columns for CreateUser */}
          <CreateUser />
        </div>
        <div className="col-md-6">  {/* 6 columns for ReadUsers */}
          <ReadUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
