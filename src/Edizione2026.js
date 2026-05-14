import React from 'react';
import { Outlet } from 'react-router-dom';

function Edizione2026() {
  return (
    <>
      {/* SEZIONE 1: Header */}
      <header className="App-header fullscreen anchor c1">
        <p className="header-content">
          <span className="col-he">Il Capanno</span><br/>
          <span className="col-hi">Gourmet</span>
        </p>
        <p className="smaller">Home Restaurant Itinerante</p>
      </header>

      {/* SEZIONE 2: Intro */}
      <section className="fullscreen anchor c2">
        <p>
          Due uomini.
        </p>
        <p>
          Un capanno.
        </p>
        <p>
          Ancora più capanno gourmet.
        </p>
        <p>
          🙆‍♀️🙆‍♂️🙆
        </p>
      </section>

      {/* SEZIONE 3: Chef FOFI */}
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

      {/* SEZIONE 4: Maestro DOME */}
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
          all'esclusivo <span className="col-ei">Pranzo di Lendi 2026</span>
        </p>
        <p>
          del ristorante Capanno Gourmet
        </p>
      </section>

      {/* SEZIONE 6: Data e ora */}
      <section className="fullscreen anchor c6">
        <p>
          📅 17-07-26
        </p>
        <p>
          🕖 12:30 PM
        </p>
        <p>
          📍 Casa di Hendi e Sara
        </p>
        <p>
          <span className="smaller">Dress code: Vestiti sporchi, ma comodi, elastico in vita consigliato</span>
        </p>
      </section>

      {/* SEZIONE 7: Conferma presenza */}
      <section className="fullscreen anchor c7">
        <p>
          Conferma la tua presenza
        </p>
        <p>
          (ed eventuali gravidanze, intolleranze, allergie,
          o traumi legati al dragoncello / ai dragoncelli)
        </p>
        <Outlet />
      </section>

      {/* SEZIONE 8: Il Menu */}
      <section className="fullscreen anchor c8">
        <p className="col-ei">Il Menu — Edizione Limitata MMXXVI</p>
        <img src="./oven.gif" alt="Gif cucina disastrosa" style={{ maxWidth: '100%', borderRadius: '12px', marginTop: '1em' }} />
        <div>

          {/* ANTIPASTI */}
          <div className="menu-course">
            <h2>Itinerario Padano-Peninsulare in Assaggio</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Selezione di carni stagionate e formaggi in libero pellegrinaggio
                da Nord a Sud della Penisola, accompagnati dal Disco di Grano
                Romagnolo nella sua forma piatta e non lievitata
              </span>
              <span className="menu-desc">
                (affettati e formaggi da tutta Italia, piadina, tigelle —
                selezione curata con la stessa attenzione che si riserva
                ai propri risparmi)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Lo Scisma del Maestro: Scrocchiarella Romana in aperta dissidenza</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Impasto ribelle elaborato dal Maestro Domesh in plateale rifiuto
                del Metodo Pizzafox™, croccantezza dichiarata, metodologia
                alternativa non divulgata per ragioni legali
              </span>
              <span className="menu-desc">
                (pizza scrocchiarella — Dome ha litigato con la ricetta ufficiale
                e ha vinto, a detta sua. Pizzafox non ha commentato)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Il Totem di Hendi: Pane Fatto in Casa in Autopromozione Perpetua</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Impasto lievitato secondo ricetta Top Secret™ di proprietà
                esclusiva di Hendi, contenente ingredienti mai rivelati in sette
                anni di interrogatori amichevoli. Affettato con solennità
                certificata, ogni fetta è una promessa di bontà che precede
                se stessa. Hendi ha già iniziato a parlarne da settimane.
                Avrà ragione? Probabilmente. Smettere di parlarne? No.
              </span>
              <span className="menu-desc">
                (pane fatto in casa — sì, fatto da Hendi, sì, con ingredienti
                segreti, sì, probabilmente buono. No, non smetterà mai di
                dire quanto sia buono. Preparatevi)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Creme del Levante e Archivi Vegetali Recuperati</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Hummus di ceci in purezza secondo il disciplinare del Vicino
                Oriente, accompagnato da ortaggi selezionati dagli strati
                profondi della dispensa del Maestro — autenticità garantita
                dal processo di rinvenimento
              </span>
              <span className="menu-desc">
                (hummus e pinzimonio — le verdure erano nel frigo di Dome
                da un po', ma stanno benissimo, fidati)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Il Caos Partenopeo: Fritturine (al forno) in Libertà Vigilata di Fofi</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Selezione non catalogata di sfiziosità (scaldate nel forno di Hendi) secondo la tradizione
                napoletana, come prescritta dalle mani sapienti dello Chef Fofi.
                Ogni pezzo è un'opera d'arte minore, preparato a temperature incerte,
                risultato garantito come "croccante quasi sempre". Composizione
                segreta, perfino a Fofi
              </span>
              <span className="menu-desc">
                (fritturine varie napoletane — Fofi non sa più cosa ha messo,
                ma promette che è buono. Provare per credere, come dicono
                i fonici quando il suono è strano)
              </span>
            </div>
          </div>

          {/* SECONDO */}
          <div className="menu-course menu-category-break">
            <h2>La Coalizione in Sfoglia: Cilindri Salati della Coppia</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Rotoli di pasta sfoglia ripieni secondo protocollo segreto
                e insindacabile della Coalizione Hendi-Sara, forma geometrica
                dichiaratamente cilindrica, contenuto classificato fino al
                primo morso
              </span>
              <span className="menu-desc">
                (rotoli salati — Hendi e Sara non hanno rivelato la ricetta
                e non lo faranno)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Il Monolite — Scultura in Carne di Lendi</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Polpettone plasmato a mani nude dall'artigiano Lendi con
                disciplina, visione e totale disinteresse per le proporzioni.
                Compatto come una decisione irreversibile, morbido come un
                rimpianto di qualità. Ogni strato racconta una storia.
                Nessuno dei commensali la conosce.
              </span>
              <span className="menu-desc">
                (polpettone dell'Ali che Lendi avrà fissato intensamente, 
                per essere precisi. Non è detto che sia buono, ma sarà sicuramente interessante)
              </span>
            </div>
          </div>

          {/* DOLCE */}
          <div className="menu-course menu-category-break">
            <h2>Mysterium della Luci — Composizione Dolciaria Segreta</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Specialità ad alto contenuto di sorpresa, rivelata
                esclusivamente al momento del servizio. Realizzata dalla Luci
                secondo criteri noti solo a lei, sotto la supervisione tecnica
                dell'Umarell Davide — consulente esterno, osservatore critico
                di lungo corso, non ha toccato nulla e assaggiato tutto
              </span>
              <span className="menu-desc">
                (dolce della Luci — Davide ha guardato e commentato, forse acceso il forno,
                Luci ha ignorato a tratti. Il risultato sarà sicuramente superiore
                alle aspettative di tutti)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* SEZIONE 8A: Note sul Menu */}
      <section className="fullscreen anchor c8 notes">
        <p className="smaller">Note sul Menu</p>
        <p>Menu soggetto a variazioni basate sull'umore degli chef, disponibilità degli ingredienti, e livello di cooperazione dei commensali ospiti.</p>
        <p>Gli chef non sono responsabili di eventuali delusioni legate al polpettone. Lendi sì.</p>
      </section>

      {/* SEZIONE 8B: Bere */}
      <section className="fullscreen anchor c8 cocktails">
        <p className="col-ei">Il Buffet dell'Improvvisazione Collettiva</p>
        <div className="menu-course">
          <h2>Selezione Spontanea — metodo "quello che c'era in casa"</h2>
          <div className="menu-subitem">
            <span className="menu-dish">
              Assortimento di bevande alcoliche e analcoliche assemblato
              con il metodo della mancata coordinazione pre-evento,
              ormai tradizione consolidata del Capanno Gourmet.
              Ogni bottiglia è una sorpresa. Ogni bicchiere, una scommessa.
            </span>
            <span className="menu-desc">
              (quello che capita — non ci siamo coordinati abbastanza presto
              per una cocktail list. È andata così anche l'anno scorso e poi 
              Fofi ha fatto notte fonda a cercare di far bere tutto a tutti, 
              quindi abbiamo deciso di lasciare tutto alla fortuna)
            </span>
          </div>
          <div className="menu-subitem">
            <span className="menu-dish">
              Analcolici per i virtuosi, i guidatori e i pentiti
            </span>
            <span className="menu-desc">
              (acqua, probabilmente, magari un succhino ACE se ce l'ha hendi)
            </span>
          </div>
        </div>
      </section>

      <section className="fullscreen anchor c8 notes">
        <p className="smaller">Note sul Bere</p>
        <p>Chi porta una bottiglia decente ha diritto a un posto migliore a tavola. È una politica informale ma rigorosa.</p>
      </section>

      {/* SEZIONE 9: Recensioni */}
      <section className="fullscreen anchor c9 recensioni">
        <p className="col-ei">Dicono di noi</p>

        <div className="review">
          <p className="review-text">
            "Non capisco quale sia il senso di fare una cena quando Fofi abitualmente non fa colazione. Comunque, non hanno fatto troppo rumore e soprattutto non c'erano le musiche di PES Naples. E dico questo da vicino che abitualmente sono sorpreso dal casino."
          </p>
          <p className="review-author">— Il Vicino di Casa di Fofi</p>
          <p className="stars">⭐⭐⭐</p>
        </div>

        <div className="review">
          <p className="review-text">
            "Ho riscontrato come i ragazzi sono rientrati al lavoro con un entusiasmo e una motivazione rinnovati dopo il pranzo. Fofi ha compilato il modulo di partecipazione come se fosse una exit interview. Evidentemente la qualità gastronomica è inversamente proporzionale alla coordinazione logistica degli chef, quindi: alta da paura."
          </p>
          <p className="review-author">— Responsabile Risorse Umane di *** (lunedì successivo al pranzo)</p>
          <p className="stars">⭐⭐⭐⭐</p>
        </div>

        <div className="review">
          <p className="review-text">
            "Da pediatra avevo molte riserve sulla partecipazione di Lendi, ma viste le passate edizioni, ho dato il mio benestare alla sua presenza. Sto mettendo questa recensione perchè obbligato da Sara. Lei ci ha creduto. Bravi, chef."
          </p>
          <p className="review-author">— Pediatra di Lendi</p>
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

export default Edizione2026;
