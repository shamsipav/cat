import React from 'react';
import './App.css'
import Pack from "./components/Pack/Pack";

const App = () => {

    const packs = [
        {
            id: 1,
            product: 'с фуа-гра',
            portions: 10,
            gifts: 1,
            weight: 0.5,
            description: 'Печень утки разварная с артишоками.'
        },
        {
            id: 2,
            product: 'с рыбой',
            portions: 40,
            gifts: 2,
            weight: 2,
            description: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        },
        {
            id: 3,
            product: 'с курой',
            portions: 100,
            gifts: 5,
            weight: 5,
            empty: true,
            description: 'Филе из цыплят с трюфелями в бульоне.'
        }
    ]

  return (
      <div className="container">
          <h1 className="heading">Ты сегодня покормил кота?</h1>
          <div className="packs">
              {packs.map(pack =>
                  <Pack key={pack.id} className="pack" {...pack} />
              )}
          </div>
      </div>
  );
};

export default App;