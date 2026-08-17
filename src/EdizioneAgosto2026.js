import React from 'react';
import { Outlet } from 'react-router-dom';

function EdizioneAgosto2026() {
  return (
    <>
      {/* SEZIONE 1: Header */}
      <header className="App-header fullscreen anchor c1">
        <p className="header-content">
          <span className="col-he">Il Capanno</span><br/>
          <span className="col-hi">Gourmet</span>
        </p>
        <p className="smaller">Home Restaurant Itinerante — Sezione Estiva</p>
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
          Trentotto gradi all'ombra.
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
          Quest'anno ospita in casa propria. Ha già spostato tre volte il tavolo.
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
          D'estate abbandona i fornelli e passa al crudo,
          al freddo e alle creme. Dice che è una scelta stilistica.
        </p>
      </section>

      {/* SEZIONE 5: L'invito */}
      <section className="fullscreen anchor c5">
        <p>
          Gli chef vi invitano cordialmente
        </p>
        <p>
          all'esclusiva <span className="col-ei">Cena del Solleone 2026</span>
        </p>
        <p>
          del ristorante Capanno Gourmet
        </p>
      </section>

      {/* SEZIONE 6: Data e ora */}
      <section className="fullscreen anchor c6">
        <p>
          📅 Domenica 23 Agosto, 2026
        </p>
        <p>
          🕧 Ore 12:30 PM
        </p>
        <p>
          📍 Casa di Fofi
        </p>
        <p>
          <span className="smaller">Ai fornelli (o a quel che ne resta con questo caldo): Domesh e Fofi</span>
        </p>
        <p>
          <span className="smaller">Dress code: Lino, cotone, rassegnazione. Elastico in vita sempre consigliato</span>
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
        <p className="col-ei">Il Menu — Edizione Estiva MMXXVI</p>
        <img src="./oven.gif" alt="Gif cucina disastrosa" style={{ maxWidth: '100%', borderRadius: '12px', marginTop: '1em' }} />
        <div>

          {/* PRINCIPIO — I FREDDI */}
          <div className="menu-course">
            <h2>Composizione Erbacea con Cucurbitacea Solstiziale e Latticino Ellenico in Salamoia</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Foglie pungenti di rucola raccolte al mattino, cubi d'anguria
                recisi secondo geometria approssimativa, e formaggio greco
                conservato nella sua acqua salata secondo usanza millenaria.
                Croccantezza dichiarata in sede di presentazione e non garantita
                oltre i venti minuti dal servizio
              </span>
              <span className="menu-desc">
                (insalata con rucola, cocomero e feta — è fresca, è buona,
                e se la lasci lì troppo diventa una zuppa. Mangiala subito)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Reliquie di Grano Biscottato con Bacche Rosse e Unguento del Tacco d'Italia</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Frammenti di pane due volte cotto secondo il metodo dei naviganti,
                sormontati da piccoli pomodori tondi e irrorati con olio di Puglia
                a denominazione severamente controllata e garantita, elevato a
                rango di reliquia dal solo fatto di essere stato trasportato a mano
              </span>
              <span className="menu-desc">
                (bruschettine e mini freselle con pomodorini e olio pugliese DOCG —
                sì, sappiamo che per l'olio la sigla giusta sarebbe un'altra.
                No, non la cambiamo. È buono comunque)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>La Battilarda: Carni Stagionate e Caci in Duetto con Nettari e Confetture</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Assemblaggio su tagliere di carni riposate a lungo e formaggi
                di varia fermentazione, accompagnati da miele d'api non
                interpellate e conserve dolci di frutta. Disposizione curata
                secondo criteri estetici discussi a lungo e poi abbandonati
              </span>
              <span className="menu-desc">
                (tagliere di affettati e formaggi con miele e confetture —
                il classico che non tradisce mai, soprattutto quando gli chef
                non hanno voglia di cucinare)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Ortaggi Crudi in Immersione Volontaria</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Selezione di verdure recise in bastoncini e destinate al bagno
                emulsivo in olio, sale e aceto. Nessuna cottura è stata inflitta.
                Nessuna verdura è stata consultata
              </span>
              <span className="menu-desc">
                (verdure in pinzimonio — l'unico piatto del menu che si prepara
                da solo, motivo per cui è sempre presente)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Crema Levantina del Maestro — Recensione Annuale</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Purea di ceci secondo il disciplinare del Vicino Oriente,
                elaborata dal Maestro Domesh con dosaggi che varia ogni volta
                e non annota mai. Consistenza dichiarata "quella giusta",
                parametro non misurabile con strumenti noti
              </span>
              <span className="menu-desc">
                (hummus di Domesh — istituzione del Capanno. Ogni edizione
                è diversa dalla precedente e ogni volta lui giura che è
                la stessa ricetta)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Latte Colato d'Oriente sotto Cenere di Peperone Affumicato</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Formaggio fresco ottenuto per lenta perdita di siero,
                spolverato con polvere rossa di peperone passato per il fumo.
                Colore intenso, sapore affumicato, provenienza dichiarata
                genericamente come "il Levante"
              </span>
              <span className="menu-desc">
                (labneh alla paprika affumicata — la novità di quest'anno.
                Fa molto ristorante vero. Si spalma su tutto)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Il Ritorno del Caos Partenopeo: Sfere d'Alga Marina in Emulsione al Basilico</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Polpette di alga secondo la tradizione napoletana, riproposte
                per acclamazione popolare dopo l'edizione precedente, in
                compagnia di altre sfiziosità di ignota catalogazione, il tutto
                accompagnato da salsa emulsionata all'erba profumata
              </span>
              <span className="menu-desc">
                (polpette di alghe e fritturine napoletane con maionese al
                basilico — come la volta scorsa, perché la volta scorsa
                sono sparite in undici minuti)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Disco di Grano Romagnolo, Pane Condizionale di Hendi e Veli di Cucurbita</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Impasto piatto e non lievitato secondo tradizione di Romagna,
                affiancato — se e solo se la volontà di Hendi si manifesterà
                in tempo utile — dal Pane Fatto in Casa a ricetta Top Secret™,
                e completato da sottili sfoglie di zucchina cotte in padella
                secondo il metodo delle crespelle
              </span>
              <span className="menu-desc">
                (piadina, pane di Hendi e crêpes di zucchine — il pane è
                subordinato all'umore di Hendi, che è una variabile
                storicamente imprevedibile. Preghiamo)
              </span>
            </div>
          </div>

          {/* IL PIATTO */}
          <div className="menu-course menu-category-break">
            <h2>L'Agorà del Riso — Stazione di Autodeterminazione Cerealicola</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Postazione in libera consultazione dove ogni commensale
                compone la propria insalata di riso secondo coscienza:
                riso basmati dai chicchi lunghi, ortaggi minuti, proteine
                laccate a scelta tra salmone, pollo e tofu, fagioli di soia
                acerbi nel loro baccello, e un assortimento di salse
                dalle intenzioni non dichiarate
              </span>
              <span className="menu-desc">
                (angolo crea-la-tua-insalata-di-riso: basmati, verdurine,
                salmone / pollo / tofu glassati, edamame, salse — così se
                viene male è colpa tua. Gli chef declinano ogni responsabilità
                sulle combinazioni)
              </span>
            </div>
          </div>

          {/* DOLCE */}
          <div className="menu-course menu-category-break">
            <h2>Mysterium della Luci — Atto II</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Specialità dolciaria ad alto contenuto di sorpresa, rivelata
                esclusivamente al momento del servizio. Realizzata dalla Luci
                secondo criteri noti solo a lei, in versione estiva e
                presumibilmente fredda, perché a 38 gradi accendere il forno
                sarebbe un atto ostile
              </span>
              <span className="menu-desc">
                (dolce della Luci — nessuno sa cosa sia, nessuno ha chiesto,
                tutti se ne fideranno. Come sempre)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* SEZIONE 8A: Note sul Menu */}
      <section className="fullscreen anchor c8 notes">
        <p className="smaller">Note sul Menu</p>
        <p>Menu soggetto a variazioni basate sull'umore degli chef, sulla temperatura percepita, e sulla capienza reale del frigo di Fofi.</p>
        <p>Il pane di Hendi è un'ipotesi, non un impegno contrattuale.</p>
      </section>

      {/* SEZIONE 8B: Cocktail List */}
      <section className="fullscreen anchor c8 cocktails">
        <p className="col-ei">Cocktail List — Metodo delle Due Basi</p>

        <div className="menu-course">
          <h2>Base Prima ● Amaro in Lavaggio Grasso di Cocco e Vermut Rosso</h2>
          <div className="menu-subitem">
            <span className="menu-dish">
              Liquore amaro sottoposto al procedimento del lavaggio con grasso
              di noce di cocco — l'olio accoglie gli aromi, il gelo lo separa,
              il liquido resta e ricorda. Unito a vino aromatizzato rosso
              secondo dosaggio non divulgabile
            </span>
            <span className="menu-desc">
              (bitter in fat-washing di cocco e vermouth rosso — sì, Fofi ha
              messo il cocco dentro l'alcol e poi l'ha congelato. No, non è
              un errore. Sì, ci ha pensato per settimane)
            </span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">Un posto lontano che Hendi e Sara non vedranno quest'anno</span>
            <span className="menu-desc">Base prima, succo d'ananas, lime, menta — il tropicale della situazione, servito con lieve senso di colpa collettivo</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">Domenica mattina a San Andrès</span>
            <span className="menu-desc">Base prima, prosecco, soda, arancia — il più leggero, quello di benvenuto. Si beve in piedi mentre si finge di aiutare in cucina</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">Milano-Torino-Bali</span>
            <span className="menu-desc">Base prima e basta — nessuna aggiunta, nessuna diluizione, nessuna via di scampo. Il viaggio finisce dove è cominciato</span>
          </div>
        </div>

        <div className="menu-course">
          <h2>Base Seconda ○ Oleo Saccharum di Arancia e Limone</h2>
          <div className="menu-subitem">
            <span className="menu-dish">
              Scorze di agrumi poste a macerare nello zucchero finché non cedono
              il proprio olio essenziale per sola pressione osmotica. Nessun
              fuoco, nessun alcol, molta pazienza. Sciroppo ottenuto per resa
              spontanea degli agrumi
            </span>
            <span className="menu-desc">
              (oleo saccharum di arancia e limone — zucchero e bucce, si aspetta,
              esce lo sciroppo. Analcolico integrale, base di tutto il reparto
              sobrio)
            </span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">L'estate finisce il 21 giugno</span>
            <span className="menu-desc">Base seconda, soda, scorza d'arancia — il default, il più bevibile. Tecnicamente ha ragione, emotivamente è una crudeltà</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">Un astemio a Londra</span>
            <span className="menu-desc">Base seconda, gin analcolico, tonica — più erbaceo e complesso. Tutta la sofisticazione, nessuna delle conseguenze</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">Dado <s>si sveglia</s> sposa</span>
            <span className="menu-desc">Base seconda, lime, ginger beer, menta — il più speziato. Il titolo è stato corretto in corsa dagli eventi</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">Rosso di sera, a casa sobrio</span>
            <span className="menu-desc">Base seconda, bitter analcolico, limone, tonica, arancia — l'amaro senza alcol. Per chi vuole il carattere ma non il conto da pagare la mattina dopo</span>
          </div>
        </div>

        <div className="menu-course">
          <h2>Fuori Carta — Su Richiesta Formale al Banco</h2>
          <div className="menu-subitem">
            <span className="menu-dish">I Classici della Tradizione Miscelata</span>
            <span className="menu-desc">
              (a richiesta si fanno cocktail classici — basta chiedere.
              La qualità del risultato è direttamente proporzionale
              all'ora della richiesta)
            </span>
          </div>
        </div>
      </section>

      <section className="fullscreen anchor c8 notes">
        <p className="smaller">Note sul Bere</p>
        <p>Ogni drink nasce da una delle due basi: la Prima è alcolica ●, la Seconda è analcolica ○. Nessuno vi giudicherà per la scelta, ma qualcuno prenderà nota.</p>
        <p>Chi porta il ghiaccio ha diritto a un posto migliore a tavola. Quest'anno il ghiaccio vale più di una bottiglia decente.</p>
      </section>

      {/* SEZIONE 9: Recensioni */}
      <section className="fullscreen anchor c9 recensioni">
        <p className="col-ei">Dicono di noi</p>

        <div className="review">
          <p className="review-text">
            "Sono tornato dalle ferie e ho trovato un tagliere di formaggi già montato sul tavolo di casa mia. Non ricordo di aver dato il consenso. Confermo però che il labneh era notevole."
          </p>
          <p className="review-author">— Fofi, padrone di casa e co-organizzatore</p>
          <p className="stars">⭐⭐⭐⭐</p>
        </div>

        <div className="review">
          <p className="review-text">
            "Ho misurato 38 gradi all'ombra e questi hanno deciso di fare comunque otto antipasti. Da un punto di vista strettamente termodinamico è una follia. Da un punto di vista umano, lo rifarei."
          </p>
          <p className="review-author">— Il Condizionatore di Casa Fofi</p>
          <p className="stars">⭐⭐⭐</p>
        </div>

        <div className="review">
          <p className="review-text">
            "L'angolo dell'insalata di riso self-service ha generato quattordici combinazioni diverse, di cui due commestibili. Ho documentato tutto. Nessuno mi ha chiesto niente, ma ho documentato tutto."
          </p>
          <p className="review-author">— L'Umarell Davide, consulente esterno</p>
          <p className="stars">⭐⭐⭐⭐⭐</p>
        </div>

      </section>

      {/* SEZIONE 10: Chiusura */}
      <section className="fullscreen anchor c10 noi noi-ago26">
        <p className="smaller">Ci vediamo al Capanno</p>
        <p>🏖️🥏🏖️</p>
      </section>
    </>
  );
}

export default EdizioneAgosto2026;
