'use client'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { añadirCombo } from '../slice/comboSlice';

const baseOptions = [
  { name: 'Simple', price: 1000, cal: 400 },
  { name: 'Doble Carne', price: 1400, cal: 700 }
];
const ingredients = [
  { name: 'Queso', price: 200, cal: 100 },
  { name: 'Bacon', price: 300, cal: 150 },
  { name: 'Lechuga', price: 100, cal: 20 },
  { name: 'Tomate', price: 100, cal: 30 }
];
const drinks = [
  { name: 'Coca-Cola', price: 500, cal: 200 },
  { name: 'Agua', price: 300, cal: 0 }
];

export default function ComboForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [base, setBase] = useState(baseOptions[0]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [drink, setDrink] = useState(drinks[0]);

  const handleCheck = (ing) => {
    setSelectedIngredients(prev =>
      prev.includes(ing)
        ? prev.filter(i => i !== ing)
        : [...prev, ing]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = [base.name, ...selectedIngredients.map(i => i.name), drink.name];
    const price = base.price + drink.price + selectedIngredients.reduce((sum, i) => sum + i.price, 0);
    const calories = base.cal + drink.cal + selectedIngredients.reduce((sum, i) => sum + i.cal, 0);

    dispatch(añadirCombo({ name, items, price, calories }));
    setName('');
    setSelectedIngredients([]);
    setBase(baseOptions[0]);
    setDrink(drinks[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre del combo" />
      <h3>Hamburguesa base</h3>
      {baseOptions.map(opt => (
        <label key={opt.name}>
          <input type="radio" checked={base.name === opt.name} onChange={() => setBase(opt)} />
          {opt.name} (${opt.price}) - {opt.cal} cal
        </label>
      ))}
      <h3>Ingredientes</h3>
      {ingredients.map(ing => (
        <label key={ing.name}>
          <input
            type="checkbox"
            checked={selectedIngredients.includes(ing)}
            onChange={() => handleCheck(ing)}
          />
          {ing.name} (${ing.price}) - {ing.cal} cal
        </label>
      ))}
      <h3>Bebida</h3>
      {drinks.map(d => (
        <label key={d.name}>
          <input type="radio" checked={drink.name === d.name} onChange={() => setDrink(d)} />
          {d.name} (${d.price}) - {d.cal} cal
        </label>
      ))}
      <button type="submit">Confirmar Combo</button>
    </form>
  );
}
