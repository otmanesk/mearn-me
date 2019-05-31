import {
  Grid,
  withStyles,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from '@material-ui/core';
import { Table } from '@material-ui/core';

import dashboardStyle from '../../assets/jss/material-dashboard-react/dashboardStyle';
import { ItemGrid, RegularCard } from '../../components';
import * as React from 'react';
// react plugin for creating charts
import { Query } from 'react-apollo';

import { gql } from 'apollo-boost';
import Training from '../../components/stats/Trainings';
import Display from '../../components/react-images/Display';

const GET_USERS = gql`
  {
    allUsers {
      id
      name
      username
      email
    }
  }
`;
interface Props {
  classes: {
    successText: string;
    upArrowCardCategory: string;
  };
}

class Dashboard extends React.Component<Props, any> {
  render() {
    //  const { classes } = this.props;

    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <Display />
          </ItemGrid>
        </Grid>
        <Grid container>
          <Training />
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="orange"
              cardTitle="User List "
              cardSubtitle="New employees on 15th june, 2018"
              content={
                <Query query={GET_USERS}>
                  {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    return (
                      <Paper>
                        <Table>
                          <TableHead>
                            <TableRow>
                              <TableCell>ID</TableCell>
                              <TableCell>Name</TableCell>
                              <TableCell>Email</TableCell>
                              <TableCell>Username</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {data.allUsers.map(
                              (
                                n: {
                                  id: React.ReactNode;
                                  name: React.ReactNode;
                                  email: React.ReactNode;
                                  username: React.ReactNode;
                                },
                                index: number
                              ) => {
                                return (
                                  <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                      {n.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                      {n.name}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                      {n.email}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                      {n.username}
                                    </TableCell>
                                  </TableRow>
                                );
                              }
                            )}
                          </TableBody>
                        </Table>
                      </Paper>
                    );
                  }}
                </Query>
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);
