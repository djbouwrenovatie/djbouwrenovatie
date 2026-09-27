import DienstPage from '../../components/DienstPage'

export default function Schilderwerk() {
  return (
    <DienstPage
      title="Schilderwerk"
      subtitle="Professioneel schilderwerk binnen en buiten in Den Haag en omgeving. Strakke uitvoering, duurzame verf, nette resultaten."
      icon="🖌️"
      intro={[
        'Goed schilderwerk geeft uw woning een nieuwe uitstraling en beschermt tegelijkertijd de constructie. D&J Bouw & Renovatie verzorgt professioneel schilderwerk voor zowel binnen als buiten in Den Haag en omgeving.',
        'Wij werken met hoogwaardige verf en materialen en besteden veel aandacht aan de voorbereiding. Want een goed schilderresultaat begint bij het goed behandelen van het oppervlak — plamuren, schuren, en de juiste grondlaag aanbrengen.',
      ]}
      voordelen={[
        'Binnen- en buitenschilderwerk',
        'Gebruik van hoogwaardige, duurzame verf',
        'Zorgvuldige voorbereiding en afwerking',
        'Nette uitvoering, geen rommel achter',
        'Concurrerende tarieven',
        'Snel en op afgesproken tijd',
      ]}
      werkzaamheden={[
        { title: 'Binnenschilderwerk', description: 'Schilderen van muren, plafonds, deuren, kozijnen en plinten. Mooi strakke eindresultaten.' },
        { title: 'Buitenschilderwerk', description: 'Gevels, kozijnen, deuren en dakranden duurzaam schilderen voor bescherming en uitstraling.' },
        { title: 'Behangwerk', description: 'Behangen van wanden met diverse soorten behang — vliesbehang, fotobehang of klassiek papier.' },
        { title: 'Plamuren & slijpen', description: 'Wanden en hout voorbehandelen voor een glad en perfect eindresultaat.' },
        { title: 'Lakwerk', description: 'Lacqueren van deuren, kozijnen en houtwerk voor een strakke, gesloten afwerking.' },
        { title: 'Vocht- en schimmelbehandeling', description: 'Behandelen van vochtplekken en schimmel voor een duurzame, gezonde ondergrond.' },
      ]}
      stappenPlan={[
        { title: 'Inspectie & advies', description: 'Wij bekijken de situatie en geven advies over de beste aanpak en materiaalkeuze.' },
        { title: 'Voorbereiding', description: 'Plamuren, schuren, afplakken en grondlaag aanbrengen — de basis voor een perfect resultaat.' },
        { title: 'Schilderen', description: 'Vakkundig schilderen in de door u gekozen kleur en afwerking.' },
        { title: 'Oplevering', description: 'Alles opgeruimd achtergelaten en een strak eindresultaat waar u blij van wordt.' },
      ]}
      prijs={{
        tekst: 'De prijs van schilderwerk hangt af van de oppervlakte, de staat van de ondergrond en het type werk (binnen of buiten). Vraag een vrijblijvende offerte aan.',
      }}
      faq={[
        { vraag: 'Welke verf gebruiken jullie?', antwoord: 'Wij werken met A-merken verf zoals Sikkens, Dulux en Sigma. Kwalitatief en duurzaam.' },
        { vraag: 'Kunnen jullie ook stucwerk repareren voor het schilderen?', antwoord: 'Ja, wij kunnen kleine stucwerkreparaties uitvoeren als onderdeel van de voorbereiding.' },
        { vraag: 'Hoe lang duurt het binnenschilderen van een woonkamer?', antwoord: 'Afhankelijk van de staat van de wanden duurt dit 1 tot 2 werkdagen.' },
        { vraag: 'Kunnen jullie ook buiten schilderen in de winter?', antwoord: 'Buitenschilderwerk is het beste bij temperaturen boven de 5°C en droog weer. In overleg bekijken wij de mogelijkheden.' },
      ]}
    />
  )
}
