/*!

=========================================================
* Paper Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import AuthContext from '../../Context/AuthContext';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col,
} from "reactstrap";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      horizontalTabs: "home",
      verticalTabs: "info",
      pageTabs: "homePages",
      openedCollapses: ["collapseOne", "collapse1"],
    };
  }
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  collapsesToggle = (collapse) => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: openedCollapses.filter((item) => item !== collapse),
      });
    } else {
      openedCollapses.push(collapse);
      this.setState({
        openedCollapses: openedCollapses,
      });
    }
  };
  render() {
    return (
      <>
        <div className="content">
        <Nav
              className="flex-column nav-stacked"
              role="tablist"
              tabs
            >
              <NavItem>
                <NavLink
                  data-toggle="tab"
                  href="#pablo"
                  role="tab"
                  className={
                    this.state.verticalTabs === "info"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    this.setState({ verticalTabs: "info" })
                  }
                >
                  Info
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-toggle="tab"
                  href="#pablo"
                  role="tab"
                  className={
                    this.state.verticalTabs === "description"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    this.setState({ verticalTabs: "description" })
                  }
                >
                  Description
                </NavLink>
                <Collapse isOpen={true}>
                  <ul style={{listStyleType:'none'}}>
                    <li>sdf</li>
                    <Collapse isOpen={true}>
                      <ul style={{listStyleType:'none'}}><li>sdf</li></ul>
                    </Collapse>
                  </ul>
                  
                </Collapse>
              </NavItem>
              <NavItem>
                <NavLink
                  data-toggle="tab"
                  href="#pablo"
                  role="tab"
                  className={
                    this.state.verticalTabs === "concept"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    this.setState({ verticalTabs: "concept" })
                  }
                >
                  Concept
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-toggle="tab"
                  href="#pablo"
                  role="tab"
                  className={
                    this.state.verticalTabs === "support"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    this.setState({ verticalTabs: "support" })
                  }
                >
                  Support
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  data-toggle="tab"
                  href="#pablo"
                  role="tab"
                  className={
                    this.state.verticalTabs === "extra"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    this.setState({ verticalTabs: "extra" })
                  }
                >
                  Extra
                </NavLink>
              </NavItem>
            </Nav>
          <Row>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h5>Horizontal Tabs</h5>
                </CardHeader>
                <CardBody>
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <Nav id="tabs" role="tablist" tabs>
                        <NavItem>
                          <NavLink
                            aria-expanded={this.state.horizontalTabs === "home"}
                            data-toggle="tab"
                            href="#pablo"
                            role="tab"
                            className={
                              this.state.horizontalTabs === "home"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              this.setState({ horizontalTabs: "home" })
                            }
                          >
                            Home
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-expanded={
                              this.state.horizontalTabs === "profile"
                            }
                            data-toggle="tab"
                            href="#pablo"
                            role="tab"
                            className={
                              this.state.horizontalTabs === "profile"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              this.setState({ horizontalTabs: "profile" })
                            }
                          >
                            Profile
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            aria-expanded={
                              this.state.horizontalTabs === "messages"
                            }
                            data-toggle="tab"
                            href="#pablo"
                            role="tab"
                            className={
                              this.state.horizontalTabs === "messages"
                                ? "active"
                                : ""
                            }
                            onClick={() =>
                              this.setState({ horizontalTabs: "messages" })
                            }
                          >
                            Messages
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>
                  </div>
                  <TabContent
                    className="text-center"
                    id="my-tab-content"
                    activeTab={this.state.horizontalTabs}
                  >
                    <TabPane tabId="home" role="tabpanel">
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient. With a smooth metal surface
                        that seamlessly meets the new Retina HD display.
                      </p>
                    </TabPane>
                    <TabPane tabId="profile" role="tabpanel">
                      <p>Here is your profile.</p>
                    </TabPane>
                    <TabPane tabId="messages" role="tabpanel">
                      <p>Here are your messages.</p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card>
                <CardHeader>
                  <h5>Vertical Tabs</h5>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col lg="4" md="5" sm="4" xs="6">
                      <div className="nav-tabs-navigation verical-navs p-0">
                        <div className="nav-tabs-wrapper">
                          <Nav
                            className="flex-column nav-stacked"
                            role="tablist"
                            tabs
                          >
                            <NavItem>
                              <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                role="tab"
                                className={
                                  this.state.verticalTabs === "info"
                                    ? "active"
                                    : ""
                                }
                                onClick={() =>
                                  this.setState({ verticalTabs: "info" })
                                }
                              >
                                Info
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                role="tab"
                                className={
                                  this.state.verticalTabs === "description"
                                    ? "active"
                                    : ""
                                }
                                onClick={() =>
                                  this.setState({ verticalTabs: "description" })
                                }
                              >
                                Description
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                role="tab"
                                className={
                                  this.state.verticalTabs === "concept"
                                    ? "active"
                                    : ""
                                }
                                onClick={() =>
                                  this.setState({ verticalTabs: "concept" })
                                }
                              >
                                Concept
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                role="tab"
                                className={
                                  this.state.verticalTabs === "support"
                                    ? "active"
                                    : ""
                                }
                                onClick={() =>
                                  this.setState({ verticalTabs: "support" })
                                }
                              >
                                Support
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                data-toggle="tab"
                                href="#pablo"
                                role="tab"
                                className={
                                  this.state.verticalTabs === "extra"
                                    ? "active"
                                    : ""
                                }
                                onClick={() =>
                                  this.setState({ verticalTabs: "extra" })
                                }
                              >
                                Extra
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </div>
                      </div>
                    </Col>
                    <Col lg="8" md="7" sm="8" xs="6">
                      {/* Tab panes */}
                      <TabContent activeTab={this.state.verticalTabs}>
                        <TabPane tabId="info">
                          <p>
                            Larger, yet dramatically thinner. More powerful, but
                            remarkably power efficient. With a smooth metal
                            surface that seamlessly meets the new Retina HD
                            display.
                          </p>
                          <p>
                            It’s one continuous form where hardware and software
                            function in perfect unison, creating a new
                            generation of phone that’s better by any measure.
                          </p>
                        </TabPane>
                        <TabPane tabId="description">
                          <p>
                            The first thing you notice when you hold the phone
                            is how great it feels in your hand. The cover glass
                            curves down around the sides to meet the anodized
                            aluminum enclosure in a remarkable, simplified
                            design.
                          </p>
                          <p>
                            There are no distinct edges. No gaps. Just a smooth,
                            seamless bond of metal and glass that feels like one
                            continuous surface.
                          </p>
                        </TabPane>
                        <TabPane tabId="concept">
                          <p>
                            It’s one continuous form where hardware and software
                            function in perfect unison, creating a new
                            generation of phone that’s better by any measure.
                          </p>
                          <p>
                            Larger, yet dramatically thinner. More powerful, but
                            remarkably power efficient. With a smooth metal
                            surface that seamlessly meets the new Retina HD
                            display.
                          </p>
                        </TabPane>
                        <TabPane tabId="support">
                          <p>
                            From the seamless transition of glass and metal to
                            the streamlined profile, every detail was carefully
                            considered to enhance your experience. So while its
                            display is larger, the phone feels just right.
                          </p>
                          <p>
                            It’s one continuous form where hardware and software
                            function in perfect unison, creating a new
                            generation of phone that’s better by any measure.
                          </p>
                        </TabPane>
                        <TabPane tabId="extra">
                          <p>
                            It’s one continuous form where hardware and software
                            function in perfect unison, creating a new
                            generation of phone that’s better by any measure.
                          </p>
                          <p>
                            Larger, yet dramatically thinner. More powerful, but
                            remarkably power efficient. With a smooth metal
                            surface that seamlessly meets the new Retina HD
                            display.
                          </p>
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="card-plain card-subcategories">
                <CardHeader>
                  <CardTitle className="text-center" tag="h4">
                    Page Subcategories
                  </CardTitle>
                  <br />
                </CardHeader>
                <CardBody>
                  {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                  <Nav
                    className="nav-pills-primary nav-pills-icons justify-content-center"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        role="tablist"
                        className={
                          this.state.pageTabs === "homePages" ? "active" : ""
                        }
                        onClick={() => this.setState({ pageTabs: "homePages" })}
                      >
                        <i className="now-ui-icons objects_umbrella-13" />
                        Home
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        role="tablist"
                        className={
                          this.state.pageTabs === "messagesPages"
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          this.setState({ pageTabs: "messagesPages" })
                        }
                      >
                        <i className="now-ui-icons shopping_shop" />
                        Messages
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        data-toggle="tab"
                        href="#pablo"
                        role="tablist"
                        className={
                          this.state.pageTabs === "settingsPages"
                            ? "active"
                            : ""
                        }
                        onClick={() =>
                          this.setState({ pageTabs: "settingsPages" })
                        }
                      >
                        <i className="now-ui-icons ui-2_settings-90" />
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <TabContent
                    className="tab-space tab-subcategories"
                    activeTab={this.state.pageTabs}
                  >
                    <TabPane tabId="homePages">
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits. <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </TabPane>
                    <TabPane tabId="messagesPages">
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas. <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </TabPane>
                    <TabPane tabId="settingsPages">
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        
      </>
    );
  }
}
Photos.contextType = AuthContext;

export default Photos;
