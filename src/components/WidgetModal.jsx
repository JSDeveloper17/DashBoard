import "./WidgetModal.css"

export const WidgetModal = ({newWidgetName,setNewWidgetName,newWidgetText,
                     setNewWidgetText,selectedCategory,setSelectedCategory,
                     categories, addWidget, searchTerm, setSearchTerm,
                     filteredCategories, removeWidget,closeModal }) => {
  return (
    <div className="modal-overlay">
       <div className="modal-content">
           <h2 className="modal-title">Manage Widgets</h2>

           {/* adding new widget */}
           <section className="add-widget-section">
               <h3 className="section-subtitle">Add New Widget</h3>

               <input type="text" value={newWidgetName} placeholder="Widget Name"
                   onChange={(e)=>setNewWidgetName(e.target.value)} className="input-field" required />

               <textarea placeholder="Widget Text" value={newWidgetText}
                onChange={(e)=>setNewWidgetText(e.target.value)} className="textarea-field" required></textarea>
 
                {/* Select dropdown for category  */}

                <select className="select-field" value={selectedCategory}
                        onChange={(e)=>setSelectedCategory(e.target.value)}>
                  {/*  Map over categories to create options. */}
                  {categories.map((cat)=>(
                    <option key={cat.name} value={cat.name}>{cat.name}</option>
                  ))}
                </select>
                <button className="add-button" onClick={addWidget}>Add to Category</button>
           </section>

           {/* Section for managing existing widgets */}
           <section className="manage-widgets-section">
              <h3 className="section-subtitle">Manage Existing Widgets</h3>

              <input type="text" className="input-field"
               placeholder="Search widgets..." value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
              />
               
              {/* Map over filtered categories to display them*/}

              {filteredCategories.map((cat)=>(
                <div key={cat.name} className="category-block">
                  <h4 className="category-subtitle">{cat.name}</h4>

                  {cat.widgets.length > 0 ? (
                    <ul className="widget-list">
                      {/* Map over widgets to show checkboxes for removal. */}
                      {cat.widgets.map((widget) => (
                         
                        <li key={widget.id} className="widget-item">
                          <input type="checkbox" checked={true} className="checkbox"
                           onChange={() => removeWidget(cat.name, widget.id)} 
                          />
                         <span>{widget.name}</span>
                        </li>
                    ))}
                   </ul>
                    ):(
                    <p className="no-match-text">No widgets match the search.</p>
                  )}
                    
                </div>
                
                ))}

           </section>

           <button onClick={closeModal} className="close-button">Close</button>
       </div>
    </div>
  )
}
