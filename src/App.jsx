import { useState } from 'react';
import Navbar from './components/Navbar';
import Entry from './components/Entry';
import Data from './data';

function App() {
    const locationElement = Data.map((loc) => {
        return <Entry key={loc.id} {...loc} />;
    });

    return (
        <div className='App'>
            <Navbar />
            <section className='entry-list'>{locationElement}</section>
        </div>
    );
}

export default App;
