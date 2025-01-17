import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { useState } from 'react'; // Adicionando a importação do useState


const Vazamento = () => (
  <div className="lore-page">
    <h1>Vazamentos de GTA 6</h1>
    <p>
      Diversos pequenos clipes foram disponibilizados no Twitter, e a informação é que o mesmo hacker que invadiu o Uber, conseguiu as imagens, vídeos e mais de 10 mil linhas do código-fonte do jogo, em uma versão pré-alpha.
      O especialista da Bloomberg, Jason Schreier, twittou afirmou junto a fontes da Rockstar que o vazamento é real, e que os vídeos e as imagens mostram o cenário de Vice City e os dois protagonistas, Jason e Lucia.
    </p>
    <img
      src="https://i.ytimg.com/vi/kGmadhcIVAY/maxresdefault.jpg" // Certifique-se de que a imagem está na pasta 'assets'
      alt="Imagem do vazamento"
      className="lore-image"
    />
  </div>
);

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <Router>
      <div className="page">
        <header className="header">
          <h1>Grand Theft Auto VI</h1>
          <nav className="nav-bar">
            <NavLink
              to="/"
              className={activeTab === 'home' ? 'active' : ''}
              onClick={() => setActiveTab('home')}
            >
              Início
            </NavLink>
            <NavLink
              to="/gallery"
              className={activeTab === 'gallery' ? 'active' : ''}
              onClick={() => setActiveTab('gallery')}
            >
              Galeria
            </NavLink>
            <NavLink
              to="/story"
              className={activeTab === 'story' ? 'active' : ''}
              onClick={() => setActiveTab('story')}
            >
              História
            </NavLink>
            <NavLink
              to="/lore"
              className={activeTab === 'lore' ? 'active' : ''}
              onClick={() => setActiveTab('lore')}
            >
              Vazamentos
            </NavLink>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route
              path="/"
              element={
                activeTab === 'home' && (
                  <>
                    <section className="release-info">
                      <h2>Data de Lançamento</h2>
                      <p>2025</p>
                    </section>

                    <section className="description">
                      <h2>O que esperar?</h2>
                      <p>
                        Grand Theft Auto VI (GTA 6) é um dos jogos mais aguardados pelos fãs da
                        série. Prometendo gráficos impressionantes, um mundo ainda mais
                        imersivo e expansivo, além de uma narrativa de tirar o fôlego, este
                        título está sendo desenvolvido pela Rockstar Games.
                      </p>
                    </section>

                    <section className="trailer">
                      <h2>Trailer Oficial</h2>
                      <iframe
                        title="GTA 6 Official Trailer"
                        width="30%"
                        height="315"
                        src="https://www.youtube.com/embed/QdBZY2fkU-0"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </section>

                    <section className="gallery-info">
                      <h2>Explore a Galeria</h2>
                      <p>Clique na aba Galeria acima para ver imagens exclusivas do jogo.</p>
                    </section>
                  </>
                )
              }
            />
            <Route
              path="/gallery"
              element={
                activeTab === 'gallery' && (
                  <section className="gallery">
                    <h2>Galeria de Imagens</h2>
                    <div className="image-grid">
                      <img src="https://th.bing.com/th/id/OIP.zbA_kTA44jlSCTXmQNVF7wHaEK?rs=1&pid=ImgDetMain" alt="Imagem 1" />
                      <img src="https://images.hdqwalls.com/wallpapers/gta-6-sunset-4k-ox.jpg" alt="Imagem 2" />
                      <img src="https://staticg.sportskeeda.com/editor/2023/03/efceb-16798167295983-1920.jpg" alt="Imagem 3" />
                      <img src="https://game-experience.it/wp-content/uploads/2023/11/gta-6-i-fan-stanno-incorniciando-il-messaggio-di-annuncio-di-rockstar-games-per-venderlo.jpg" alt="Imagem 4" />
                    </div>
                  </section>
                )
              }
            />
            <Route
              path="/story"
              element={
                activeTab === 'story' && (
                  <section className="story">
                    <h2>História e Ambientação</h2>
                    <p>
                      Grand Theft Auto VI traz uma narrativa rica e envolvente, ambientada em
                      uma recriação fictícia de algumas das cidades mais vibrantes do mundo.
                      Os jogadores poderão explorar uma linha do tempo única que combina
                      elementos clássicos da série com inovações modernas.
                    </p>
                    <p>
                      A trama gira em torno de personagens complexos, com motivações diversas,
                      navegando por desafios em um cenário aberto e interativo.
                    </p>
                    <p>
                      Espere o inesperado, com reviravoltas emocionantes e escolhas que podem
                      alterar o curso do jogo.
                    </p>
                  </section>
                )
              }
            />
            {/* Adicionando a página de Vazamentos */}
            <Route path="/lore" element={<Vazamento />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>© 2025 Rockstar Games. Todos os direitos reservados.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
