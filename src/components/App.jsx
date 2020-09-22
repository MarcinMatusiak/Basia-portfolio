import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

const categories = [
    {
        name: 'Sesje noworodkowe',
        id: 'sesje_noworodkowe',
        resources: [
        {
            name: 'Marysia',
            id: 'marysia',
            url: '/sesje-noworodkowe/marysia'
        },
        {
            name: 'Kacper',
            id: 'kacper',
            url: '/sesje-noworodkowe/kacper'
        }
        ]
    },
    {
        name: 'Sesje dziecięce',
        id: 'sesje_dzieciece',
        resources: [
        {
            name: 'Mikołaj',
            id: 'mikolaj',
            url: '/sesje-dzieciece/mikolaj'
        },
        {
            name: 'Róża',
            id: 'roza',
            url: '/sesje-dzieciece/roza'
        }
        ]
    },
    {
        name: 'Sesje rodzinne',
        id: 'sesje-rodzinne',
        resources: [
        {
            name: 'Róża, Mikołaj i Marcin',
            id: 'mikolaj-roza-marcin',
            url: '/sesje-rodzinne/mikolaj-roza-marcin'
        },
        {
            name: 'Kacper, Oliwia i Ania',
            id: 'kacper-oliwia-ania',
            url: '/sesje-rodzinne/kacper-oliwia-ania'
        },
        {
            name: 'Marysia, Zuzia, Kasia i Błażej',
            id: 'marysia-zuzia-kasia-blazej',
            url: '/sesje-rodzinne/marysia-zuzia-kasia-blazej'
        }
        ]
    },
    {
        name: 'Sesje kobiece',
        id: 'sesje-kobiece',
        resources: [
        {
            name: 'Gabriela',
            id: 'gabriela',
            url: '/sesje-kobiece/gabriela'
        }
        ]
    },
    {
        name: 'Sesje portretowe',
        id: 'sesje-portretowe',
        resources: [
        {
            name: 'Beata',
            id: 'beata',
            url: '/sesje-portretowe/beata'
        },
        {
            name: 'Róża',
            id: 'roza',
            url: '/sesje-portretowe/roza'
        },
        {
            name: 'Mikołąj',
            id: 'mikolaj',
            url: '/sesje-portretowe/mikolaj'
        }
        ]
    }
]

function Resource({ match }) {
    const category = categories.find(({ id }) => id === match.params.categoryId)
        .resources.find(({ id }) => id === match.params.subId)

    return (
        <div>
        <h3>{category.name}</h3>
        <a href={category.url}>Zobacz zdjęcia</a>
        </div>
    )
}

function Category({ match }) {
    const category = categories.find(({ id }) => id === match.params.categoryId)

    return (
        <div>
        <h2>{category.name}</h2>

        <ul>
            {category.resources.map((sub) => (
            <li key={sub.id}>
                <Link to={`${match.url}/${sub.id}`}>{sub.name}</Link>
            </li>
            ))}
        </ul>

        <hr />

        <Route path={`${match.path}/:subId`} component={Resource} />
        </div>
    )
}

function Categories({ match }) {
    return (
        <div>
        <h1>Portfolio</h1>
        <ul>
            {categories.map(({ name, id }) => (
            <li key={id}>
                <Link to={`${match.url}/${id}`}>{name}</Link>
            </li>
            ))}
        </ul>

        <Route path={`${match.path}/:categoryId`} component={Category} />
        </div>
    )
}

function Home() {
    return <h2>Strona domowa</h2>
}

function Prices() {
    return <h2>Cennik</h2>;
}

function About() {
    return <h2>O mnie</h2>;
}

function Contact() {
    return <h2>Kontakt</h2>;
}

class App extends React.Component {
    constructor (props) {
        super (props);
        this.state = {}
    }

    render() {
        return (
        <Router>
            <nav>
            <ul>
                <li><Link to='/'>Strona domowa</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/cennik'>Cennik</Link></li>
                <li><Link to='/o-mnie'>O mnie</Link></li>
                <li><Link to='/kontakt'>Kontakt</Link></li>
            </ul>

            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Categories} />
            <Route path='/cennik' component={Prices} />
            <Route path='/o-mnie' component={About} />
            <Route path='/kontakt' component={Contact} />
            </nav>
        </Router>
        )
    }
}

export default App

ReactDOM.render(<App />, document.getElementById("container"));