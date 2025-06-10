import { useState } from 'react';
import { useCharacters, type ICharacter } from '../../App';
import { Link } from 'react-router-dom';

function Character() {
  const { characters, activeSlide, setActiveSlide, addCharacter, updateCharacter, deleteCharacter } = useCharacters();
  const [editCharacter, setEditCharacter] = useState<ICharacter | null>(null);

  // Обработка добавления персонажа
  const handleAddCharacter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
    const image = (form.elements.namedItem('image') as HTMLInputElement).value;

    addCharacter({
      name,
      description,
      image,
    });

    form.reset();
  };

  // Обработка редактирования персонажа
  const handleEditCharacter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editCharacter) return;

    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
    const image = (form.elements.namedItem('image') as HTMLInputElement).value;

    updateCharacter(editCharacter.id, {
      name,
      description,
      image,
    });

    setEditCharacter(null);
    form.reset();
  };

  const startEdit = (character: ICharacter) => {
    setEditCharacter(character);
  };
  console.log(characters);

  return (
    <>
      <div className="header">
        {['top', 'trailer', 'about', 'character', 'location'].map((route) => (
          <Link key={route} to={`/${route}`} className="button-style">
            {route.toUpperCase()}
          </Link>
        ))}
      </div>

      {characters.length === 0 ? (
        <p className="p-style" style={{ textAlign: 'center', marginTop: '50px' }}>
          Нет персонажей
        </p>
      ) : (
        <>
          <div className="container-for-buttons carousel-indicators">
            {characters.map((character, index) => (
              <button
                key={character.id}
                type="button"
                className={`button ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
                aria-current={index === activeSlide}
                aria-label={`Слайд ${index + 1}`}
              >
                <p style={{ position: 'absolute', bottom: 0, right: 0, color: '#bfbfbf', margin: '0 2px 4px' }}>
                  {character.name}
                </p>
              </button>
            ))}
          </div>

          <div id="myCarousel" className="carousel slide">
            <div className="carousel-inner">
              {characters.map((character, index) => (
                <div key={character.id} className={`item ${index === activeSlide ? 'active' : ''}`} style={{ position: 'relative' }}>
                  <img src={character.image} alt={character.name} style={{ width: '100%' }} />
                  <div className="text" style={{ position: 'absolute', top: 0, right: '40px', textAlign: 'right' }}>
                    <p className="p-style" style={{ fontSize: '62px' }}>
                      {character.name}
                    </p>
                    <p className="p-style">{character.description}</p>
                    <button onClick={() => startEdit(character)} style={{ marginTop: '10px' }}>
                      Редактировать
                    </button>
                    {/* Автоматическое удаление персонажа при нажатии на кнопку Удалить */}
                    <button onClick={() => deleteCharacter(character.id)} style={{ marginTop: '10px', marginLeft: '10px' }}>
                      Удалить
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      

      {/* Для добавления персонажа */}
      <div style={{ margin: '20px', maxWidth: '600px' }}>
        <h3>Добавить персонажа</h3>
        <form onSubmit={handleAddCharacter}>
          <input type="text" name="name" placeholder="Имя персонажа" required />
          <textarea name="description" placeholder="Описание персонажа" required />
          <input type="text" name="image" placeholder="URL изображения" required />
          <button type="submit">Добавить</button>
        </form>
      </div>

      {/* Для редактирования персонажа */}
      {editCharacter && (
        <div style={{ margin: '20px', maxWidth: '600px' }}>
          <h3>Редактировать персонажа: {editCharacter.name}</h3>
          <form onSubmit={handleEditCharacter}>
            <input
              type="text"
              name="name"
              placeholder="Имя персонажа"
              defaultValue={editCharacter.name}
              required
            />
            <textarea
              name="description"
              placeholder="Описание персонажа"
              defaultValue={editCharacter.description}
              required
            />
            <input
              type="text"
              name="image"
              placeholder="URL изображения"
              defaultValue={editCharacter.image}
              required
            />
            <button type="submit">Сохранить</button>
            <button type="button" onClick={() => setEditCharacter(null)} style={{ marginLeft: '10px' }}>
              Отмена
            </button>
          </form>
        </div>
        
      )}
      <div className="footer">
        © Островский Иван, ПИЭ-31
      </div>
    </>
  );
}

export default Character;