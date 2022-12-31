import * as React from 'react';

function DuneTest() {
  const favoriteCharacter = (
    <div>
      <h3>My Favorite Character in Dune</h3>
      <ul>
        <li>Duncan Idaho</li>
      </ul>
    </div>
  );
  return (
    <h2>
      Welcome traveller to Arrakis! Land of sand and home of the spice melange.
      <br />
      <br />
      {favoriteCharacter}
    </h2>
  );
}

export default DuneTest;
