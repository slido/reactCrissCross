import React from 'react';
import Status from './Status';
import Moves from './Moves';

function History() {

    return (
          <div>
            <Status></Status>
            <Moves></Moves>
          </div>
      );
}

// napravi git
// kada zavrsim game pokaze se button sa new game, koji izrenda ispod novi game i tako za sljedece
// kada kliknes button, otvori modal sa pitanjem, dali prvi x, o ili random

export default History;