import React from 'react';
import { Outlet } from 'react-router-dom';

function EdizioneNatale2026() {
  return (
    <>
      {/* SEZIONE 1: Header */}
      <header className="App-header fullscreen anchor c1">
        <p className="header-content">
          <span className="col-he">Il Capanno</span><br/>
          <span className="col-hi">Gourmet</span>
        </p>
        <p className="smaller">Home Restaurant Itinerante — Sezione Natalizia in Trasferta</p>
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
          Nessun fornello.
        </p>
        <p>
          🎄🙆‍♂️🙆
        </p>
      </section>

      {/* SEZIONE 3: Chef FOFI */}
      <section className="fullscreen anchor c3">
        <p className="chef-title">Chef <span className="col-hi">Fofi</span></p>
        <p>🌲</p>
        <p className="bio">
          Formatosi a Faenz' e nelle foreste dell'Appennino Tosco-Emiliano,
          per questa edizione è stato ufficialmente retrocesso a personale
          di supporto. Ha accettato con dignità e un leggero tic all'occhio.
        </p>
        <p className="bio">
          Si presenterà al banco sotto lo pseudonimo di Forest, con una
          cocktail list che è "ancora in fase di studio" da tre settimane.
        </p>
      </section>

      {/* SEZIONE 4: Maestro DOME */}
      <section className="fullscreen anchor c4">
        <p className="chef-title">Maestro <span className="col-he">Domesh</span></p>
        <p>🏛️</p>
        <p className="bio">
          Fonico di fama internazionale prestato alla cucina,
          prestato a sua volta alla pasticceria.
        </p>
        <p className="bio">
          Gli è stato affidato solo il dolce. Lui lo chiama
          "ruolo strategico". Tutti gli altri lo chiamano "ruolo".
        </p>
      </section>

      {/* SEZIONE 5: I padroni di casa */}
      <section className="fullscreen anchor c5">
        <p className="chef-title">Chef Ospiti <span className="col-hi">Dado</span> & <span className="col-he">Luci</span></p>
        <img src="./natale2026-chef.webp" alt="I tre chef in cucina" style={{ maxWidth: '100%', borderRadius: '12px', marginTop: '1em' }} />
        <p>🏠</p>
        <p className="bio">
          Freschi di casa nuova, aprono le porte al Capanno, che per
          la prima volta diventa itinerante sul serio.
        </p>
        <p className="bio">
          Dado è noto per lamentarsi a ogni edizione che "si mangia troppo".
          Per la sua prima volta al comando ha proposto nove antipasti.
          Nove. Nessuno ha avuto il coraggio di farglielo notare (fino ad ora).
        </p>
      </section>

      {/* SEZIONE 6: L'invito */}
      <section className="fullscreen anchor c5">
        <p>
          Gli chef (e chi cucina davvero) vi invitano cordialmente
        </p>
        <p>
          all'esclusivo <span className="col-ei">Pranzo di Natale 2026</span>
        </p>
        <p>
          del ristorante Capanno Gourmet
        </p>
        <p className="smaller">
          Sì, a novembre. A dicembre nessuno ha una domenica libera
          e lo sappiamo tutti.
        </p>
      </section>

      {/* SEZIONE 7: Data e ora */}
      <section className="fullscreen anchor c6">
        <p>
          📅 Domenica 29 Novembre, 2026
        </p>
        <p>
          🕧 Ore 12:30 PM
        </p>
        <p>
          📍 Casa nuova di Dado e Luci
        </p>
        <p>
          <span className="smaller">Ai fornelli: Dado e Luci. Supporto morale, logistico e alcolico: Domesh e Fofi</span>
        </p>
        <p>
          <span className="smaller">Panificazione sacra: Hendi (salvo crisi mistiche, sciopero dei lieviti o semplice voglia di non farlo)</span>
        </p>
        <p>
          <span className="smaller">Posto riservato a Merkoh: apparecchiato, come ogni volta. Resterà vuoto, come ogni volta</span>
        </p>
        <p>
          <span className="smaller">Dress code: Maglione natalizio brutto obbligatorio. Elastico in vita più che mai consigliato. Pantofole se i padroni di casa ci tengono al parquet nuovo</span>
        </p>
      </section>

      {/* SEZIONE 8: Conferma presenza */}
      <section className="fullscreen anchor c7">
        <p>
          Conferma la tua presenza
        </p>
        <p>
          (ed eventuali gravidanze, intolleranze, allergie,
          o traumi legati alla zucca — ne servirà parecchia)
        </p>
        <p className="smaller">
          Hendi: la tua conferma vale doppio solo se seguita da "e porto il pane"
        </p>
        <Outlet />
      </section>

      {/* SEZIONE 9: Il Menu */}
      <section className="fullscreen anchor c8">
        <p className="col-ei">Il Menu — Edizione Natalizia MMXXVI</p>
        <img src="./cupboard.gif" alt="Gif dispensa saccheggiata" style={{ maxWidth: '100%', borderRadius: '12px', marginTop: '1em' }} />
        <div>

          {/* ANTIPASTI */}
          <div className="menu-course">
            <h2>Disco Lievitato di Farro Antico e Grano che Grano Non È</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Impasto domestico di farro, cereale caro alle legioni di Roma,
                e grano saraceno, che nonostante il nome non è un grano e non
                è saraceno. Lievitazione affidata alla buona fede e al
                termosifone della casa nuova
              </span>
              <span className="menu-desc">
                (pizza homemade con farina di farro e grano saraceno — integrale,
                rustica, sana. Il primo segnale che Dado vuole farci mangiare
                tantissimo ma senza sensi di colpa)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Brassica Incappucciata con Gemme di Melograno e Gherigli</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Foglie di cavolo dal cappuccio austero, finemente recise e
                ingentilite da chicchi di melograno, frutto di buon auspicio
                anticipato di un mese, e da noci sgusciate a mano da qualcuno
                che ora ha le dita marroni
              </span>
              <span className="menu-desc">
                (insalata di cavolo cappuccio, melograno e noci — la quota
                verde e croccante. Il melograno porta fortuna: servirà per
                arrivare al primo)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Fondamenta Friabili di Cucurbita, Nocciola e Ramerino</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Pasta frolla in versione salata, edificata su un letto di
                zucca autunnale, nocciole tostate e rosmarino. Prima di
                quattro apparizioni della zucca in questo menu. Contate con noi
              </span>
              <span className="menu-desc">
                (frolla salata con zucca, nocciole e rosmarino — zucca n. 1)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Vellutata di Fagiolo Bianco al Cospetto del Sacro Pane di Hendi</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Umile crema di cannellini, resa liscia per insistenza meccanica,
                il cui unico scopo nella vita è fare da tappeto rosso al Pane di
                Hendi™: reliquia lievitata, patrimonio immateriale dell'umanità,
                cotto secondo una ricetta Top Secret custodita in un caveau
                svizzero e tramandata oralmente solo a chi ha superato tre prove
                di fede. Gli storici dividono la civiltà in due ere:
                a.P.H. e d.P.H. (avanti e dopo il Pane di Hendi)
              </span>
              <span className="menu-desc">
                (crema di cannellini con il pane di Hendi — la crema è buona,
                ma diciamocelo: è un pretesto. Senza il pane di Hendi questo
                pranzo non ha senso di esistere, il Natale verrebbe annullato
                e Babbo Natale rimarrebbe a casa a piangere. Hendi, se leggi:
                ti preghiamo. Ti scongiuriamo. Lo sforna anche alle 4 di notte.
                Lo porti anche tiepido. Lo porti anche bruciato. Ma portalo)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Ortaggi Crudi in Immersione Volontaria — Edizione Invernale</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Selezione di verdure recise in bastoncini e destinate al bagno
                emulsivo in olio, sale e aceto. Nessuna cottura è stata inflitta.
                Nessuna verdura è stata consultata. Cambiano gli chef,
                cambia la casa, il pinzimonio resta
              </span>
              <span className="menu-desc">
                (verdure in pinzimonio — presente a ogni edizione, a prescindere
                da chi cucina, dove, e in che stagione. È l'unica vera costante
                del Capanno)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Il Tagliere di Famiglia con Confetture della Casata Antonella</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Carni stagionate e caci di varia indole, accompagnati da
                conserve di frutta prodotte artigianalmente da Antonella,
                fornitrice ufficiale e non retribuita della real casa.
                Vasetti numerati, non restituibili
              </span>
              <span className="menu-desc">
                (affettati e formaggi con le marmellate homemade di Antonella —
                le marmellate sono la parte che finirà per prima. I formaggi
                sono il pretesto)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Piccoli Lievitati Ripieni dal Cuore Arancione</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Brioches di impasto morbido tinto di zucca, farcite con
                ripieno salato. Si presentano innocenti. Sono le più pericolose
                del buffet: una tira l'altra, e la sesta tira il primo
              </span>
              <span className="menu-desc">
                (brioches salate ripiene con impasto alla zucca — zucca n. 2.
                Mangiatene una. Massimo due. Nessuno ne mangerà due)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Spirale del Sottobosco con Latticino Piemontese e Erba Ruchetta</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Sfoglia avvolta su sé stessa a custodire funghi del bosco,
                robiola cremosa e rucola, secondo l'antica tecnica dell'arrotolare
                tutto e sperare che tenga in fase di taglio
              </span>
              <span className="menu-desc">
                (rotolo con funghi, robiola e rucola — bello da vedere, se tagliato
                bene. Se tagliato male, è comunque buono)
              </span>
            </div>
          </div>

          <div className="menu-course">
            <h2>Semola del Maghreb in Rotta per l'Estremo Oriente</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Granelli di cous cous incontrano verdure saltate e salsa di soia,
                in un incrocio culinario non autorizzato da nessuno dei due
                continenti coinvolti. Fusion dichiarata, fusione garantita
              </span>
              <span className="menu-desc">
                (cous cous alle verdure in salsa di soia — nono antipasto.
                NONO. Lo ripetiamo per chi a ogni edizione dice che si mangia
                troppo)
              </span>
            </div>
          </div>

          {/* COCKTAILS */}
          <div className="menu-course menu-category-break">
            <h2>Libagioni del Bancone di Forest</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Miscelazioni custodite sotto segreto di bancone e svelate
                solo all'ultimo istante, come i regali sotto l'albero.
                Si sconsiglia di scuoterle per indovinarne il contenuto
              </span>
              <span className="menu-desc">
                (cocktail di Forest — finalmente svelati: otto drink, carta
                completa più sotto. Mi aspettavo un paio di cose, poi mi sono
                trovato davanti a nove antipasti e ho dovuto studiare di più)
              </span>
            </div>
          </div>

          {/* PRIMO */}
          <div className="menu-course menu-category-break">
            <h2>Veli Ripieni di Cucurbita e Taleggio, in Doppia Professione di Fede</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Sottili crespelle avvolte attorno a zucca e taleggio fuso,
                gratinate con devozione. Disponibili in versione ortodossa
                e in versione eretica con salsiccia, per i commensali che
                non concepiscono un pranzo di Natale senza almeno una vittima
              </span>
              <span className="menu-desc">
                (crespelle con zucca e taleggio, più variante con salsiccia —
                zucca n. 3. Arriva DOPO nove antipasti. Pianificate di conseguenza)
              </span>
            </div>
          </div>

          {/* DOLCE */}
          <div className="menu-course menu-category-break">
            <h2>Opus Dulce del Maestro — Unico Incarico Assegnato</h2>
            <div className="menu-subitem">
              <span className="menu-dish">
                Creazione dolciaria del Maestro Domesh, che avendo ricevuto un
                solo compito intende eseguirlo con la gravità di una sinfonia.
                Contenuto non comunicato. Probabile assenza di aglio in polvere,
                ma non ci giureremmo
              </span>
              <span className="menu-desc">
                (dolce di Dome — non sappiamo cosa sia. Se contiene zucca,
                sarà la n. 4 e avremo chiuso il cerchio)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* SEZIONE 9A: Note sul Menu */}
      <section className="fullscreen anchor c8 notes">
        <p className="smaller">Note sul Menu</p>
        <p>Menu soggetto a variazioni basate sull'umore dei padroni di casa, sullo stato dei traslochi, e sulla capienza reale del forno nuovo.</p>
        <p>Gli chef storici declinano ogni responsabilità sulle porzioni. Per reclami rivolgersi a Dado, che saprà sicuramente cosa rispondere.</p>
        <p>In assenza del Pane di Hendi il pranzo verrà sospeso, gli ospiti rimandati a casa e la casa nuova restituita all'agenzia. Non è una minaccia. È un dato di fatto.</p>
        <p>Una porzione di crespelle verrà tenuta in caldo per Merkoh fino alle 18:00, poi divisa equamente tra i presenti, come da protocollo consolidato.</p>
      </section>

      {/* SEZIONE 9B: Cocktail List */}
      <section className="fullscreen anchor c8 cocktails">
        <p className="col-ei">Cocktail List — Laboratorio Forest</p>
        <p className="smaller">Otto ricette, quattro basi, niente ginger ale</p>

        <div className="menu-course">
          <h2>Ieri</h2>
          <div className="menu-subitem">
            <span className="menu-desc">Sapori passati, mescolati a note nuove che ricordano il tempo che passa</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">07 ●* Un pomeriggio d'autunno in spiaggia a Cervia</span>
            <span className="menu-desc">Gin Tanqueray all'olio EVO, tonica neutra e scorza di limone — secco come la riviera a fine ottobre: ombrelloni chiusi, nebbia, un cane, un signore col metal detector. E Dome e Fofi a inaugurare un furgone. Malinconia, con ghiaccio<br />* Analcolico: gin analcolico e tonica neutra. Un gin tonic classico, senza fat-washing</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">08 ● Never again trimone</span>
            <span className="menu-desc">Negroni EVO con Campari, vermouth rosso infuso all'Earl Grey Çaykur e scorza d'arancia — l'immancabile tradizione, con un twist pugliese. Se Hendi mi procura un goccio di olio di Pesaro, arriva anche la versione marchigiana</span>
          </div>
        </div>

        <div className="menu-course">
          <h2>Domani</h2>
          <div className="menu-subitem">
            <span className="menu-desc">Le sfide che arrivano, senza sapere ancora se saremo all'altezza</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">01 ●* Quello che prenderebbe Merkoh</span>
            <span className="menu-desc">Pera arrostita, gin Tanqueray all'olio EVO, limone, timo e soda — preparato con cura e lasciato sul bancone ad aspettarlo. Sa di attesa<br />* Analcolico: pera arrostita, gin analcolico, limone, soda e timo. Si perdono le note dell'EVO, resta il botanico</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">02 ○ Al contadino Dome non far sapere</span>
            <span className="menu-desc">Pera arrostita, tonica delicata e limone — il proverbio parlava di formaggio e pere. Qui il formaggio non c'è: vedremo se sarà comunque una bella rivelazione</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">03 ○ No, mango oggi</span>
            <span className="menu-desc">Pera arrostita, zenzero fresco, limone e soda — risposta (cringe) ufficiale a "e quindi ora posso rifarti un cocktail alcolico?". Per le amiche in attesa, per chi non beve, e per Dado. Lo zenzero aiuta a digerire. Plot twist: il mango non c'è, almeno non qui</span>
          </div>
        </div>

        <div className="menu-course">
          <h2>Oggi</h2>
          <div className="menu-subitem">
            <span className="menu-desc">Quello che siamo, quello che siamo diventati, e perché</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">04 ○ La scelta di Dado</span>
            <span className="menu-desc">Mango leggermente caramellato, tonica e lime — da sposato, Dado non sceglie più da solo: questo glielo lascio come piccola libertà. Per i reclami sul menu, il referente resta comunque lui</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">05 ○ Un altro posto esotico che Sara e Hendi non vedranno quest'inverno</span>
            <span className="menu-desc">Mango, tè verde ananas-limone-zenzero, lime e soda — il seguito dell'ultima edizione. Ancora niente viaggio zaino in spalla: la saga continua, le ferie no. Con Lendi, l'esotico arriva nel bicchiere</span>
          </div>

          <div className="menu-subitem">
            <span className="menu-dish">06 ●* Mango fizz</span>
            <span className="menu-desc">Mango, gin Tanqueray all'olio EVO, lime e soda — l'unico con un nome normale. La fantasia di Fofi è finita qui<br />* Analcolico: mango, gin analcolico, lime e soda. Forse persino più fresco dell'originale</span>
          </div>
        </div>
      </section>

      <section className="fullscreen anchor c8 notes">
        <p className="smaller">Note sul Bere</p>
        <p>● alcolico, ○ analcolico, * disponibile anche in versione analcolica: basta chiedere. Nessuno vi giudicherà per la scelta, ma Forest prenderà nota.</p>
        <p>Il gin è stato lavato nell'olio extravergine, congelato e filtrato. No, non è unto. Sì, Fofi ci ha pensato per settimane. Sì, di nuovo.</p>
        <p>I tè contengono caffeina: chi si addormenta dopo le crespelle non può dare la colpa ai cocktail. Per eventuali allergeni nelle toniche chiedere al banco.</p>
      </section>

      {/* SEZIONE 10: Recensioni */}
      <section className="fullscreen anchor c9 recensioni">
        <p className="col-ei">Dicono di noi</p>

        <div className="review">
          <p className="review-text">
            "Frequento il Capanno da anni e c'è un signore che a ogni edizione si lamenta che si mangia troppo. Ogni. Singola. Volta. Ora che cucina lui: nove antipasti, un primo con due varianti, il dolce e i cocktail. Non ho altre domande, vostro onore."
          </p>
          <p className="review-author">— naples1992, utente verificato (assolutamente non uno degli chef)</p>
          <p className="stars">⭐⭐</p>
        </div>

        <div className="review">
          <p className="review-text">
            "Mi avevano promesso una casa nuova e tranquilla. Ci sono umani ovunque. Fanno casino, spostano le sedie, uno ha bestemmiato contro il rotolo che non si chiudeva. Mi hanno occupato il divano. Mi vendicherò sul maglione natalizio di qualcuno."
          </p>
          <p className="review-author">— Il Gatto di Casa, residente storico</p>
          <p className="stars">⭐</p>
        </div>

        <div className="review">
          <p className="review-text">
            "Ho assaggiato il Pane di Hendi una volta, nel 2025. Da allora il pane del supermercato mi sembra cartongesso. Ho lasciato il lavoro, venduto la macchina e ora seguo Hendi di pranzo in pranzo sperando che lo sforni. Non lo sforna quasi mai. Ne vale comunque la pena."
          </p>
          <p className="review-author">— Comitato Internazionale per la Tutela del Pane di Hendi (sezione Romagna)</p>
          <p className="stars">🍞🍞🍞🍞🍞</p>
        </div>

        <div className="review">
          <p className="review-text">
            "Non so se sia più innamorato della pagnotta che è suo figlio o della pagnotta di pane!"
          </p>
          <p className="review-author">— Sara Arlati, compagna di Hendi e madre di Lendi</p>
          <p className="stars">💔💔💔💔💔</p>
        </div>

        <div className="review">
          <p className="review-text">
            "Ci sarò sicuro stavolta."
          </p>
          <p className="review-author">— Merkoh, recensione copiata e incollata identica dalle edizioni 2025, Maggio 2026 e Agosto 2026</p>
          <p className="stars">👻</p>
        </div>

        <div className="review">
          <p className="review-text">
            "Ho visto due chef senza un fornello girare per la cucina con aria smarrita, offrendo aiuto non richiesto. Uno ha assaggiato la crema di cannellini sei volte 'per controllo qualità'. Ho documentato tutto."
          </p>
          <p className="review-author">— Umarell, consulente esterno in trasferta</p>
          <p className="stars">⭐⭐⭐⭐⭐</p>
        </div>

      </section>

      {/* SEZIONE 11: Chiusura */}
      <section className="fullscreen anchor c10 noi noi-nat26">
        <p className="smaller">Ci vediamo da Dado e Luci</p>
        <p>🎄🎁🎄</p>
      </section>
    </>
  );
}

export default EdizioneNatale2026;
