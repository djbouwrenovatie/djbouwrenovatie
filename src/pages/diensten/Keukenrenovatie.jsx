import DienstPage from '../../components/DienstPage'

export default function Keukenrenovatie() {
  return (
    <DienstPage
      title="Keukenrenovatie"
      subtitle="Uw droomkeuken realiseren in Den Haag en omgeving. Plaatsing, tegelwerk, aansluiting en afwerking — wij zorgen voor een perfect resultaat."
      icon="🍳"
      intro={[
        'Een nieuwe keuken geeft uw woning direct een frisse uitstraling. D&J Bouw & Renovatie plaatst keukens in Den Haag en omgeving met oog voor detail en vakmanschap. Wij verzorgen zowel de plaatsing van de keuken als alle bijkomende werkzaamheden zoals tegelen, leidingwerk en aansluiting.',
        'Wij werken samen met keukenleveranciers maar kunnen ook uw eigen keuken plaatsen. Onze vaklieden zorgen voor een correcte montage, een strakke tegelachtergrond en alle aansluitingen voor gas, water en elektra.',
      ]}
      voordelen={[
        'Plaatsing van uw keuken inclusief alle aansluitingen',
        'Tegelwerk achterwand en eventueel vloer',
        'Gas-, water- en elektraaansluiting',
        'Werken met uw eigen keuken of via onze leveranciers',
        'Nette en strakke afwerking',
        'Concurrerende prijzen',
      ]}
      werkzaamheden={[
        { title: 'Sloopwerk', description: 'Verwijderen van de oude keuken inclusief afvoer van materialen. Wanden en vloer worden gereedgemaakt.' },
        { title: 'Leidingwerk', description: 'Aanpassen of aanleggen van water- en gasleiding op de juiste plaatsen voor uw nieuwe keuken.' },
        { title: 'Elektra', description: 'Aanleggen van de benodigde groepen en aansluitpunten voor apparatuur en verlichting.' },
        { title: 'Tegelwerk', description: 'Zetten van keukentegels op de achterwand (spatwand) en eventueel de vloer.' },
        { title: 'Keukenplaatsing', description: 'Montage van het keukenblok, kasten, werkblad en inbouwapparatuur.' },
        { title: 'Afwerking', description: 'Aansluiten van alle apparatuur, afdichten met siliconen, en nette eindafwerking.' },
      ]}
      stappenPlan={[
        { title: 'Gratis advies', description: 'Wij komen langs om uw keuken te bekijken en de mogelijkheden te bespreken.' },
        { title: 'Offerte', description: 'U ontvangt een gedetailleerde offerte inclusief alle werkzaamheden en materialen.' },
        { title: 'Uitvoering', description: 'Onze vaklieden plaatsen uw keuken vakkundig en netjes, stap voor stap.' },
        { title: 'Oplevering', description: 'Alle aansluitingen worden getest en de keuken wordt schoon opgeleverd.' },
      ]}
      prijs={{
        tekst: 'De kosten van een keukenplaatsing zijn afhankelijk van de grootte van de keuken, het benodigde leidingwerk en de gewenste afwerking. Vraag vrijblijvend een offerte aan.',
      }}
      faq={[
        { vraag: 'Plaatsen jullie ook mijn IKEA-keuken?', antwoord: 'Ja, wij plaatsen keukens van alle merken, inclusief IKEA. U levert de keuken, wij verzorgen de montage en aansluitingen.' },
        { vraag: 'Hoe lang duurt het plaatsen van een keuken?', antwoord: 'Een standaard keukenplaatsing duurt 2 tot 5 werkdagen, afhankelijk van de grootte en het extra werk.' },
        { vraag: 'Kunnen jullie ook het aanrechtblad op maat maken?', antwoord: 'Via onze samenwerkingspartners kunnen wij aanrechtbladen op maat regelen. Vraag ernaar bij de offerte.' },
        { vraag: 'Regelen jullie ook de gasmontage?', antwoord: 'Ja, wij werken samen met gecertificeerde gasmonteurs die de gasaansluiting veilig kunnen verzorgen.' },
      ]}
    />
  )
}
