import React from 'react'
import Container from '../Components/Container'
import Navbar from '../Components/Navbar'
import TopSection from '../Components/TopSection'
import MiddleSection from '../Components/MiddleSection'

function HomePage() {
    return (
        <div>
            <Navbar />
            <Container>
                <TopSection />
                <MiddleSection />
            </Container>
        </div>
    )
}

export default HomePage