import DienstPage from '../../components/DienstPage'

export default function Vloeren() {
  return (
    <DienstPage
      title="Vloeren"
      subtitle="Leggen van laminaat, parket, pvc vloeren en tegels in Den Haag en omgeving. Strak en stijlvol — voor elke ruimte de juiste vloer."
      icon="🪵"
      intro={[
        'Een nieuwe vloer geeft uw woning of bedrijfspand direct een andere uitstraling. D&J Bouw & Renovatie legt vloeren in Den Haag en omgeving — van laminaat en parket tot pvc, tegels en vinylvloeren.',
        'Wij zorgen voor een goede voorbereiding van de ondervloer en een vakkundige legwijze. Zo heeft u jaren lang plezier van uw nieuwe vloer. Wij adviseren u ook graag over de beste keuze voor uw situatie.',
      ]}
      voordelen={[
        'Alle soorten vloeren — laminaat, parket, pvc, tegels',
        'Egaliseren en voorbereiden van de ondervloer',
        'Plaatsen van ondervloer en randprofiel',
        'Nette afwerking met plinten',
        'Vakkundig en snel gelegd',
        'Gratis advies over de juiste vloerkeuze',
      ]}
      werkzaamheden={[
        { title: 'Laminaatvloer', description: 'Snel te leggen, onderhoudsarm en betaalbaar. Wij leggen laminaatvloeren in alle maten en kleuren.' },
        { title: 'Parketvloer', description: 'Massief en engineered parket voor een warme, natuurlijke uitstraling. Zwevend of gelijmd.' },
        { title: 'PVC & vinylvloer', description: 'Waterdicht en slijtvast. Ideaal voor badkamer, keuken en gang. Diverse houtlook en steenlook uitvoeringen.' },
        { title: 'Tegelvloer', description: 'Keramische tegels of natuursteen. Perfect voor keuken, badkamer en hal.' },
        { title: 'Egalisatie', description: 'Ongelijke betonvloeren gladmaken met zelfnivellerende gietegalisatie voor een perfecte ondergrond.' },
        { title: 'Plinten & afwerking', description: 'Nette afwerking met passende plinten en overgangsprofielen voor een volledig eindresultaat.' },
      ]}
      stappenPlan={[
        { title: 'Inspectie', description: 'Wij bekijken de ruimte, meten op en beoordelen de staat van de huidige ondervloer.' },
        { title: 'Advies & offerte', description: 'U krijgt advies over de meest geschikte vloer en een duidelijke offerte.' },
        { title: 'Leggen', description: 'Onze vaklieden leggen de vloer vakkundig — inclusief voorbereiding en plinten.' },
        { title: 'Oplevering', description: 'Uw nieuwe vloer netjes opgeleverd. Klaar om op te leven.' },
      ]}
      prijs={{
        tekst: 'De prijs voor het leggen van vloeren is afhankelijk van het type vloer, de oppervlakte en de staat van de ondervloer. Vraag een gratis offerte aan.',
      }}
      faq={[
        { vraag: 'Kunnen jullie ook de oude vloer verwijderen?', antwoord: 'Ja, wij kunnen de bestaande vloer verwijderen en afvoeren als onderdeel van de werkzaamheden.' },
        { vraag: 'Welke vloer is het beste voor een badkamer?', antwoord: 'Voor een badkamer adviseren wij een waterdichte pvc vloer of tegels. Wij leggen graag uit wat de beste keuze is voor uw situatie.' },
        { vraag: 'Kunnen jullie ook vloerverwarming leggen?', antwoord: 'Wij werken samen met installateurs voor vloerverwarming. Vraag er naar bij uw offerte.' },
        { vraag: 'Hoe lang duurt het leggen van een vloer?', antwoord: 'Een gemiddelde woonkamer duurt 1 werkdag. Grotere projecten of voorbereiding van de ondervloer kosten meer tijd.' },
      ]}
    />
  )
}
