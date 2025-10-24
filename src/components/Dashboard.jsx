

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



import React, { useState } from 'react';
import './Dashboard.css';
import {Header} from './Header.jsx';
import {CategorySection} from './CategorySection.jsx';
import {WidgetModal} from './WidgetModal.jsx';


export const Dashboard = () => {
  const [categories, setCategories] = useState(initialData.categories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.name || '');
  const [searchTerm, setSearchTerm] = useState('');
  const [nextId, setNextId] = useState(7);

  
  const openModal = (catName = categories[0]?.name) => {
    setSelectedCategory(catName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewWidgetName('');
    setNewWidgetText('');
    setSearchTerm('');
  };

  
  const addWidget = () => {
    if (!newWidgetName || !newWidgetText || !selectedCategory) return;
    const newWidget = { id: nextId, name: newWidgetName, text: newWidgetText };
    setNextId(nextId + 1);
    setCategories(cats =>
      cats.map(c =>
        c.name === selectedCategory
          ? { ...c, widgets: [...c.widgets, newWidget] }
          : c
      )
    );
    closeModal();
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(cats =>
      cats.map(c =>
        c.name === categoryName
          ? { ...c, widgets: c.widgets.filter(w => w.id !== widgetId) }
          : c
      )
    );
  };

  const filteredCategories = categories.map(cat => ({
    ...cat,
    widgets: cat.widgets.filter(w =>
      w.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  
  return (
    <div className="dashboard-container">
      <Header openModal={() => openModal()} />

      {categories.map(cat => (
        <CategorySection
          key={cat.name}
          category={cat}
          removeWidget={removeWidget}
          openModalForCategory={openModal}   
        />
      ))}

      {isModalOpen && (
        <WidgetModal
          closeModal={closeModal}
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
        />
      )}
    </div>
  );
};

