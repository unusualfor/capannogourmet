import React from 'react';

function Edizione2025() {
  return (
    <>
      {/* SEZIONE 1: Header con nome ristorante */}
      <header className="App-header fullscreen anchor c1">
        <p className="header-content">
          <span className="col-he">Il Capanno</span><br/>
          <span className="col-hi">Gourmet</span>
        </p>
        <p className="smaller">Home Restaurant Itinerante</p>
      </header>

      {/* SEZIONE 2: Intro goliardica */}
      <section className="fullscreen anchor c2">
        <p>
          Due uomini.
        </p>
        <p>
          Un capanno.
        </p>
        <p>
          Molto capanno gourmet.
        </p>
        <p>
          🙆‍♀️🙆‍♂️🙆
        </p>
      </section>

      {/* SEZIONE 3: Chi siamo - FOFI */}
      <section className="fullscreen anchor c3">
        <p className="chef-title">Chef <span className="col-hi">Fofi</span></p>
        <p>🌲</p>
        <p className="bio">
          Formatosi a Faenz' e nelle foreste dell'Appennino Tosco-Emiliano,
          ha appreso i segreti del dragoncello selvatico dai monaci silenti
          di Naples.
        </p>
        <p className="bio">
          4 brevetti. 0 stelle Michelin.
        </p>
      </section>

      {/* SEZIONE 4: Chi siamo - DOME */}
      <section className="fullscreen anchor c4">
        <p className="chef-title">Maestro <span className="col-he">Domesh</span></p>
        <p>🏛️</p>
        <p className="bio">
          Fonico di fama internazionale prestato alla cucina.
          Capace di sentire quando la pasta è al dente
          solo dal suono sui bordi della pentola.
        </p>
        <p className="bio">
          "La giusta tenerina è un mix:
          se non allappa, hai sbagliato tutto."
        </p>
      </section>

      {/* SEZIONE 5: L'invito */}
      <section className="fullscreen anchor c5">
        <p>
          Gli chef vi invitano cordialmente
        </p>
        <p>
          all'esclusivo <span className="col-ei">Pranzo di Natale 2025</span>
        </p>
        <p>
          del ristorante Capanno Gourmet
        </p>
        <video
          src="/lobster-writing.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ maxWidth: '100%', borderRadius: '16px', marginTop: '1em' }}
        />
      </section>

      {/* SEZIONE 6: Data e ora */}
      <section className="fullscreen anchor c6">
        <p>
          📅 Domenica 14 Dicembre, 2025
        </p>
        <p>
          🕖 Ore 12:30
        </p>
        <p>
          📍 Casa di Fofi
        </p>
        <p>
          <span className="smaller">Dress code: Vestiti comodi, elastico in vita consigliato</span>
        </p>
      </section>

      {/* SEZIONE 7: Conferma presenza */}
      <section className="fullscreen anchor c7">
        <p>
          Conferma la tua presenza entro il 7 Dicembre
        </p>
        <p className="fullscreen anchor c7">
          (ed eventuali gravidanze, intolleranze, allergie,
          o traumi legati al dragoncello / ai dragoncelli)
        </p>
      </section>

      {/* SEZIONE 8: Il Menu (teaser) */}
      <section className="fullscreen anchor c8">
        <p className="col-ei">Il Menu - Edizione Limitata MMXXV</p>
        <img src="./gif-cucina.gif" alt="Gif cucina disastrosa" />
        <div>
          <div className="menu-course">
            <h2>Radici e Memorie, composizione vegetale di benvenuto</h2>
            <div className="menu-subitem">
              <span className="menu-dish">Selezione di ortaggi crudi in verticalità strutturale, scaglie di Parmigiano Reggiano 36 mesi in caduta libera, anelli di pasta pugliese in forma toroidale, miniature di Daucus carota in purezza</span>
              <span className="menu-desc">(carotine baby, tarallini, parmigiano, e quello che stava per scadere nella dispensa)</span>
            </div>
          </div>
          <div className="menu-course">
            <h2>Ricordi, due interpretazioni del Disco di Grano</h2>
            <div className="menu-subitem">
              <span className="menu-dish">I. Rosso Profondo: Base di pomodoro San Marzano, nuvola di latticini caprini e fermenti ellenici, coronata da foglie di Brassica oleracea croccante</span>
              <span className="menu-desc">(pizza rossa con mousse ricotta-yogurt e chips di cavolo nero)</span>
            </div>
            <div className="menu-subitem">
              <span className="menu-dish">II. La Margherita Eterna: Omaggio alla Regina, nella sua forma più pura e non negoziabile</span>
              <span className="menu-desc">(margherita, che cazzo vuoi di più)</span>
            </div>
          </div>
          <div className="menu-course">
            <h2>Dialogo tra Tradizione e Redenzione, Bis di Primi Natalizi</h2>
            <div className="menu-subitem">
              <span className="menu-dish">I. Gnocco della Foresta: Piccole nuvole di Solanum tuberosum, avvolte in ragù di proteina vegetale fermentata, in omaggio alle scelte etiche degli chef</span>
              <span className="menu-desc">(gnocchetti al ragù di tempeh — sì, è buono, fidati)</span>
            </div>
            <div className="menu-subitem">
              <span className="menu-dish">II. Il Cappelletto nel suo Brodo: Come da tradizione emiliano-romagnola, nuotano in brodo dorato di carne mista secondo il disciplinare della nonna di qualcun altro perchè gli chef sono terroni</span>
              <span className="menu-desc">(cappelletti in brodo — non si scherza)</span>
            </div>
          </div>
          <div className="menu-course">
            <h2>Autunno Tardivo, Dolce</h2>
            <div className="menu-subitem">
              <span className="menu-dish">Crumble di cereali alternativi in destrutturazione, caco maturo con sussurro di cacao, mousse di latte ovino addolcito, lacrime d'acero canadese</span>
              <span className="menu-desc">(biscotti senza glutine sbriciolati, caco mescolato a cacao, ricotta di pecora dolce, sciroppo d'acero)</span>
            </div>
          </div>
          <div className="menu-course centered">
            <h2>L'odore della malinconia</h2>
            <div className="menu-subitem">
              <span className="menu-dish">Estratto di Coffea Arabica Monoorigine Colombia o Brasile, servito nella sua forma più onesta ed espressa</span>
              <span className="menu-desc">(caffè espresso dalla Nespresso)</span>
            </div>
            <div className="menu-subitem">
              <span className="menu-dish">L'Ammazzacaffè del Drago</span>
              <span className="menu-desc">(Selezione a discrezione degli chef. Dovrebbe esserci ancora del Luigino di Deiv dall'anno scorso)</span>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE 8A: Note sul Menu */}
      <section className="fullscreen anchor c8 notes">
        <p className="smaller">Note sul Menu</p>
        <p>Menu soggetto a variazioni basate sull'umore degli chef, disponibilità degli ingredienti, e livello di sopportazione del Fonico.</p>
      </section>

      {/* SEZIONE 8B: Cocktail List */}
      <section className="fullscreen anchor c8 cocktails">
        <p className="col-ei">Cocktail List</p>
        <div className="menu-course">
          <h2>Selezione Agrumata</h2>
          <div className="menu-subitem">
            <span className="menu-dish">Nostalgia di Chinotto, ovvero Tranquilla Sara prima o poi tornerai a bere</span>
            <span className="menu-desc">Tonica, limone, ricordi di giovinezza</span>
          </div>
          <div className="menu-subitem">
            <span className="menu-dish">La Fefa va in Giappone</span>
            <span className="menu-desc">Tonica, matcha, Japanese gin, essenza di ferie</span>
          </div>
          <div className="menu-subitem">
            <span className="menu-dish">Il viaggio del Pompelmo Errante</span>
            <span className="menu-desc">Tonica rosa, pompelmo, dubbi esistenziali</span>
          </div>
          <div className="menu-subitem">
            <span className="menu-dish">Mind the gap, Domesh</span>
            <span className="menu-desc">London Dry Gin, tonica, nebbia di Londra distillata (c'è davvero)</span>
          </div>
        </div>
        <div className="menu-course">
          <h2>Selezione Amara</h2>
          <div className="menu-subitem">
            <span className="menu-dish">Garibaldi a Ferrara per i buskers</span>
            <span className="menu-desc">Bitter, cacao, spremuta di arancia, unità nazionale</span>
          </div>
          <div className="menu-subitem">
            <span className="menu-dish">Poteva andare meglio, ma poteva anche andare peggio</span>
            <span className="menu-desc">Bitter, tonica al pompelmo, segreti di famiglia</span>
          </div>
          <div className="menu-subitem">
            <span className="menu-dish">L'Americano a Forlì</span>
            <span className="menu-desc">Bitter, Vermouth, Soda, sentore di Romagna, indecisione</span>
          </div>
          <div className="menu-subitem">
            <span className="menu-dish">Never again, Hendrics ovvero Il Negroni</span>
            <span className="menu-desc">Bitter, Gin, Vermouth: Equilibrio, Potenza, Conseguenze.</span>
          </div>
        </div>
        <div className="menu-course">
          <h2>Fuori Menù - soggetto a disponibilità di un certo commensale</h2>
          <div className="menu-subitem">
            <span className="menu-dish">Serenità apparente, ovvero A cazzo rapido</span>
            <span className="menu-desc">Bourbon americano, camomilla, illusioni</span>
          </div>
        </div>
      </section>

      <section className="fullscreen anchor c8 notes">
        <p className="smaller">Note sui Cocktails</p>
        <p>Per le persone astemie o gestanti sono state previste variazioni degli stessi drink sopra citati. Perchè vi vogliamo bene così.</p>
      </section>

      {/* SEZIONE 8C: Intrattenimento */}
      <section className="fullscreen anchor c8 entertainment">
        <p className="smaller">Intrattenimento</p>
        <p>Durante la serata sarà disponibile la simulazione storica di Pro Evolution Soccer — Naples Edition su hardware Sony di seconda generazione emulato.</p>
        <p>Formazioni taroccate, Fofi fortissimo ma con 1/99 al tiro. Cori in napoletano. Nessun salvataggio garantito.</p>
      </section>

      {/* SEZIONE 9: Recensioni */}
      <section className="fullscreen anchor c9 recensioni">
        <p className="col-ei">Dicono di noi</p>

        <div className="review">
          <p className="review-text">
            "Il fonico mi ha spiegato l'alveolatura per 40 minuti. Ho pianto. È stato bello. Tornerei dal Portogallo apposta per rifarlo."
          </p>
          <p className="review-author">— Marco F., Coimbra</p>
          <p className="stars">⭐⭐⭐⭐</p>
        </div>

        <div className="review">
          <p className="review-text">
            "In una sola serata ho mangiato, bevuto, riso, giocato a calcio, uno chef mi ha ubriacato e l'altro mi ha sottomesso. Un'altra commensale infermiera in smonto mi ha assistito e ho passato il resto della serata a dormire. ***** *** che serata. (EDIT: la volta prima mi si è anche rotto il cellulare, che serata.)"
          </p>
          <p className="review-author">Autore sconosciuto — Pesaro</p>
          <p className="stars">⭐⭐⭐⭐⭐</p>
        </div>

        <div className="review">
          <p className="review-text">
            "Non ho ancora capito perchè il ristorante sia itinerante, ogni tanto a Faenza e ogni tanto a Forlì. Comunque il cibo è buono e gli chef simpatici, anche se un po' cringe. Bella anche la proiezione sui funghi."
          </p>
          <p className="review-author">Davide — Santa Giustina (RN)</p>
          <p className="stars">⭐⭐⭐</p>
        </div>

        <div className="review">
          <p className="review-text">
            "Potrei anche mangiare per terra in un ristorante del genere"
          </p>
          <p className="review-author">— 🐕 Connie, Il cane di Fofi e Fefa</p>
          <p className="stars">⭐⭐⭐⭐⭐</p>
        </div>

      </section>

      {/* SEZIONE 10: Chiusura */}
      <section className="fullscreen anchor c10 noi">
        <p className="smaller">Ci vediamo al Capanno</p>
        <p>🐉🎄🐉</p>
      </section>
    </>
  );
}

export default Edizione2025;
