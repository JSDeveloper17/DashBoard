import "./CategorySection.css"
import { Widget } from "./Widget.jsx"

export const CategorySection = ({category, removeWidget}) => {
  return (
    <section className="category-section">
      <h2 className="category-title">{category.name}</h2>

       <div className="widgets-grid">
          {category.widgets.map((widget)=>(
              <Widget key={widget.id} widget={widget}
                   categoryName={category.name} removeWidget={removeWidget}/>
          ))}
       </div>
    </section>
  )
}
