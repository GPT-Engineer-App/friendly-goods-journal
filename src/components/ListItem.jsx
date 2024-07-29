import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const ListItem = ({ item, onTogglePurchased, onDeleteItem }) => {
  return (
    <li className="flex items-center gap-2 p-2 bg-white rounded shadow">
      <Checkbox
        checked={item.purchased}
        onCheckedChange={() => onTogglePurchased(item.id)}
        id={`item-${item.id}`}
      />
      <label
        htmlFor={`item-${item.id}`}
        className={`flex-grow ${item.purchased ? 'line-through text-gray-500' : ''}`}
      >
        {item.text}
      </label>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDeleteItem(item.id)}
        className="text-red-500 hover:text-red-700"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </li>
  );
};

export default ListItem;