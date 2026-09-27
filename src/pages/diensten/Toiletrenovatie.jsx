import DienstPage from '../../components/DienstPage'

export default function Toiletrenovatie() {
  return (
    <DienstPage
      title="Toiletrenovatie"
      subtitle="Complete toiletrenovatie in Den Haag en omgeving. Van sloopwerk tot oplevering — wij verzorgen het gehele proces vakkundig en netjes."
      icon="🚽"
      intro={[
        'Een verouderd toilet is niet alleen onpraktisch, maar ook niet energiezuinig. D&J Bouw & Renovatie verzorgt complete toiletrenovaties in Den Haag en omgeving. Wij nemen het gehele werk uit handen — van sloopwerk tot de afwerking.',
        'Of u nu kiest voor een compleet nieuwe indeling met moderne tegels, of gewoon het sanitair wilt vervangen — wij adviseren u graag en zorgen voor een vakkundige uitvoering. Alles netjes, binnen de afgesproken tijd.',
      ]}
      voordelen={[
        'Complete renovatie van A tot Z',
        'Eigen sanitair of wij regelen het voor u',
        'Vakkundige tegelzetters en installateurs',
        'Netjes afgewerkt — inclusief sauswerk',
        'Klus klaar binnen 1 à 2 dagen',
        'Concurrerende prijzen, geen verborgen kosten',
      ]}
      werkzaamheden={[
        { title: 'Sloopwerk', description: 'Wij verwijderen het oude sanitair, de tegels en eventueel het leidingwerk zorgvuldig en opgeruimd.' },
        { title: 'Leidingwerk', description: 'Aanpassen of verleggen van water- en afvoerleidingen indien gewenst of noodzakelijk.' },
        { title: 'Tegelen', description: 'Strak tegelen van wanden en vloer met tegels naar keuze. Wij adviseren u over de juiste keuze.' },
        { title: 'Sanitair plaatsen', description: 'Plaatsen van nieuw toilet, fonteintje en eventueel andere sanitaire elementen.' },
        { title: 'Afwerking', description: 'Nette afwerking inclusief voegen, siliconenwerk, plintjes en sauswerk.' },
        { title: 'Oplevering', description: 'Wij leveren het toilet schoon en gebruiksklaar op, inclusief eindcontrole van alle aansluitingen.' },
      ]}
      stappenPlan={[
        { title: 'Vrijblijvend advies', description: 'Wij komen langs voor een gratis inspectie en bespreken uw wensen en budget.' },
        { title: 'Offerte op maat', description: 'U ontvangt een gedetailleerde offerte zonder verborgen kosten.' },
        { title: 'Uitvoering', description: 'Onze vaklieden voeren de renovatie vakkundig en netjes uit.' },
        { title: 'Oplevering', description: 'Wij leveren het toilet schoon en gebruiksklaar op. Uw tevredenheid staat voorop.' },
      ]}
      prijs={{
        tekst: 'De kosten van een toiletrenovatie zijn afhankelijk van de grootte van het toilet, de materialen die u kiest en de staat van het leidingwerk. Vraag een gratis offerte aan voor een exacte prijs op maat.',
      }}
      faq={[
        { vraag: 'Hoe lang duurt een toiletrenovatie?', antwoord: 'Een standaard toiletrenovatie duurt gemiddeld 1 tot 2 werkdagen. Dit is afhankelijk van de omvang van het werk en eventueel leidingwerk.' },
        { vraag: 'Kan ik mijn eigen tegels en sanitair aanleveren?', antwoord: 'Ja, dat is mogelijk. U kunt uw eigen materialen aanleveren. Wij kunnen ook materialen voor u regelen, soms tegen aantrekkelijke inkoopprijzen.' },
        { vraag: 'Mogen jullie ook leidingwerk aanpassen?', antwoord: 'Ja, wij hebben ervaren loodgieters in ons netwerk die leidingwerk kunnen aanpassen of verleggen.' },
        { vraag: 'Is er garantie op het werk?', antwoord: 'Ja, wij geven garantie op de door ons uitgevoerde werkzaamheden. De garantietermijn bespreken wij vooraf.' },
        { vraag: 'Werken jullie ook in het weekend?', antwoord: 'Op zaterdag zijn wij bereikbaar van 08:00 tot 14:00. Werkzaamheden op zaterdag zijn mogelijk in overleg.' },
      ]}
    />
  )
}
