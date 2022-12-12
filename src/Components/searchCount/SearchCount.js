import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UnopDropdown from "unop-react-dropdown";


const SearchCount = ({ searchCount }) => {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-between'>
                    <p>{searchCount}</p>
                    <UnopDropdown
                        // onAppear={handler}
                        // onDisappearStart={handler}
                        trigger={<button className="AnimatedDropdownButton form-control px-3">Sort By</button>}
                        delay={300}
                        align="CENTER"
                        hover
                    >
                        <div className='form-control'>
                            <div>I am random</div>
                            <div>I am random</div>
                            <div>I am random</div>
                        </div>
                    </UnopDropdown>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchCount
