import React from 'react'

import { Tab,  Col, Row, ListGroup } from 'react-bootstrap';
import ShowEmpTaskList from '../pages/ShowEmpTaskList'
import WeeklyTasks from '../pages/WeeklyTasks'
import CurrentDayTask from '../pages/CurrentDayTask'


function EmptaskList() {
  return (
    <div >
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1"  >

        
  <Row>
    <Col sm={4}>
      <ListGroup horizontal >
        <ListGroup.Item action href="#link1">
          Day
        </ListGroup.Item>
        <ListGroup.Item action href="#link2">
          Coming Week
        </ListGroup.Item>
        <ListGroup.Item action href="#link3">
          Coming Month
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Row sm={4}>
      <Tab.Content >
        <Tab.Pane eventKey="#link1">        
        <CurrentDayTask/>
        </Tab.Pane>
        <Tab.Pane eventKey="#link2">
        <WeeklyTasks/>
        </Tab.Pane>
        <Tab.Pane eventKey="#link3">
        <ShowEmpTaskList/>
        </Tab.Pane>
      </Tab.Content>
    </Row>
  </Row>
</Tab.Container>
    </div>
  )
}

export default EmptaskList