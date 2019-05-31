import { Grid, Paper } from '@material-ui/core';
import { ItemGrid, RegularCard, Table, Button } from '../../components';
import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Query, Mutation } from 'react-apollo';
import Popup from 'reactjs-popup';

import Modal from 'react-awesome-modal';

import { gql } from 'apollo-boost';

const DELETE_PROJECT = gql`
  mutation deleteUser($id: String!, $projects: [ProjectInput]) {
    deleteUser(id: $id, projects: $projects) {
      id
      name
    }
  }
`;

const Update_PROJECT = gql`
  mutation updateProject($id: String!, $projects: [ProjectInput]) {
    updateProject(id: $id, projects: $projects) {
      projects {
        id
        name
        description
        technology
        site

        startDate
        endDate
        status
        progress
      }
    }
  }
`;

const GET_USERS = gql`
  query User($Id: String!) {
    User(id: $Id) {
      id
      projects {
        name
        description
        technology
        site

        startDate
        endDate
        status
        progress
      }
    }
  }
`;
const ADD_PROJECT = gql`
  mutation addProject($id: String!, $projects: [ProjectInput]) {
    addProject(id: $id, projects: $projects) {
      projects {
        name
        description
        technology
        site

        startDate
        endDate
        status
        progress
      }
    }
  }
`;

class Project extends React.Component<any, any> {
  static propTypes: {
    auth: PropTypes.Validator<object>;
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  openModal() {
    this.setState({
      visible: true
    });
  }

  closeModal() {
    this.setState({
      visible: false
    });
  }
  render() {
    let name,
      description,
      technology,
      site,
      startDate,
      endDate,
      status,
      progress;
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              cardTitle="Edit Project"
              cardSubtitle="Complete your project"
              content={
                <div>
                  <Grid container>
                    <Query
                      query={GET_USERS}
                      variables={{ Id: this.props.auth.user.id }}
                    >
                      {({ loading, error, data }) => {
                        if (loading) return 'Loading...';
                        if (error) return `Error! ${error.message}`;
                        return (
                          <Mutation
                            mutation={ADD_PROJECT}
                            key={data.User.id}
                            onCompleted={() =>
                              this.props.history.push(`/Project`)
                            }
                          >
                            {(addProject, { loading, error }) => (
                              <>
                                <Button
                                  color="primary"
                                  round
                                  onClick={() => this.openModal()}
                                >
                                  Add Project
                                </Button>
                                <Modal
                                  visible={this.state.visible}
                                  width="400"
                                  height="620"
                                  effect="fadeInUp"
                                  onClickAway={() => this.closeModal()}
                                >
                                  <div className="container">
                                    <div className="panel panel-default">
                                      <div className="panel-body">
                                        <form
                                          onSubmit={e => {
                                            e.preventDefault();
                                            addProject({
                                              variables: {
                                                id: data.User.id,
                                                projects: {
                                                  name: name.value,
                                                  description:
                                                    description.value,
                                                  site: site.value,

                                                  technology: technology.value,
                                                  startDate: startDate.value,
                                                  status: status.value,
                                                  progress: progress.value
                                                }
                                              },
                                              refetchQueries: [
                                                { query: GET_USERS }
                                              ]
                                            });
                                            name.value = '';
                                            description.value = '';
                                            technology.value = '';
                                            site.value = '';

                                            startDate.value = '';
                                            endDate.value = '';
                                            status.value = '';
                                            progress.value = '';
                                          }}
                                        >
                                          <br />
                                          <div className="form-group">
                                            <label htmlFor="project">
                                              name:
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="name"
                                              ref={node => {
                                                name = node;
                                              }}
                                              placeholder="My Project"
                                            />
                                          </div>
                                          <div className="form-group">
                                            <label htmlFor="username">
                                              description:
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="description"
                                              ref={node => {
                                                description = node;
                                              }}
                                              placeholder="description"
                                            />
                                          </div>
                                          <div className="form-group">
                                            <label htmlFor="status">
                                              status:
                                            </label>
                                            <input
                                              className="form-control"
                                              name="status"
                                              ref={node => {
                                                status = node;
                                              }}
                                              placeholder="status"
                                            />
                                          </div>
                                          <div className="form-group">
                                            <label htmlFor="technology">
                                              technology:
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="technology"
                                              ref={node => {
                                                technology = node;
                                              }}
                                              placeholder="technology"
                                            />
                                          </div>
                                          <div className="form-group">
                                            <label htmlFor="site">site:</label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="site"
                                              ref={node => {
                                                site = node;
                                              }}
                                              placeholder="site"
                                            />
                                          </div>

                                          <div className="form-group">
                                            <label htmlFor="startDate">
                                              started At :
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="startDate"
                                              ref={node => {
                                                startDate = node;
                                              }}
                                              placeholder="startDate"
                                            />
                                          </div>
                                          <div className="form-group">
                                            <label htmlFor="startDate">
                                              ended At :
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="endDate"
                                              ref={node => {
                                                endDate = node;
                                              }}
                                              placeholder="endDate"
                                            />
                                          </div>
                                          <div className="form-group">
                                            <label htmlFor="progress">
                                              Progress:
                                            </label>
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="progress"
                                              ref={node => {
                                                progress = node;
                                              }}
                                              placeholder="progress"
                                            />
                                          </div>
                                          <Button
                                            color="primary"
                                            round
                                            type="submit"
                                            onClick={() => this.closeModal()}
                                          >
                                            Add Project
                                          </Button>
                                          <Button
                                            color="primary"
                                            round
                                            onClick={() => this.closeModal()}
                                          >
                                            Close{' '}
                                          </Button>
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                  {loading && <p>Loading...</p>}
                                  {error && <p>Error :( Please try again</p>}
                                </Modal>
                              </>
                            )}
                          </Mutation>
                        );
                      }}
                    </Query>
                  </Grid>
                  <Grid>
                    <Query
                      query={GET_USERS}
                      variables={{ Id: this.props.auth.user.id }}
                      pollInterval={300}
                    >
                      {({ loading, error, data }) => {
                        if (loading) return 'Loading...';
                        if (error) return `Error! ${error.message}`;
                        var fo = data.User.projects;
                        var array = fo.map(item =>
                          Object.keys(item).map(function(_) {
                            return item[_];
                          })
                        );
                        array.map(item => {
                          let id = item[0];
                          let name = item[1];
                          let progress = item[2];
                          let endDate = item[3];
                          let site = item[4];
                          let startDate = item[5];

                          item.push(
                            <Mutation
                              mutation={Update_PROJECT}
                              key={data.User.id}
                              onCompleted={() =>
                                this.props.history.push('/Project')
                              }
                            >
                              {(updateProject, { loading, error }) => (
                                <>
                                  <Popup
                                    open={false}
                                    trigger={
                                      <Button color="primary" round>
                                        Edit{' '}
                                      </Button>
                                    }
                                    position="top left"
                                    modal
                                    closeOnDocumentClick
                                  >
                                    {close => (
                                      <div>
                                        <div className="container">
                                          <div className="panel panel-default">
                                            <div className="panel-body">
                                              <form
                                                onSubmit={e => {
                                                  updateProject({
                                                    variables: {
                                                      id: data.User.id,
                                                      projects: {
                                                        id: id,
                                                        name: name.value,
                                                        progress:
                                                          progress.value,
                                                        site: site.value,

                                                        startDate:
                                                          startDate.value,

                                                        endDate: endDate.value
                                                      }
                                                    }
                                                  }).then(() => {
                                                    close();
                                                  });
                                                  name.value = '';

                                                  site.value = '';

                                                  progress.value = '';
                                                  startDate.value = '';

                                                  endDate.value = '';
                                                  close();
                                                }}
                                              >
                                                <br />
                                                <div className="form-group">
                                                  <label htmlFor="name">
                                                    name:
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    ref={node => {
                                                      name = node;
                                                    }}
                                                    placeholder="name"
                                                    defaultValue={name.toString()}
                                                  />
                                                </div>
                                                <div className="form-group">
                                                  <label htmlFor="Type">
                                                    Progress:
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="Type"
                                                    ref={node => {
                                                      progress = node;
                                                    }}
                                                    placeholder="Progress"
                                                    defaultValue={progress.toString()}
                                                  />
                                                </div>
                                                <div className="form-group">
                                                  <label htmlFor="Site">
                                                    Site:
                                                  </label>
                                                  <input
                                                    className="form-control"
                                                    name="Site"
                                                    ref={node => {
                                                      site = node;
                                                    }}
                                                    placeholder="Site"
                                                    defaultValue={site.toString()}
                                                  />
                                                </div>

                                                <div className="form-group">
                                                  <label htmlFor="startDate">
                                                    startDate :
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="startDate"
                                                    ref={node => {
                                                      startDate = node;
                                                    }}
                                                    placeholder="startDate"
                                                  />
                                                </div>

                                                <div className="form-group">
                                                  <label htmlFor="EndDate">
                                                    EndDate:
                                                  </label>
                                                  <input
                                                    type="text"
                                                    className="form-control"
                                                    name="EndDate"
                                                    ref={node => {
                                                      endDate = node;
                                                    }}
                                                    placeholder="EndDate"
                                                  />
                                                </div>
                                                <Button
                                                  color="primary"
                                                  round
                                                  type="submit"
                                                >
                                                  Edit{' '}
                                                </Button>
                                                <Button
                                                  color="primary"
                                                  onClick={() => {
                                                    close();
                                                  }}
                                                >
                                                  Close{' '}
                                                </Button>
                                              </form>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </Popup>
                                </>
                              )}
                            </Mutation>,
                            <Mutation
                              mutation={DELETE_PROJECT}
                              key={data.User.id}
                              onCompleted={() =>
                                this.props.history.push('/Project')
                              }
                            >
                              {(deleteUser, { loading, error }) => (
                                <div>
                                  <form
                                    onSubmit={e => {
                                      e.preventDefault();
                                      deleteUser({
                                        variables: {
                                          id: data.User.id,
                                          projects: {
                                            id: id.toString()
                                          }
                                        }
                                      });
                                    }}
                                  >
                                    &ensp;
                                    <Button type="submit" color="danger">
                                      Delete
                                    </Button>
                                  </form>
                                  {loading && <p>Loading...</p>}
                                  {error && <p>Error :( Please try again</p>}
                                </div>
                              )}
                            </Mutation>
                          );
                        });
                        array.map(i => {
                          i.splice(0, 1);
                        });
                        array.map(i => {
                          i.splice(5, 3);
                        });

                        return (
                          <Paper>
                            <Table
                              tableHeaderColor="success"
                              tableHead={[
                                'Name',
                                'Site',
                                'technology',
                                'startDate',
                                'endDate'
                              ]}
                              tableData={array}
                            />
                          </Paper>
                        );
                      }}
                    </Query>
                  </Grid>
                </div>
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Project.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps)(Project);
