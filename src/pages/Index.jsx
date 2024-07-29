import { useState } from 'react';
import Header from '../components/Header';
import ShoppingList from '../components/ShoppingList';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [items, setItems] = useState([]);
  const friends = ['Dinanshu', 'Prabhat', 'Nivendu'];

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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {friends.map((friend, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{friend}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Friend's shopping list</p>
              </CardContent>
            </Card>
          ))}
          <Card>
            <CardHeader>
              <CardTitle>Your List</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">Your shopping list</p>
            </CardContent>
          </Card>
        </div>
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