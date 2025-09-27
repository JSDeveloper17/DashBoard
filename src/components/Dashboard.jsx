import { useState } from "react"
import { CategorySection } from "./CategorySection.jsx"
import { Header } from "./Header.jsx"
import { WidgetModal } from "./WidgetModal.jsx"

const initialData = {
       "categories":[
            {
              "name": 'CSPM Executive Dashboard',
              "widgets": [
                    { id: 1, name: 'Cloud Accounts', text: "Lorem ipsum dolor sit amet" },
                    { id: 2, name: 'Cloud Account Risk Assessment', text: 'Lorem ipsum dolor sit amet' },
              ],
            },{
              "name": 'CWPP Dashboard',
              "widgets": [
                { id: 3, name: 'Top 5 Namespace Specific Alerts', text: 'Lorem ipsum dolor sit amet' },
                { id: 4, name: 'Workload Alerts', text: ' Lorem ipsum dolor sit amet' },
              ]        
            },{
              "name": 'Registry Scan',
              "widgets": [
                { id: 5, name: 'Image Risk Assessment', text: ' Lorem ipsum dolor sit amet' },
                { id: 6, name: 'Image Security Issues', text: ' Lorem ipsum dolor sit amet' },
              ],
            }
         ]
   }

export const Dashboard = () => {
   const [isModel, setIsModel] = useState(false)
   const [categories, setCategories] = useState(initialData.categories)
   const [newWidgetName, setNewWidgetName] =useState("")
   const [newWidgetText, setNewWidgetText] =useState("")
   const [selectedCategory, setSelectedCategory] = useState(categories[0]?.name || "")
   const [nextId, setNextId] = useState(7)
   const [searchTerm, setSearchTerm] = useState("")

   function openModel(){
    setIsModel(true)
   }

  const closeModal = () => {
    setIsModel(false);
    setNewWidgetName('');
    setNewWidgetText('');
  };

  const addWidget = () => {
    if (!newWidgetName || !newWidgetText || !selectedCategory) return;
    const newWidget = { id: nextId, name: newWidgetName, text: newWidgetText };
    setNextId(nextId + 1);
    setCategories(categories.map(cat => 
      cat.name === selectedCategory 
        ? { ...cat, widgets: [...cat.widgets, newWidget] }
        : cat
    ));
    closeModal();
  };
  const removeWidget = (categoryName, widgetId) => {
    setCategories(categories.map(cat => 
      cat.name === categoryName 
        ? { ...cat, widgets: cat.widgets.filter(w => w.id !== widgetId) }
        : cat
    ));
  };

//!This creates a new array of categories with widgets filtered by name matching the search term (case-insensitive).
  const filteredCategories = categories.map(cat => ({
    ...cat,
    widgets: cat.widgets.filter(w => w.name.toLowerCase().includes(searchTerm.toLowerCase())),
  }));
   
  return (
    <div className="dashboard-container">
      <Header openModel={openModel} />

      {categories.map((category)=>(
          <CategorySection key={category.name} category={category}
                       removeWidget={removeWidget}/>
      ))}
      
      {isModel && 
      <WidgetModal 
          newWidgetName={newWidgetName}
          setNewWidgetName={setNewWidgetName}
          newWidgetText={newWidgetText}
          setNewWidgetText={setNewWidgetText}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          addWidget={addWidget}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredCategories={filteredCategories}
          removeWidget={removeWidget}
          closeModal={closeModal}/>}
    </div>
  )
}
