import { useState } from 'react';
import Header from '../components/Header';
import ShoppingList from '../components/ShoppingList';
import Footer from '../components/Footer';

const Index = () => {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    setItems([...items, { id: Date.now(), text: newItem, purchased: false }]);
  };

  const togglePurchased = (id) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearAll = () => {
    setItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ShoppingList 
          items={items}
          onAddItem={addItem}
          onTogglePurchased={togglePurchased}
          onDeleteItem={deleteItem}
          onClearAll={clearAll}
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;