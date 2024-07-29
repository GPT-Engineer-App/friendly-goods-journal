import { useState } from 'react';
import Header from '../components/Header';
import ShoppingList from '../components/ShoppingList';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [lists, setLists] = useState({
    Dinanshu: [],
    Prabhat: [],
    Nivendu: [],
    You: []
  });

  const addItem = (friend, newItem) => {
    setLists(prevLists => ({
      ...prevLists,
      [friend]: [...prevLists[friend], { id: Date.now(), text: newItem, purchased: false }]
    }));
  };

  const togglePurchased = (friend, id) => {
    setLists(prevLists => ({
      ...prevLists,
      [friend]: prevLists[friend].map(item => 
        item.id === id ? { ...item, purchased: !item.purchased } : item
      )
    }));
  };

  const deleteItem = (friend, id) => {
    setLists(prevLists => ({
      ...prevLists,
      [friend]: prevLists[friend].filter(item => item.id !== id)
    }));
  };

  const clearAll = (friend) => {
    setLists(prevLists => ({
      ...prevLists,
      [friend]: []
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Tabs defaultValue="You" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {Object.keys(lists).map(friend => (
              <TabsTrigger key={friend} value={friend}>{friend}</TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(lists).map(([friend, items]) => (
            <TabsContent key={friend} value={friend}>
              <Card>
                <CardHeader>
                  <CardTitle>{friend}'s Shopping List</CardTitle>
                </CardHeader>
                <CardContent>
                  <ShoppingList 
                    items={items}
                    onAddItem={(newItem) => addItem(friend, newItem)}
                    onTogglePurchased={(id) => togglePurchased(friend, id)}
                    onDeleteItem={(id) => deleteItem(friend, id)}
                    onClearAll={() => clearAll(friend)}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default Index;