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
      INSERT INTO Articles (id, title, content, preview, created_at) VALUES
      (1, 'Viitorul ciberneticii', 'Cibernetica reprezintă viitorul tehnologiei moderne, integrând sistemele automate și inteligența artificială într-un mod fără precedent. Pe măsură ce ne îndreptăm spre o lume din ce în ce mai digitalizată, importanța ciberneticii crește exponențial. De la roboți autonomi care îndeplinesc sarcini complexe în fabrici, la algoritmi de învățare automată care analizează cantități uriașe de date, cibernetica ne schimbă viața de zi cu zi. Un aspect esențial al viitorului ciberneticii este dezvoltarea interfețelor om-mașină, care vor permite o colaborare mai eficientă între oameni și tehnologie. În următorii ani, vom vedea progrese semnificative în domenii precum medicina, transporturile și securitatea cibernetică, toate datorită avansurilor în cibernetică.', 
      'Cibernetica reprezintă viitorul tehnologiei moderne, integrând sistemele automate și inteligența artificială într-un mod fără precedent. Pe măsură ce ne îndreptăm spre o lume din ce în ce mai digitalizată, importanța ciberneticii crește exponențial.', '2024-06-06 15:30:00'),
      (2, 'Securitatea în spațiul online', 'În era digitală, securitatea în spațiul online a devenit o prioritate majoră pentru utilizatori și organizații deopotrivă. Cu numărul tot mai mare de amenințări cibernetice, protejarea informațiilor personale și a datelor sensibile este esențială. Măsurile de securitate includ utilizarea parolelor puternice, autentificarea cu doi factori și actualizarea constantă a software-ului pentru a preveni vulnerabilitățile. De asemenea, educarea utilizatorilor cu privire la phishing și alte tipuri de atacuri cibernetice este crucială. Organizațiile trebuie să implementeze politici stricte de securitate și să utilizeze tehnici avansate de criptare pentru a proteja datele clienților. În concluzie, securitatea în spațiul online este o componentă esențială a vieții noastre digitale, necesitând o abordare proactivă și bine informată.', 
      'În era digitală, securitatea în spațiul online a devenit o prioritate majoră pentru utilizatori și organizații deopotrivă. Cu numărul tot mai mare de amenințări cibernetice, protejarea informațiilor personale și a datelor sensibile este esențială.', '2023-12-25 08:45:00'),
      (3, 'Know to''s ale ciberneticii', 'Cibernetica este un domeniu vast și complex, iar înțelegerea principiilor de bază este esențială pentru oricine dorește să se specializeze în acest sector. În primul rând, este important să cunoaștem conceptul de feedback și modul în care acesta este utilizat pentru a optimiza sistemele automate. Al doilea aspect esențial este învățarea automată, care permite mașinilor să învețe din date și să facă predicții. Algoritmii de învățare automată sunt fundamentali pentru dezvoltarea inteligenței artificiale. De asemenea, este crucial să înțelegem securitatea cibernetică și măsurile necesare pentru a proteja sistemele informatice de atacuri. Familiarizarea cu limbaje de programare, cum ar fi Python și C++, este de asemenea recomandată pentru a putea dezvolta și implementa soluții cibernetice eficiente. În final, o abordare continuă de învățare și adaptare este cheia succesului în cibernetică.', 
      'Cibernetica este un domeniu vast și complex, iar înțelegerea principiilor de bază este esențială pentru oricine dorește să se specializeze în acest sector. În primul rând, este important să cunoaștem conceptul de feedback și modul în care acesta este utilizat pentru a optimiza sistemele automate.', '2022-09-14 12:00:00'),
      (4, 'Obiceiuri atomice', 'Obiceiurile atomice reprezintă schimbările mici, dar semnificative, pe care le putem face în viața noastră pentru a atinge obiective mari. Conceptul de obiceiuri atomice a fost popularizat de James Clear, care explică cum schimbările minore și repetate pot duce la îmbunătățiri majore în timp. De exemplu, dacă îți propui să citești doar 10 minute pe zi, în câteva luni vei observa o creștere semnificativă a cunoștințelor tale. Cheia succesului constă în consistență și încrederea că fiecare mică acțiune contribuie la obiectivul final. Obiceiurile atomice sunt fundamentale pentru crearea unor rutine pozitive și pentru dezvoltarea personală pe termen lung.', 
      'Obiceiurile atomice reprezintă schimbările mici, dar semnificative, pe care le putem face în viața noastră pentru a atinge obiective mari. Conceptul de obiceiuri atomice a fost popularizat de James Clear, care explică cum schimbările minore și repetate pot duce la îmbunătățiri majore în timp.', '2025-03-10 18:20:00'), 
      (5, 'Alinierea obiectivelor', 'Alinierea obiectivelor este un proces esențial pentru atingerea succesului în orice domeniu. Aceasta implică armonizarea obiectivelor personale și profesionale pentru a crea un echilibru care să permită progresul în ambele arii. Un prim pas în alinierea obiectivelor este clarificarea valorilor și priorităților personale. De asemenea, este important să stabilim obiective SMART (Specifice, Măsurabile, Accesibile, Relevante și Timp limitate) pentru a avea o direcție clară și pentru a putea măsura progresul. Comunicarea și colaborarea cu cei din jur, fie că este vorba de colegi de muncă sau de membrii familiei, sunt cruciale pentru a asigura susținerea necesară în atingerea obiectivelor. În final, alinierea obiectivelor contribuie la creșterea satisfacției și a împlinirii personale și profesionale.', 
      'Alinierea obiectivelor este un proces esențial pentru atingerea succesului în orice domeniu. Aceasta implică armonizarea obiectivelor personale și profesionale pentru a crea un echilibru care să permită progresul în ambele arii.', '2023-04-01 09:00:00'),
      (6, 'Puterea valorilor înalte', 'Valorile înalte reprezintă principiile fundamentale care ghidează comportamentul și deciziile noastre. Ele sunt esențiale pentru a construi o viață plină de integritate și sens. De exemplu, valori precum onestitatea, responsabilitatea și compasiunea sunt fundamentale pentru relații interpersonale sănătoase și pentru o societate armonioasă. În contextul profesional, valorile înalte conduc la un mediu de lucru etic și la luarea deciziilor care sunt în beneficiul comun. Cultivarea și menținerea valorilor înalte necesită auto-reflecție și angajament constant. Puterea valorilor înalte se reflectă în capacitatea de a inspira și motiva pe alții, contribuind la crearea unui impact pozitiv durabil în comunitatea noastră și în lume.', 
      'Valorile înalte reprezintă principiile fundamentale care ghidează comportamentul și deciziile noastre. Ele sunt esențiale pentru a construi o viață plină de integritate și sens. De exemplu, valori precum onestitatea, responsabilitatea și compasiunea sunt fundamentale pentru relații interpersonale sănătoase și pentru o societate armonioasă.', '2024-10-20 20:15:00');
    `;
    await client.query(insertArticles);

    const insertTags = `
      INSERT INTO Tags (id, title) VALUES
      (1, 'technology'),
      (2, 'productivity');
    `;
    await client.query(insertTags);

    const insertArticleTags = `
      INSERT INTO ArticleTags (article_id, tag_id) VALUES
      (1, 1),
      (2, 1),
      (3, 1),
      (4, 2),
      (5, 2),
      (6, 2);
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
