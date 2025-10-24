
import './Header.css'; 

export const Header = ({ openModal }) => {
  return (

    <header className="header">
      
      <h1 className="header-title">CNAPP Dashboard</h1>
  
      <button 
        onClick={openModal} 
        className="add-widget-button"
      >
        + Add Widget
      </button>
    </header>
  );
};

