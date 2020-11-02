import React from 'react';

import Button from '../ui/Elements/Button/Buttons';
import { filters, MovieFilterProps } from '../Movies/types';
import ButtonGroup from '../../styled/MovieFilter';

const MovieFilter: React.FunctionComponent<MovieFilterProps> = (props) => (
  <ButtonGroup>
    {filters.map(({ name, label }) => (
      <Button
        className={props.filter === name ? 'active' : ''}
        key={name}
        variant='primary'
        name={name}
        onClick={props.onClick}
        buttonType='outlined'
      >
        {label}
      </Button>
    ))}
  </ButtonGroup>
);

export default MovieFilter;
