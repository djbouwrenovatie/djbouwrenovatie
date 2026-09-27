import DienstPage from '../../components/DienstPage'

export default function Badkamerrenovatie() {
  return (
    <DienstPage
      title="Badkamerrenovatie"
      subtitle="Van ontwerp tot oplevering renoveren wij uw badkamer compleet. Professioneel tegelwerk, sanitair en installatie in Den Haag en omgeving."
      icon="🛁"
      intro={[
        'Een mooie, functionele badkamer begint bij de juiste vakman. D&J Bouw & Renovatie verzorgt complete badkamerrenovaties in Den Haag en omgeving. Wij nemen het volledige traject voor onze rekening — van het sloopwerk en het leidingwerk tot de laatste voegenafwerking.',
        'Wij werken graag samen met u om uw badkamer naar wens te renoveren. Of u nu kiest voor een moderne inloopdouche, een vrijstaand bad of een praktische badkamer voor het hele gezin — wij adviseren u en zorgen voor een resultaat om trots op te zijn.',
      ]}
      voordelen={[
        'Complete badkamerrenovatie van A tot Z',
        'Eigen vakkundige tegelzetters en installateurs',
        'Ruime keuze in tegels en sanitair',
        'Gratis advies aan huis',
        'Werk inclusief sloopwerk en afvoer oud materiaal',
        'Garantie op uitgevoerd werk',
      ]}
      werkzaamheden={[
        { title: 'Sloopwerk & afvoer', description: 'Vakkundig verwijderen van het bestaande sanitair, tegels en eventueel leidingwerk. Alles netjes afgevoerd.' },
        { title: 'Waterdichting', description: 'Waterdichte laag aanbrengen op wanden en vloer rondom douche en bad voor langdurige bescherming.' },
        { title: 'Leidingwerk', description: 'Aanleggen of aanpassen van water- en afvoerleidingen. Inclusief aansluiting warm en koud water.' },
        { title: 'Tegelwerk', description: 'Strak zetten van wand- en vloertegels. Breed assortiment en uw eigen materialen zijn welkom.' },
        { title: 'Sanitair & installatie', description: 'Plaatsen van douche, bad, toilet, wastafel en bijbehorende kranen. Vakkundig aangesloten.' },
        { title: 'Afwerking', description: 'Voegen, siliconen afwerking, plintjes, verlichting en sauswerk voor een complete eindoplevering.' },
      ]}
      stappenPlan={[
        { title: 'Inspectie & advies', description: 'Wij komen langs om uw badkamer te bekijken en uw wensen te bespreken. Gratis en vrijblijvend.' },
        { title: 'Offerte op maat', description: 'U ontvangt binnen 2 werkdagen een gedetailleerde offerte met alle kosten duidelijk vermeld.' },
        { title: 'Planning & uitvoering', description: 'Na akkoord plannen wij de werkzaamheden in. Onze vaklieden voeren alles netjes uit.' },
        { title: 'Oplevering & nazorg', description: 'Uw badkamer wordt schoon opgeleverd. Wij lopen samen door de werkzaamheden voor uw definitieve akkoord.' },
      ]}
      prijs={{
        tekst: 'De kosten van een badkamerrenovatie variëren sterk per situatie. Denk aan de grootte van de badkamer, uw materiaalkeuze en de staat van het leidingwerk. Vraag een gratis offerte aan voor een prijs op maat.',
      }}
      faq={[
        { vraag: 'Hoe lang duurt een badkamerrenovatie?', antwoord: 'Een gemiddelde badkamerrenovatie duurt 3 tot 7 werkdagen, afhankelijk van de omvang en eventuele extra werkzaamheden.' },
        { vraag: 'Kunnen wij de douche uitbreiden of een bad plaatsen?', antwoord: 'Ja, wij adviseren u over de mogelijkheden en verzorgen de volledige aanpassing inclusief leidingwerk.' },
        { vraag: 'Mogen wij onze eigen tegels aanleveren?', antwoord: 'Dat is zeker mogelijk. Wij werken ook graag met materialen die u zelf heeft uitgekozen.' },
        { vraag: 'Hebben jullie garantie op het werk?', antwoord: 'Ja, wij geven garantie op onze uitgevoerde werkzaamheden. De voorwaarden bespreken wij bij de offerte.' },
        { vraag: 'Wat als er onverwachte problemen zijn?', antwoord: 'Wij communiceren transparant. Bij onverwachte problemen (zoals verzakte vloer of verouderd leidingwerk) bespreken wij dit direct met u en passen de offerte aan.' },
      ]}
    />
  )
}
