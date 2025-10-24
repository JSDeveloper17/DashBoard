
import './AddWidgetPlaceholder.css';

export const AddWidgetPlaceholder = ({ categoryName, onClick }) => {
  return (
    <div className="add-widget-placeholder" onClick={onClick}>
      <button className="add-widget-placeholder-btn">
        + Add Widget
      </button>
      <p className="add-widget-placeholder-text">
        Add a widget to <strong>{categoryName}</strong>
      </p>
    </div>
  );
};


