'use client'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCombos } from '../slice/comboSlice';

export default function ComboList() {
  const combos = useSelector(state => state.combos.items);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchCombos()); }, [dispatch]);

  return (
    <div>
      <h2>Combos creados</h2>
      {combos.map(combo => (
        <div key={combo._id}>
          <strong>{combo.name}</strong> - ${combo.price} - {combo.calories} cal
          <div>{combo.items.join(' + ')}</div>
        </div>
      ))}
    </div>
  );
}
