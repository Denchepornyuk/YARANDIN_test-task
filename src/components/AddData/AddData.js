import React from 'react';
import './addData.scss';

const AddData = props => (
  <div>
    {Object.keys(props).map(item => (
      <div className="add-data" key={item}>
        <h3 className="add-data__title">
          {item.toLocaleUpperCase()}
        </h3>
        <div className="add-data__description">
          {props[item].map((elem, index) => (
            <p className="description__name" key={elem.name}>
              {index === props[item].length - 1
                ? `${elem.name}.`
                : `${elem.name},`
              }
            </p>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default AddData;
