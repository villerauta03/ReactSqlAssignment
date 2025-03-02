import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from "./components/CreateUser.jsx";
import ReadUsers from "./components/ReadUsers.jsx";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <CreateUser />
        </div>
        <div className="col-md-6">
          <ReadUsers />
        </div>
      </div>
    </div>
  );
}

export default App;
