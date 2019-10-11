import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';

export default connect(
  state => state,
  actionCreators,
)(Vehicle);

export function Vehicle({ getVehicle }) {
  useEffect(() => {
    getVehicle();
  }, []);
  return (
    <div className="component">
      <vehiclesList veh={Vehicle} />
    </div>
  );
}

function vehiclesList({ veh, addToCart }) {
  return (
    <>
      {
        veh.map((item) => (
          <Item
            key={item.id}
            item={item}
            addToCart={addToCart}
          />
        ))
      }
    </>
  );
}

