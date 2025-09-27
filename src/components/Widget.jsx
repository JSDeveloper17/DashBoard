import "./Widget.css"

export const Widget = ({widget, categoryName, removeWidget}) => {
  return (
    <div className="widget-card">
        <h3 className="widget-title">{widget.name}</h3>
        <p className="widget-text">{widget.text}</p>

        <button className="widget-close-button"
            onClick={()=> removeWidget(categoryName,widget.id)} > ❎ </button>
    </div>
  )
}
