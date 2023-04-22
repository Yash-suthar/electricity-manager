import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  function navigateToRoom() {
    navigate("/Room");
  }
  function navigateToBills() {
    navigate("/Bills");
  }

  return (
    <div>
      <h1 class="my-5 py-3 bg-info">Electricity Manager</h1>
      <div>
        <button className="btn btn-primary m-2" onClick={navigateToRoom}>
      
          Room
        </button>
      </div>
      <div>
        <button className="btn btn-primary" onClick={navigateToBills}>
       
          All Bills
        </button>
      </div>
    </div>
  );
}

export default HomePage;
