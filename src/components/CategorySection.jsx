
import './CategorySection.css';
import {Widget} from './Widget.jsx';
import {AddWidgetPlaceholder} from './AddWidgetPlaceholder.jsx';

export const CategorySection = ({ category, removeWidget, openModalForCategory }) => {
  return (
    <section className="category-section">
      <h2 className="category-title">{category.name}</h2>

      <div className="widgets-grid">
        {/* Existing widgets */}
        {category.widgets.map(widget => (
          <Widget
            key={widget.id}
            widget={widget}
            categoryName={category.name}
            removeWidget={removeWidget}
          />
        ))}

        {/* NEW – placeholder inside the category */}
        <AddWidgetPlaceholder
          categoryName={category.name}
          onClick={() => openModalForCategory(category.name)}
        />
      </div>
    </section>
  );
};

