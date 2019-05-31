import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Sunburst from '../../components/Charts/Sunburst/Sunburst';
import Activity from '../../components/Charts/Activity/Activity';
import Pie from '../../components/Charts/Pie/Pie';
import Donut from '../../components/Charts/Donut/Donut';
import Bar from '../../components/Charts/Bar/Bar';
import LevelsTreeMap from '../../components/Charts/TreeMap/LevelsTreeMap';
import Area from '../../components/Charts/Area/Area';
import Line from '../../components/Charts/Line/Line';
import Pyramid from '../../components/Charts/Pyramid/Pyramid';
import Bubble from '../../components/Charts/Bubble/Bubble';
import Spiderweb from '../../components/Charts/Spiderweb/Spiderweb';
import SemiCircle from '../../components/Charts/Donut/SemiCircle';

import { ItemGrid } from '../../components';
import { Grid } from '@material-ui/core';

class Skills extends React.Component<any, any> {
  static propTypes: {
    auth: PropTypes.Validator<object>;
  };
  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <Activity />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={5}>
            <Spiderweb />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={3}>
            <Pie />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <Donut />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <Bar />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <LevelsTreeMap />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <Pyramid />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <Line />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <Area />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <Bubble />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <Sunburst />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <SemiCircle />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}
Skills.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Skills);
