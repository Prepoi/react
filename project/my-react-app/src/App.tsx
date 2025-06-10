import { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './navigate/routes';
import './App.css';

export interface ICharacter {
  id: number;
  name: string;
  description: string;
  image: string;
}
const JSON_URL = 'http://localhost:3000/characters';
export function useCharacters() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);
  //Метод GET - получение персонажа из url (данные из db.json в корне проекта)
  useEffect(() => {
    fetch(JSON_URL)
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(error => console.error('Ошибка при получении персонажей:', error));
  }, []);
  console.log(characters);

  //Метод POST - Добавление нового персонажа
  const addCharacter = async (newCharacter: Omit<ICharacter, 'id'>) => {
    try {
      const response = await fetch(JSON_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCharacter),
      });
      const addedCharacter = await response.json();
      setCharacters([...characters, addedCharacter]);
      setActiveSlide(characters.length);
    } catch (error) {
      console.error('Ошибка при добавлении персонажа:', error);
    }
  };

  //Метод PUT - обновление существующего персонажа
  const updateCharacter = async (id: number, updatedCharacter: Omit<ICharacter, 'id'>) => {
    try {
      const response = await fetch(`${JSON_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCharacter),
      });
      const updatedData = await response.json();
      setCharacters(characters.map(char => (char.id === id ? updatedData : char)));
      setActiveSlide(characters.findIndex(char => char.id === id));
    } catch (error) {
      console.error('Ошибка при обновлении персонажа:', error);
    }
  };

  // Метод Delete - Удаление персонажа
  const deleteCharacter = async (id: number) => {
    try {
      await fetch(`${JSON_URL}/${id}`, {
        method: 'DELETE',
      });
      setCharacters(characters.filter(char => char.id !== id));
      setActiveSlide(Math.max(0, activeSlide - 1));
    } catch (error) {
      console.error('Ошибка при удалении персонажа:', error);
    }
  };

  return { characters, activeSlide, setActiveSlide, addCharacter, updateCharacter, deleteCharacter };
}

function App() {
  return (
    <div className="main">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;