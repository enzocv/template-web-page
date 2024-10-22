import './App.css'
import { CardList, Footer, Header, HeroImage, TabContent, Table } from './components'
import { Tab, Tabs } from './components/Tabs';


function App() {

  const tableData = [
    { id: 1, description: 'Descripción 1' },
    { id: 2, description: 'Descripción 2' },
    { id: 3, description: 'Descripción 3' },
    { id: 4, description: 'Descripción 4' },
  ];

  const cardsData = [
    { image: 'https://picsum.photos/286/180', title: 'Card 1', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quisquam sint officia consequuntur, veniam illo aspernatur, consequatur quo quos nobis harum repellat voluptates earum, at beatae facilis omnis ut perspiciatis.' },
    { image: 'https://picsum.photos/286/180', title: 'Card 2', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quisquam sint officia consequuntur, veniam illo aspernatur, consequatur quo quos nobis harum repellat voluptates earum, at beatae facilis omnis ut perspiciatis.' },
    { image: 'https://picsum.photos/286/180', title: 'Card 3', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quisquam sint officia consequuntur, veniam illo aspernatur, consequatur quo quos nobis harum repellat voluptates earum, at beatae facilis omnis ut perspiciatis.' },
    // Agrega más tarjetas según sea necesario
  ];

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {/* Contenido principal de la página */}
        <Header />
        <HeroImage
          imageUrl="https://via.placeholder.com/1920x1080"
          title="Bienvenido a Nuestro Sitio"
          subtitle="Estamos aquí para ayudarte"
          buttonText="Descubre Más"
          onButtonClick={handleButtonClick}
        />
        <div className="container min-h-80 mx-auto p-4">
          <Tabs>
            <Tab label="Tabla">
              <Table data={tableData} />
            </Tab>
            <Tab label="Tab 2">
              <TabContent title="Título 2" content="Contenido del tab 2" />
            </Tab>
            <Tab label="Tab 3">
              <TabContent title="Título 3" content="Contenido del tab 3" />
            </Tab>
          </Tabs>
        </div>

        <div className="container mx-auto">
          <CardList cards={cardsData} />
        </div>
      </main>
      <Footer year={2024} copyright="Todos los derechos reservados." />
    </div>
  )
}

export default App
