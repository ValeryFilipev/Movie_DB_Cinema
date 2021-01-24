import React from 'react';

import Page from '../ui/Layout/Page';
import Grid from '../../styled/Grid';
import GridItem from '../../styled/Grid/GridItem';
import { WatchListProps } from '../Movies/types';
import WatchListCard from '../Cards/WatchListCard';

const WatchList: React.FunctionComponent<WatchListProps> = (props) => (
  <Page backgroundImage='http://www.dominioncinema.co.uk/wp-content/uploads/2016/11/Dominion-511-of-21.jpg'>
    <Grid my={7}>
      {props.watchList.map((item) => (
        <GridItem key={item.id}>
          <WatchListCard item={item} onClick={props.removeFromWatchList} />
        </GridItem>
      ))}
    </Grid>
  </Page>
);

export default WatchList;
