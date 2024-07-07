const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "balance",
  password: "2499",
  port: 5432,
});

async function populateTables() {
  await client.connect();

  try {
    const insertClients = `
      INSERT INTO Clients (name, email) VALUES
      ('Ana Popescu', 'ana@example.com'),
      ('Dan Ionescu', 'dan@example.com'),
      ('Ioana Florescu', 'ioana@example.com');
    `;
    await client.query(insertClients);

    const insertServices = `
      INSERT INTO Services (id, title, preview) VALUES
      ('program-1-to-1', 'Program 1:1', 'Acest serviciu este despre a lucra îndeaproape cu mine pentru un program personalizat care să vă ajute să vă atingeți obiectivele într-un timp scurt și eficient.'),
      ('personal-plan', 'Planificare personalizată', 'Planificarea personalizată oferă soluții creative și unice pentru atingerea obiectivelor personale. Acest produs include doar planificarea, fără contact direct cu mine.');
    `;
    await client.query(insertServices);

    const insertClientServices = `
      INSERT INTO ClientServices (client_id, service_id) VALUES
      (1, 'program-1-to-1'),
      (1, 'personal-plan'),
      (2, 'program-1-to-1'),
      (3, 'personal-plan');
    `;
    await client.query(insertClientServices);

    const insertArticles = `
      INSERT INTO Articles (id, img_url, title, content, preview, created_at) VALUES
      (1, 'https://i.imgur.com/tQGek45.jpeg', 'Viitorul ciberneticii', 'Cibernetica reprezintă viitorul tehnologiei moderne, integrând sistemele automate și inteligența artificială într-un mod fără precedent. Pe măsură ce ne îndreptăm spre o lume din ce în ce mai digitalizată, importanța ciberneticii crește exponențial. De la roboți autonomi care îndeplinesc sarcini complexe în fabrici, la algoritmi de învățare automată care analizează cantități uriașe de date, cibernetica ne schimbă viața de zi cu zi. Un aspect esențial al viitorului ciberneticii este dezvoltarea interfețelor om-mașină, care vor permite o colaborare mai eficientă între oameni și tehnologie. În următorii ani, vom vedea progrese semnificative în domenii precum medicina, transporturile și securitatea cibernetică, toate datorită avansurilor în cibernetică.', 
      'Cibernetica reprezintă viitorul tehnologiei moderne, integrând sistemele automate și inteligența artificială într-un mod fără precedent. Pe măsură ce ne îndreptăm spre o lume din ce în ce mai digitalizată, importanța ciberneticii crește exponențial.', '2024-06-06 15:30:00'),
      (2, 'https://i.imgur.com/l4whfbS.jpeg', 'Securitatea în spațiul online', 'În era digitală, securitatea în spațiul online a devenit o prioritate majoră pentru utilizatori și organizații deopotrivă. Cu numărul tot mai mare de amenințări cibernetice, protejarea informațiilor personale și a datelor sensibile este esențială. Măsurile de securitate includ utilizarea parolelor puternice, autentificarea cu doi factori și actualizarea constantă a software-ului pentru a preveni vulnerabilitățile. De asemenea, educarea utilizatorilor cu privire la phishing și alte tipuri de atacuri cibernetice este crucială. Organizațiile trebuie să implementeze politici stricte de securitate și să utilizeze tehnici avansate de criptare pentru a proteja datele clienților. În concluzie, securitatea în spațiul online este o componentă esențială a vieții noastre digitale, necesitând o abordare proactivă și bine informată.', 
      'În era digitală, securitatea în spațiul online a devenit o prioritate majoră pentru utilizatori și organizații deopotrivă. Cu numărul tot mai mare de amenințări cibernetice, protejarea informațiilor personale și a datelor sensibile este esențială.', '2023-12-25 08:45:00'),
      (3, 'https://i.imgur.com/R8epOP2.jpeg', 'Know to''s ale ciberneticii', 'Cibernetica este un domeniu vast și complex, iar înțelegerea principiilor de bază este esențială pentru oricine dorește să se specializeze în acest sector. În primul rând, este important să cunoaștem conceptul de feedback și modul în care acesta este utilizat pentru a optimiza sistemele automate. Al doilea aspect esențial este învățarea automată, care permite mașinilor să învețe din date și să facă predicții. Algoritmii de învățare automată sunt fundamentali pentru dezvoltarea inteligenței artificiale. De asemenea, este crucial să înțelegem securitatea cibernetică și măsurile necesare pentru a proteja sistemele informatice de atacuri. Familiarizarea cu limbaje de programare, cum ar fi Python și C++, este de asemenea recomandată pentru a putea dezvolta și implementa soluții cibernetice eficiente. În final, o abordare continuă de învățare și adaptare este cheia succesului în cibernetică.', 
      'Cibernetica este un domeniu vast și complex, iar înțelegerea principiilor de bază este esențială pentru oricine dorește să se specializeze în acest sector. În primul rând, este important să cunoaștem conceptul de feedback și modul în care acesta este utilizat pentru a optimiza sistemele automate.', '2022-09-14 12:00:00'),
      (4, 'https://i.imgur.com/L6ZCLmH.jpeg', 'Obiceiuri atomice', 'Obiceiurile atomice reprezintă schimbările mici, dar semnificative, pe care le putem face în viața noastră pentru a atinge obiective mari. Conceptul de obiceiuri atomice a fost popularizat de James Clear, care explică cum schimbările minore și repetate pot duce la îmbunătățiri majore în timp. De exemplu, dacă îți propui să citești doar 10 minute pe zi, în câteva luni vei observa o creștere semnificativă a cunoștințelor tale. Cheia succesului constă în consistență și încrederea că fiecare mică acțiune contribuie la obiectivul final. Obiceiurile atomice sunt fundamentale pentru crearea unor rutine pozitive și pentru dezvoltarea personală pe termen lung.', 
      'Obiceiurile atomice reprezintă schimbările mici, dar semnificative, pe care le putem face în viața noastră pentru a atinge obiective mari. Conceptul de obiceiuri atomice a fost popularizat de James Clear, care explică cum schimbările minore și repetate pot duce la îmbunătățiri majore în timp.', '2025-03-10 18:20:00'), 
      (5, 'https://i.imgur.com/06qgfzL.jpeg', 'Alinierea obiectivelor', 'Alinierea obiectivelor este un proces esențial pentru atingerea succesului în orice domeniu. Aceasta implică armonizarea obiectivelor personale și profesionale pentru a crea un echilibru care să permită progresul în ambele arii. Un prim pas în alinierea obiectivelor este clarificarea valorilor și priorităților personale. De asemenea, este important să stabilim obiective SMART (Specifice, Măsurabile, Accesibile, Relevante și Timp limitate) pentru a avea o direcție clară și pentru a putea măsura progresul. Comunicarea și colaborarea cu cei din jur, fie că este vorba de colegi de muncă sau de membrii familiei, sunt cruciale pentru a asigura susținerea necesară în atingerea obiectivelor. În final, alinierea obiectivelor contribuie la creșterea satisfacției și a împlinirii personale și profesionale.', 
      'Alinierea obiectivelor este un proces esențial pentru atingerea succesului în orice domeniu. Aceasta implică armonizarea obiectivelor personale și profesionale pentru a crea un echilibru care să permită progresul în ambele arii.', '2023-04-01 09:00:00'),
      (6, 'https://i.imgur.com/lR9Gf06.jpeg', 'Puterea valorilor înalte', 'Valorile înalte reprezintă principiile fundamentale care ghidează comportamentul și deciziile noastre. Ele sunt esențiale pentru a construi o viață plină de integritate și sens. De exemplu, valori precum onestitatea, responsabilitatea și compasiunea sunt fundamentale pentru relații interpersonale sănătoase și pentru o societate armonioasă. În contextul profesional, valorile înalte conduc la un mediu de lucru etic și la luarea deciziilor care sunt în beneficiul comun. Cultivarea și menținerea valorilor înalte necesită auto-reflecție și angajament constant. Puterea valorilor înalte se reflectă în capacitatea de a inspira și motiva pe alții, contribuind la crearea unui impact pozitiv durabil în comunitatea noastră și în lume.', 
      'Valorile înalte reprezintă principiile fundamentale care ghidează comportamentul și deciziile noastre. Ele sunt esențiale pentru a construi o viață plină de integritate și sens. De exemplu, valori precum onestitatea, responsabilitatea și compasiunea sunt fundamentale pentru relații interpersonale sănătoase și pentru o societate armonioasă.', '2024-10-20 20:15:00'),
      (7, 'https://i.imgur.com/KE5tTSR.jpeg', 'Creativitatea în educație: Cum să stimulăm gândirea creativă', 'Într-un mic oraș scăldat de soarele cald al tropicelor, unde timpul părea că se scurge mai încet, iar vânturile șopteau povești vechi printre frunzele palmierilor, trăia o comunitate care prețuia creativitatea ca pe un dar divin. În inima acestei așezări, doamna Elena, o învățătoare cu ochii blânzi și părul alb ca spuma mării, își propusese să dezvăluie magia gândirii creative în rândul copiilor.

În fiecare dimineață, școala din sat se umplea de râsete și de energie tânără. Pereții claselor erau pictați în culori vii, iar ferestrele lăsau să intre lumina filtrată de coroanele copacilor. Aici, educația nu era doar o datorie, ci o aventură în necunoscut, o călătorie pe aripile imaginației.

Doamna Elena credea cu tărie că fiecare copil are în el un poet, un artist sau un inventator. Pentru a stimula această creativitate latentă, ea folosea metode care păreau desprinse din poveștile bunicilor.

Într-o zi, în mijlocul verii, când aerul era îmbibat de parfumul florilor exotice, doamna Elena a adus în clasă o valiză veche, acoperită de praf. Copiii, cu ochii mari și curioși, s-au adunat în jurul ei. Cu un zâmbet misterios, doamna Elena a deschis valiza, dezvăluind o colecție de obiecte neobișnuite: o pană de păun, o cheie ruginită, un glob de cristal și o carte cu paginile îngălbenite.

"Astăzi, dragii mei, vom crea povești," a spus ea. "Fiecare dintre voi va alege un obiect din această valiză și va imagina o poveste despre el."

Copiii au fost încântați. Au luat fiecare câte un obiect și s-au așezat pe covorul din mijlocul clasei. În curând, aerul a fost umplut de cuvinte și imaginație. Un băiat cu părul negru și ochii strălucitori a început să povestească despre cum cheia ruginită deschidea o poartă spre un tărâm magic, unde trăiau dragoni și zâne. O fetiță cu părul roșu ca focul a vorbit despre cum pana de păun putea scrie poezii care aduceau ploaia într-un ținut arid.

Doamna Elena știa că astfel de exerciții nu doar că îi ajutau pe copii să-și dezvolte abilitățile literare, dar le și deschideau mințile către posibilități infinite. Ea credea că imaginația este o forță puternică care poate schimba lumea și că fiecare copil, indiferent de circumstanțele sale, are potențialul de a contribui la această schimbare.

Pe măsură ce zilele treceau, copiii învățau să vadă lumea cu alți ochi. Fiecare frunză, fiecare piatră și fiecare rază de soare deveneau surse de inspirație. Doamna Elena îi încuraja să exploreze, să pună întrebări și să nu se teamă de greșeli.

Într-o altă zi, ea i-a dus într-o pădure din apropiere. "Ascultați vocile naturii," le-a spus ea. "Fiecare sunet are o poveste de spus." Copiii și-au închis ochii și au ascultat. Un băiat a auzit șoaptele vântului și a imaginat un vechi zeu al pădurii care povestea despre vremuri de demult. O fetiță a ascultat cântecul unei păsări și a visat la o lume în care oamenii și animalele vorbeau aceeași limbă.

Prin aceste experiențe, doamna Elena le arăta că creativitatea nu este doar despre artă sau literatură, ci despre modul în care alegem să vedem și să interacționăm cu lumea din jurul nostru. Ea credea că educația adevărată nu înseamnă doar să înveți fapte și cifre, ci să înveți să visezi și să creezi.

Astfel, în micuțul oraș tropical, unde timpul părea să curgă mai încet, doamna Elena planta semințele creativității în inimile copiilor. Și cine știe, poate într-o zi, acești copii vor crește și vor schimba lumea cu imaginația și creativitatea lor, transformând poveștile în realitate, la fel cum făcuse odinioară învățătoarea lor cu suflet mare.', 'Într-un mic oraș scăldat de soarele cald al tropicelor, unde timpul părea că se scurge mai încet, iar vânturile șopteau povești vechi printre frunzele palmierilor, trăia o comunitate care prețuia creativitatea ca pe un dar divin. În inima acestei așezări, doamna Elena, o învățătoare cu ochii blânzi și părul alb ca spuma mării, își propusese să dezvăluie magia gândirii creative în rândul copiilor.

', NOW()),
      (8, 'https://i.imgur.com/dseKz5p.jpeg', 'Cum să îți dezvolți creativitatea prin tehnici simple și eficiente', 'Într-o dimineață de vară, când soarele abia răsărea deasupra orașului, îmbăindu-l într-o lumină aurie, Takeshi se trezi brusc dintr-un vis neobișnuit. În acel vis, se plimba pe străzi înguste și întortocheate, cu clădiri vechi, acoperite de mușchi, unde fiecare colț ascundea o poveste neștiută. Acest vis părea să aibă o semnificație profundă, de parcă orașul însuși ar fi fost un labirint al minții sale, un spațiu unde creativitatea își avea rădăcinile.

Takeshi știa că trebuie să găsească o modalitate de a-și cultiva această creativitate. Își pregăti o ceașcă de ceai verde și se așeză la masa sa de lemn, unde cărțile stăteau aliniate ca niște soldați tăcuți. Fiecare pagină din aceste cărți părea să păstreze ecoul gândurilor celor care le-au scris.

Prima tehnică pe care o adoptă Takeshi fu simplă, dar profundă: meditația. În fiecare dimineață, își petrecea câteva minute în liniște absolută, concentrându-se pe respirația sa. Își imagina că fiecare inspirație aducea un val de idei proaspete, iar fiecare expirație elibera tensiunile și blocajele mentale. Această practică îi permitea să-și limpezească mintea, creând un spațiu fertil pentru gânduri noi și originale.

Într-o seară ploioasă, când picăturile de apă dansau pe geamuri și orașul se cufunda într-o liniște misterioasă, Takeshi descoperi o altă tehnică valoroasă: jurnalul creativ. Fiecare pagină din jurnalul său devenea un teren de joacă pentru idei. Scria fără să se gândească prea mult, lăsând cuvintele să curgă liber, ca un râu care își croiește drum printre pietre. Uneori, aceste scrieri erau doar fragmente de vise, alteori erau descrieri ale oamenilor pe care îi întâlnise pe stradă sau reflecții asupra lucrurilor mărunte care îi atrăgeau atenția.

Într-una dintre acele zile obișnuite, când plimbările lungi prin cartierul său îi ofereau o sursă nesfârșită de inspirație, Takeshi descoperi puterea observației. Mergea pe străzile aglomerate, privind detaliile fiecărui magazin, fiecare chip, fiecare sunet. O cafea aburindă într-o vitrină, o pisică ce se odihnea pe un pervaz, un om care cânta la vioară pe trotuar - toate aceste imagini se amestecau în mintea sa, formând un colaj viu al vieții cotidiene. Takeshi învăța să vadă frumusețea în detalii și să găsească povestiri în cele mai neașteptate locuri.

Într-o după-amiază târzie, când cerul era colorat în nuanțe de roz și portocaliu, Takeshi își aminti de puterea ritualurilor. Începuse să-și creeze propriile ritualuri de creativitate: aprindea o lumânare parfumată înainte de a scrie, asculta muzică clasică în timp ce desena, sau își savura cafeaua în grădina sa, înconjurat de flori. Aceste ritualuri simple, dar semnificative, îi ofereau un cadru sacru în care creativitatea putea înflori.

În cele din urmă, Takeshi descoperi că una dintre cele mai eficiente tehnici era colaborarea. Într-o seară de toamnă, când frunzele cădeau ușor pe trotuar și aerul era răcoros, se întâlni cu prieteni și artiști locali într-o cafenea micuță. Împărtășeau povești, idei și vise, fiecare contribuind cu propria lor perspectivă unică. Aceste întâlniri erau ca un foc de tabără, unde fiecare scânteie putea aprinde o flacără nouă în mintea sa.

Takeshi își dădu seama că creativitatea nu era un dar misterios, rezervat doar câtorva aleși, ci o abilitate care putea fi cultivată prin tehnici simple și eficiente. Meditația, jurnalul creativ, observația, ritualurile și colaborarea erau cheile care deschideau porțile imaginației sale. Și astfel, în fiecare zi, descoperea noi moduri de a-și hrăni sufletul creativ, transformând visele în realitate, la fel cum valurile oceanului modelează țărmul cu răbdare și delicatețe.', 'Într-o dimineață de vară, când soarele abia răsărea deasupra orașului, îmbăindu-l într-o lumină aurie, Takeshi se trezi brusc dintr-un vis neobișnuit. În acel vis, se plimba pe străzi înguste și întortocheate, cu clădiri vechi, acoperite de mușchi, unde fiecare colț ascundea o poveste neștiută. Acest vis părea să aibă o semnificație profundă, de parcă orașul însuși ar fi fost un labirint al minții sale, un spațiu unde creativitatea își avea rădăcinile.

', NOW()),
      (9, 'https://i.imgur.com/eTRfy8d.jpeg', 'Rolul artei în cultivarea creativității personale', 'Arta nu este doar o reflectare a realității, ci și un mijloc de a transcende limitele cotidianului și de a explora adâncimile ființei umane. În experiența mea, arta reprezintă un vehicul de autodescoperire și transformare, un spațiu sacru unde barierele dispar și esența noastră se dezvăluie.

Arta performativă, în special, are puterea de a penetra straturile superficiale ale existenței și de a revela adevăruri universale. În fiecare act artistic, îmi propun să creez un spațiu de conștientizare totală, atât pentru mine cât și pentru spectator. Este un proces intens, dureros uneori, dar indispensabil pentru cultivarea creativității personale.

Primul pas în această călătorie este acceptarea vulnerabilității. Arta adevărată nu poate exista fără o deschidere totală a sufletului. În fața unei pânze albe sau a unei scene goale, ne confruntăm cu propriile noastre frici, nesiguranțe și dorințe. Aici, în acest spațiu gol, se naște creativitatea. Este nevoie de curaj pentru a fi vulnerabil și de a permite ca acele emoții să se manifeste liber.

Un alt aspect esențial este disciplina. Arta nu este doar un impuls spontan, ci și un exercițiu riguros de auto-disciplina. În fiecare zi, îmi dedic ore întregi practicii mele, perfecționându-mi tehnica și explorând noi modalități de expresie. Această disciplină nu este o constrângere, ci o formă de eliberare, permițând creativității să curgă fără piedici.

Meditația și contemplarea sunt, de asemenea, instrumente valoroase în cultivarea creativității. Prin practici precum meditația, ne putem conecta la un nivel mai profund al conștiinței, unde ideile și inspirațiile pot apărea în mod natural. În liniștea meditației, găsim sursa creativității noastre, un izvor nesecat de imaginație și intuiție.

Arta, pentru mine, este și un act de rezistență. Trăim într-o lume dominată de pragmatism și materialism, unde creativitatea este adesea marginalizată. Să fii artist înseamnă să te opui acestei tendințe, să îți revendici dreptul de a crea și de a exprima. Este un act de rebeliune împotriva conformismului și o afirmare a individualității noastre.

Interacțiunea cu publicul joacă un rol crucial în acest proces. În timpul performance-urilor mele, creez un dialog tăcut între mine și spectator, o conexiune profundă care transcende cuvintele. Publicul devine parte a actului artistic, iar această interacțiune deschide noi orizonturi de înțelegere și inspirație. Este un schimb de energii care amplifică creativitatea și îmbogățește experiența artistică.

În cele din urmă, arta este o formă de vindecare. Prin actul creației, ne confruntăm cu propriile noastre traume și dureri, le aducem la suprafață și le transformăm. Arta are puterea de a vindeca rănile sufletului, de a ne reconecta cu esența noastră și de a ne oferi o nouă perspectivă asupra vieții.', 'Arta nu este doar o reflectare a realității, ci și un mijloc de a transcende limitele cotidianului și de a explora adâncimile ființei umane. În experiența mea, arta reprezintă un vehicul de autodescoperire și transformare, un spațiu sacru unde barierele dispar și esența noastră se dezvăluie.

Arta performativă, în special, are puterea de a penetra straturile superficiale ale existenței și de a revela adevăruri universale.', NOW()),
      (10, 'https://i.imgur.com/7wl3sDh.jpeg', 'Cum să-ți îmbunătățești concentrarea: Strategii și sfaturi practice', 'Concentrarea este acea forță invizibilă care ne permite să navigăm prin labirintul complex al existenței noastre. Într-o lume dominată de haos și incertitudine, a ne păstra atenția asupra esențialului devine un act de rezistență, o formă de supraviețuire spirituală. Într-o noapte tăcută, în camera mea mică și rece, unde umbrele se contopeau cu gândurile mele întunecate, am început să descopăr strategiile care mi-au permis să îmi îmbunătățesc concentrarea și să găsesc o oază de liniște în mijlocul tumultului vieții.

Primul pas spre concentrare este auto-reflecția. În tăcerea nopții, când lumea pare să adoarmă, îmi permit să explorez adâncurile sufletului meu. Mă întreb: Ce anume mă distrage? Care sunt acele gânduri și preocupări care îmi devorează atenția? Prin introspecție sinceră, încep să înțeleg sursele neliniștii mele și să le confrunt cu o hotărâre fermă.

Apoi, vine disciplina. Viața noastră este plină de tentații și distrageri, dar prin voință și autodisciplină putem să ne eliberăm de tirania lor. În fiecare zi, îmi stabilesc un program riguros, dedicând timp pentru studiu și meditație. Izolarea de zgomotul lumii exterioare, fie și pentru câteva ore, devine un ritual sacru, o modalitate de a îmi restabili echilibrul interior.

Un alt aspect esențial este simplitatea. Într-o societate obsedată de complexitate, am învățat să apreciez simplitatea. În camera mea modestă, cu mobilier auster și lumina palidă a lămpii, găsesc liniște. Eliminați excesele și păstrați doar ceea ce este esențial pentru a vă concentra. Cărțile, notițele și gândurile mele sunt organizate cu meticulozitate, astfel încât mintea mea să nu fie tulburată de dezordine.

În cele din urmă, trebuie să recunoaștem importanța odihnei. Mintea noastră nu poate funcționa la capacitate maximă fără a se odihni. În acele momente de singurătate, în patul meu rece și mic, îmi permit să mă eliberez de povara gândurilor și să mă cufund în somn. Odihna adecvată este fundamentul pe care se construiește o concentrare puternică și susținută.

Prin auto-reflecție, disciplină, simplitate și odihnă, putem să ne îmbunătățim concentrarea și să navigăm cu fermitate prin complexitatea vieții noastre. În acest proces, descoperim nu doar claritatea mentală, ci și o profundă înțelegere a propriei noastre existențe.', 'Concentrarea este acea forță invizibilă care ne permite să navigăm prin labirintul complex al existenței noastre. Într-o lume dominată de haos și incertitudine, a ne păstra atenția asupra esențialului devine un act de rezistență, o formă de supraviețuire spirituală. Într-o noapte tăcută, în camera mea mică și rece, unde umbrele se contopeau cu gândurile mele întunecate, am început să descopăr strategiile care mi-au permis să îmi îmbunătățesc concentrarea și să găsesc o oază de liniște în mijlocul tumultului vieții.', NOW()),
      (11, 'https://i.imgur.com/snecf16.jpeg', 'Tehnici de mindfulness pentru creșterea capacității de concentrare', 'În colțurile întunecate ale sufletului nostru, adesea ne pierdem în vârtejul gândurilor haotice și neliniștitoare. Mindfulness, această practică aparent simplă, ne oferă o modalitate de a ne reconecta cu noi înșine și de a găsi o ancoră în marea tumultoasă a minții noastre. În liniștea camerei mele, unde ecourile existenței se amestecă cu murmurul vântului de afară, am descoperit puterea mindfulness-ului pentru a crește capacitatea de concentrare.

Mindfulness începe cu observarea tăcută a respirației. În fiecare dimineață, înainte ca primele raze ale soarelui să atingă pământul, mă așez într-un colț liniștit și îmi concentrez atenția asupra respirației. Inspir adânc și expir lent, simțind cum aerul îmi umple plămânii și apoi se eliberează, purtând cu el tensiunile și fricile. Această simplă practică îmi permite să mă ancorez în prezent și să îmi clarific mintea.

O altă tehnică esențială este conștientizarea corporală. În fiecare zi, îmi dedic câteva minute pentru a face un tur mental al corpului meu, începând de la vârful degetelor de la picioare și urcând până la creștetul capului. Observ senzațiile, tensiunile și disconforturile, fără a le judeca sau a încerca să le schimb. Prin această conștientizare, învăț să îmi accept corpul așa cum este și să îmi găsesc echilibrul interior.

Meditarea asupra unui obiect este, de asemenea, o practică puternică. Aleg un obiect simplu, cum ar fi o floare sau o lumânare, și îmi concentrez întreaga atenție asupra lui. Observ detaliile, culorile, formele și mirosul, lăsându-mi mintea să se cufunde complet în experiența prezentului. Această practică îmi antrenează mintea să rămână focalizată și să nu se piardă în gânduri inutile.

În cele din urmă, integrarea mindfulness-ului în activitățile zilnice este crucială. Fie că este vorba de mersul pe stradă, de mâncat sau de spălat vasele, încerc să fiu complet prezent în fiecare moment. Simt pașii sub picioarele mele, gust mâncarea cu atenție și ascult sunetul apei curgând. Această prezență constantă îmi întărește capacitatea de concentrare și îmi permite să trăiesc mai intens fiecare clipă.

Mindfulness-ul nu este doar o tehnică de concentrare, ci o modalitate de a trăi. Prin respirație conștientă, conștientizare corporală, meditare asupra unui obiect și integrarea mindfulness-ului în viața de zi cu zi, putem să ne dezvoltăm o concentrare profundă și o conexiune autentică cu noi înșine și cu lumea din jurul nostru.', 'În colțurile întunecate ale sufletului nostru, adesea ne pierdem în vârtejul gândurilor haotice și neliniștitoare. Mindfulness, această practică aparent simplă, ne oferă o modalitate de a ne reconecta cu noi înșine și de a găsi o ancoră în marea tumultoasă a minții noastre. În liniștea camerei mele, unde ecourile existenței se amestecă cu murmurul vântului de afară, am descoperit puterea mindfulness-ului pentru a crește capacitatea de concentrare.', NOW()),
      (12, 'https://i.imgur.com/Lxyzac6.jpeg', 'Productivitate maximă: Cum să rămâi focusat într-o lume plină de distrageri', 'În vastitatea labirintului modernității, unde fiecare colț ascunde o nouă distragere, să rămâi concentrat devine o provocare titanică. Productivitatea nu este doar o măsură a ceea ce realizăm, ci și a felului în care navigăm printr-un ocean de zgomot și distrageri. În această lume haotică, mi-am propus să descopăr modalități de a-mi păstra focalizarea și de a atinge productivitatea maximă.

Primul pas în această călătorie este identificarea și eliminarea surselor de distragere. În camera mea modestă, izolat de tumultul orașului, am început să simplific mediul înconjurător. Am înlăturat obiectele inutile, am redus numărul de dispozitive electronice și am creat un spațiu de lucru auster, unde mintea mea putea să se concentreze fără interferențe. În această austeritate, am găsit o claritate neașteptată.

Apoi, vine importanța organizării timpului. Fiecare zi începe cu o planificare meticuloasă. Îmi stabilesc obiective clare și îmi împart timpul în intervale dedicate fiecărei sarcini. Această structură rigidă nu este o închisoare, ci o eliberare, permițându-mi să mă concentrez pe ceea ce este important fără să mă pierd în trivialități. Programul meu devine un refugiu de ordine în haosul lumii exterioare.

Practica pauzelor regulate este, de asemenea, esențială. În mijlocul efortului intens, îmi permit scurte momente de respiro. Mă ridic de la birou, mă plimb prin cameră sau privesc pe fereastră, lăsându-mi mintea să se relaxeze. Aceste pauze îmi reîmprospătează energia și îmi permit să revin la muncă cu o concentrare reînnoită.

Un alt element crucial este echilibrul între muncă și odihnă. Noaptea, în liniștea patului meu, îmi permit să mă deconectez complet de la sarcinile zilnice. Somnul devine o sursă de regenerare, iar visele mele sunt o fereastră spre inconștient. În aceste ore de odihnă, mintea mea se recuperează, pregătindu-se pentru provocările zilei următoare.

În cele din urmă, motivația profundă este ceea ce ne menține focalizați în fața distragerilor. În fiecare act de creație, mă conectez cu rațiunea mea de a fi, cu dorințele și aspirațiile mele cele mai profunde. Această conexiune îmi oferă puterea de a persevera, de a rămâne concentrat și de a atinge productivitatea maximă.

Într-o lume plină de distrageri, să rămâi concentrat este o luptă constantă, dar prin simplificare, organizarea timpului, pauze regulate, echilibru între muncă și odihnă și motivație profundă, putem să navigăm prin acest haos și să realizăm lucruri mărețe. Productivitatea nu este doar despre ceea ce facem, ci despre cum trăim și cum ne raportăm la lumea din jurul nostru.', 'În vastitatea labirintului modernității, unde fiecare colț ascunde o nouă distragere, să rămâi concentrat devine o provocare titanică. Productivitatea nu este doar o măsură a ceea ce realizăm, ci și a felului în care navigăm printr-un ocean de zgomot și distrageri. În această lume haotică, mi-am propus să descopăr modalități de a-mi păstra focalizarea și de a atinge productivitatea maximă.

Primul pas în această călătorie este identificarea și eliminarea surselor de distragere. În camera mea modestă, izolat de tumultul orașului, am început să simplific mediul înconjurător. ', NOW()),
      (13, 'https://i.imgur.com/5yILEbW.jpeg', 'Obiceiuri sănătoase pentru un stil de viață echilibrat', 'Într-o dimineață răcoroasă, undeva în inima unui oraș nostalgic cu străzi pavate și clădiri pastelate, trăia o doamnă excentrică pe nume Margareta. Viața ei era un echilibru delicat de ritualuri și obiceiuri care, asemenea unei simfonii meticulos compuse, contribuiau la starea ei de bine. Acesta este povestea ei și a modului în care a cultivat obiceiuri sănătoase pentru a menține un stil de viață echilibrat.

Margareta începea fiecare zi cu un mic dejun copios. În bucătăria ei, luminată de razele soarelui ce se strecurau printre draperiile galbene, ea pregătea o omletă cu legume proaspete și pâine de casă. Pe masă, alături de o cană de ceai aburind, se afla mereu o floare proaspătă într-un vas de porțelan, simbol al frumuseții simple ce înconjoară rutina zilnică. Aceasta era prima ei regulă: alimentație echilibrată și plină de culoare.

După micul dejun, Margareta se îmbrăca în rochia ei preferată și ieșea la plimbare prin parcul local. În timp ce pașii ei o purtau pe alei acoperite de frunze căzute, ea respira adânc și se bucura de aerul curat. Mișcarea zilnică era a doua ei regulă: un exercițiu moderat, dar constant, pentru a menține trupul și spiritul în armonie.

La prânz, Margareta se întâlnea cu prietenii ei la o mică cafenea cu mese din lemn și scaune confortabile. Discuțiile lor, pline de râsete și amintiri, erau condimentate cu povești din cărți vechi și visuri noi. Conexiunile sociale erau a treia regulă a Margaretei: timpul petrecut cu oameni dragi, care îi hrăneau sufletul.

După-amiaza, în atelierul ei plin de pânze albe și tuburi de vopsea, Margareta își petrecea ore întregi pictând. Fiecare tușă era un act de meditație, o explorare a creativității și a emoțiilor sale interioare. Aceasta era a patra ei regulă: dedicarea timpului pentru pasiunile personale, o modalitate de a-și exprima sinele și de a-și găsi echilibrul interior.

Seara, în lumina caldă a lampii, Margareta își scria gândurile într-un jurnal legat în piele. Reflectând asupra zilei ce tocmai se încheiase, ea înțelegea importanța recunoștinței și a auto-reflecției. Acesta era ultimul ei obicei sănătos: un moment de introspecție și recunoștință, un ritual de încheiere a zilei care îi oferea pacea necesară pentru a adormi liniștită.

În acest mod, printr-o serie de obiceiuri atent cultivate, Margareta trăia un stil de viață echilibrat, unde fiecare moment era prețuit și fiecare zi era o nouă oportunitate de a savura frumusețea vieții.', 'Într-o dimineață răcoroasă, undeva în inima unui oraș nostalgic cu străzi pavate și clădiri pastelate, trăia o doamnă excentrică pe nume Margareta. Viața ei era un echilibru delicat de ritualuri și obiceiuri care, asemenea unei simfonii meticulos compuse, contribuiau la starea ei de bine. Acesta este povestea ei și a modului în care a cultivat obiceiuri sănătoase pentru a menține un stil de viață echilibrat.

Margareta începea fiecare zi cu un mic dejun copios. În bucătăria ei, luminată de razele soarelui ce se strecurau printre draperiile galbene, ea pregătea o omletă cu legume proaspete și pâine de casă. ', NOW()),
      (14, 'https://i.imgur.com/gEtLeoX.jpeg', 'Formarea și menținerea obiceiurilor pozitive: Metode și provocări', 'Într-o casă veche, cu tapet floral și mobilier vintage, locuia un tânăr pe nume Felix. Camera sa era un sanctuar de ordine și echilibru, unde fiecare obiect avea locul său bine definit. Felix știa că formarea și menținerea obiceiurilor pozitive era cheia unui trai armonios, dar drumul către această realizare era presărat cu provocări și metode ingenioase.

Felix începu prin a crea o listă detaliată a obiceiurilor pe care dorea să le adopte. Cu stiloul său de epocă, așternu pe hârtie fiecare activitate, de la cititul zilnic până la meditația de dimineață. Fiecare obicei era împărțit în pași mici și concreți, astfel încât să fie ușor de integrat în rutina zilnică. Prima metodă a lui Felix era fragmentarea: descompunerea obiectivelor mari în acțiuni simple și realizabile.

Apoi, Felix își amenajă camera astfel încât să favorizeze noile obiceiuri. Cărțile preferate erau așezate pe noptieră, covorașul de yoga era întins în colțul camerei, iar pe perete, agățase un tablou motivațional cu mesajul "Fiecare zi este o nouă oportunitate." Aceasta era a doua metodă: crearea unui mediu care să încurajeze obiceiurile dorite.

În fiecare seară, Felix își nota progresul într-un jurnal elegant. Fiecare realizare, oricât de mică, era sărbătorită cu un mic desen sau o notă de mulțumire. Jurnalul devenea astfel un aliat de nădejde în menținerea motivației. A treia metodă a lui Felix era monitorizarea: urmărirea constantă a progresului și recompensarea realizărilor.

Dar, desigur, drumul nu era lipsit de provocări. Uneori, tentațiile zilnice, precum serialele interminabile sau rețelele sociale, îl distrăgeau de la scopurile sale. Felix învăță că pentru a învinge aceste provocări, era necesar să practice auto-compasiunea. În loc să se critice aspru pentru eșecuri, el își oferea timp să reflecteze și să își ajusteze strategia. Aceasta era a patra metodă: acceptarea imperfecțiunii și ajustarea continuă.

Pentru a-și consolida obiceiurile pozitive, Felix începu să își împărtășească progresul cu prietenii săi apropiați. Fiecare întâlnire devenea o ocazie de a discuta despre realizările și provocările fiecăruia, creând astfel un sistem de suport mutual. Aceasta era ultima metodă: crearea unei rețele de susținere și responsabilitate.

Prin fragmentare, ajustarea mediului, monitorizare, auto-compasiune și suport social, Felix reuși să formeze și să mențină obiceiuri pozitive, transformând astfel fiecare zi într-o capodoperă de echilibru și împlinire.', 'Într-o casă veche, cu tapet floral și mobilier vintage, locuia un tânăr pe nume Felix. Camera sa era un sanctuar de ordine și echilibru, unde fiecare obiect avea locul său bine definit. Felix știa că formarea și menținerea obiceiurilor pozitive era cheia unui trai armonios, dar drumul către această realizare era presărat cu provocări și metode ingenioase.

Felix începu prin a crea o listă detaliată a obiceiurilor pe care dorea să le adopte. Cu stiloul său de epocă, așternu pe hârtie fiecare activitate, de la cititul zilnic până la meditația de dimineață. Fiecare obicei era împărțit în pași mici și concreți, astfel încât să fie ușor de integrat în rutina zilnică. Prima metodă a lui Felix era fragmentarea: descompunerea obiectivelor mari în acțiuni simple și realizabile', NOW()),
      (15, 'https://i.imgur.com/HO3BopS.jpeg', 'Puterea obiceiurilor: Cum să transformi acțiunile zilnice în succes', 'Într-un mic orășel de coastă, unde fiecare casă avea obloane albastre și grădini cu flori sălbatice, trăia o tânără pe nume Clara. Viața ei era o succesiune de momente delicate și ritualuri precise, care, asemenea unui mecanism de ceasornic, o ghidau către succesul personal și profesional. Clara știa că puterea obiceiurilor era secretul transformării acțiunilor zilnice în realizări remarcabile.

În fiecare dimineață, Clara își începea ziua cu o rutină riguroasă. În camera ei luminată de soarele dimineții, unde perdelele albe fluturau în adierea brizei, ea își dedica primele minute ale zilei unui exercițiu de recunoștință. Cu un carnet frumos legat, Clara nota trei lucruri pentru care era recunoscătoare. Această practică îi umplea sufletul de pozitivitate și îi oferea o perspectivă optimistă. Primul său obicei era recunoștința: o fundație solidă pentru succesul zilnic.

După acest ritual, Clara trecea la organizarea zilei. Pe un birou ordonat, alături de o cană de ceai de iasomie, ea își scria lista de sarcini. Fiecare punct era clar definit și prioritizat, asigurându-se că cele mai importante activități erau realizate primele. Planificarea atentă era al doilea obicei al Clarei: un ghid constant pentru a-și atinge obiectivele.

În timpul zilei, Clara își dedica momente de pauză pentru a se reconecta cu sine. În grădina casei, printre trandafiri și lavandă, își petrecea câteva minute meditând sau citind o pagină dintr-o carte preferată. Aceste pauze nu erau doar o formă de relaxare, ci și o modalitate de a-și reîncărca energia și de a menține claritatea mentală. Pauzele regulate erau al treilea obicei: un echilibru necesar între muncă și odihnă.', 'Într-un mic orășel de coastă, unde fiecare casă avea obloane albastre și grădini cu flori sălbatice, trăia o tânără pe nume Clara. Viața ei era o succesiune de momente delicate și ritualuri precise, care, asemenea unui mecanism de ceasornic, o ghidau către succesul personal și profesional. Clara știa că puterea obiceiurilor era secretul transformării acțiunilor zilnice în realizări remarcabile.

În fiecare dimineață, Clara își începea ziua cu o rutină riguroasă. ', NOW()),
            (16, 'https://i.imgur.com/cJ4IRBK.jpeg', 'Perseverența: Cheia succesului în fața obstacolelor', 'În tăcerea unei nopți de vară, sub cerul înstelat, povestea lui Andrei începe să prindă viață. El era un tânăr visător dintr-un sat liniștit, învăluit de povești și de miresme de fân cosit. Pentru Andrei, perseverența nu era doar o virtute, ci o comoară pe care o căuta cu ardoare în mijlocul provocărilor vieții.

Andrei își amintea cu drag de zilele copilăriei, când își petrecea zorile adunate la marginea râului, visând la un viitor plin de realizări. Primul pas în căutarea perseverenței a fost determinarea sa de a-și urma pasiunea pentru agricultură, chiar și atunci când pământul arid amenința să stingă speranțele multor fermieri din sat. Astfel, el a învățat că primul său obstacol era de a-și convinge familia să-și accepte decizia.

Cu fiecare răsărit de soare, Andrei se trezea devreme și muncea neobosit pe câmpurile sale, luptând cu seceta și cu vremea neprielnică. Nu se lăsa doborât de eșecuri, ci găsea mereu o cale de a înfrunta provocările cu o inimă curajoasă. În fiecare seară, când cerul se înroșea și vântul își lăsa blând mângâierea pe câmp, el simțea în inima sa puterea perseverenței care îl îndemna să continue.

Călătoria lui Andrei nu a fost lipsită de momente de disperare sau de piedici imense. Însă fiecare obstacol pe care îl înfrunta îl învăța ceva nou despre sine și despre lumea din jurul său. El a descoperit că perseverența nu este doar o calitate, ci o stare de spirit profundă, care îți dă puterea să mergi mai departe chiar și atunci când drumul pare să fie presărat cu întuneric.', 'În tăcerea unei nopți de vară, sub cerul înstelat, povestea lui Andrei începe să prindă viață. El era un tânăr visător dintr-un sat liniștit, învăluit de povești și de miresme de fân cosit. Pentru Andrei, perseverența nu era doar o virtute, ci o comoară pe care o căuta cu ardoare în mijlocul provocărilor vieții.

Andrei își amintea cu drag de zilele copilăriei, când își petrecea zorile adunate la marginea râului, visând la un viitor plin de realizări.', NOW()),
      (17, 'https://i.imgur.com/epPzigV.jpeg', 'Cum să dezvolți o mentalitate de învingător prin perseverență', 'Într-o dimineață înnorată de toamnă, într-o cafenea mică din centrul orașului, se întâlneau în fiecare săptămână câțiva tineri dornici să împărtășească povești de succes și să își inspire unii pe alții. Printre ei, se afla și Elena, o tânără cu părul închis și ochi pătrunzători, care a învățat de-a lungul timpului cum să își dezvolte o mentalitate de învingător prin perseverență.

Pentru Elena, începutul a fost dificil. În liceu, când majoritatea colegilor se distrau în timpul liber, ea se dedica ore întregi studiului pentru a-și atinge visul de a deveni medic. Primele obstacole nu au întârziat să apară: note scăzute, momente de îndoieli și oboseală fizică și mentală. Cu toate acestea, Elena a învățat să își gestioneze emoțiile și să își folosească eșecurile ca pe niște lecții de viață.

Secretul ei consta într-un echilibru delicat între disciplină și compasiune față de sine. În fiecare dimineață, ea își programa timp pentru o scurtă sesiune de meditație și reflecta asupra obiectivelor sale. Într-o lume mereu în mișcare, capacitatea ei de a rămâne ancorată în propriile ei valori și aspirații era un pilon esențial al mentalității sale de învingător.

Pe măsură ce anii au trecut și provocările au devenit din ce în ce mai mari, Elena a continuat să se concentreze pe puterea gândirii pozitive și pe capacitatea de a înfrunta adversitățile cu calm și reziliență. Nu a fost ușor, dar fiecare bătălie câștigată i-a întărit credința în propria putere și a consolidat mentalitatea ei de învingător.', 'Într-o dimineață înnorată de toamnă, într-o cafenea mică din centrul orașului, se întâlneau în fiecare săptămână câțiva tineri dornici să împărtășească povești de succes și să își inspire unii pe alții. Printre ei, se afla și Elena, o tânără cu părul închis și ochi pătrunzători, care a învățat de-a lungul timpului cum să își dezvolte o mentalitate de învingător prin perseverență.

Pentru Elena, începutul a fost dificil.', NOW()),
      (18, 'https://i.imgur.com/r11xEpA.jpeg', 'Povești de succes: Oameni care au reușit datorită perseverenței', 'Într-un oraș agitat de pe malurile unui râu mândru, locuiau oameni ale căror povești de succes erau împletite cu firul subțire al perseverenței. Printre ei se număra și Ana, o femeie cu părul argintiu și ochi blânzi, care a străbătut un drum lung și anevoios pentru a ajunge acolo unde este astăzi.

Când era tânără, Ana visase să devină artistă. Cei din jurul ei îi spuneau că este o alegere nesigură, că trebuie să își găsească un job stabil și bine plătit. Însă pasiunea ei pentru artă era mai puternică decât orice îndoială și ea a ales să persevereze. Începând cu câteva ore pe săptămână într-un mic atelier închiriat, Ana a pictat și a sculptat cu o intensitate care îi alimenta visurile.

În fiecare zi, Ana se confrunta cu critici și cu auto-dubițări. Dar ea a învățat să-și transforme fricile într-o sursă de inspirație. În loc să se lase descurajată de eșecuri, ea își folosea experiențele pentru a-și îmbunătăți tehnica și pentru a-și dezvolta propriul stil artistic distinctiv. Fiecare tablou, fiecare sculptură era o poveste de perseverență și de curaj.

Cu trecerea anilor, Ana a reușit să își construiască o carieră respectată în lumea artei. Expozițiile sale erau evenimente apreciate de critici și de iubitorii de artă. Însă cel mai important lucru pentru ea nu erau recunoașterea sau succesul, ci bucuria de a face ceea ce iubea în fiecare zi și de a împărtăși povestea ei de perseverență cu ceilalți.

Astfel, Ana și alți oameni ca ea au demonstrat că perseverența nu este doar un cuvânt, ci o forță interioară care poate transforma visurile în realitate și obstacolele în oportunități.', 'Într-un oraș agitat de pe malurile unui râu mândru, locuiau oameni ale căror povești de succes erau împletite cu firul subțire al perseverenței. Printre ei se număra și Ana, o femeie cu părul argintiu și ochi blânzi, care a străbătut un drum lung și anevoios pentru a ajunge acolo unde este astăzi. Când era tânără, Ana visase să devină artistă. Cei din jurul ei îi spuneau că este o alegere nesigură, că trebuie să își găsească un job stabil și bine plătit.', NOW());`;
    await client.query(insertArticles);

    const insertTags = `
      INSERT INTO Tags (id, title) VALUES
      (1, 'Tehnologie'),
      (2, 'Productivitate'),
      (3, 'Creativitate'),
      (4, 'Focus'),
      (5, 'Obiceiuri'),
      (6, 'Perseverență');
    `;
    await client.query(insertTags);

    const insertArticleTags = `
      INSERT INTO ArticleTags (article_id, tag_id) VALUES
      (1, 1),
      (2, 1),
      (3, 1),
      (4, 2),
      (5, 2),
      (6, 2),
      (7, 3),
      (8, 3),
      (9, 3),
      (10, 4),
      (11, 4),
      (12, 4),
      (13, 5),
      (14, 5),
      (15, 5),
      (16, 6),
      (17, 6),
      (18, 6);
    `;
    await client.query(insertArticleTags);

    const insertStaticContent = `
    SET standard_conforming_strings = off;
      INSERT INTO StaticContent (id, title, content) VALUES
      ('site-description', 'Misiunea mea', 'Te ajut să descoperi cum să te organizezi mai bine, cum să îți gestionezi timpul eficient și cum să îți atingi obiectivele cu ajutorul instrumentelor și strategiilor cunoscute de mine. Fie că ești în căutarea unor sfaturi rapide sau dorești un plan detaliat pentru succes, sunt aici pentru a te sprijini la fiecare pas al drumului.'),
      ('self-description', 'Sunt Andreea', 'Pasionată de productivitate, dezvoltare personală și tehnologie. Cu o experiență în crearea de programe personalizate și strategii eficiente cu rezultate dovedite, sunt aici să te ajut să îți atingi obiectivele și să îți îmbunătățești viața.\nPe acest site, vei găsi nu doar serviciile mele personalizate, ci și o colecție de articole scrise cu grijă despre subiecte care mă pasionează profund. Dorința mea este să îți ofer sprijinul și ghidarea necesară. Hai să lucrăm împreună pentru a îți transforma visele în realitate.');
    `;
    await client.query(insertStaticContent);

    console.log("Sample data inserted successfully!");
  } catch (err) {
    console.error("Error inserting data: ", err);
  } finally {
    await client.end();
  }
}

populateTables();
