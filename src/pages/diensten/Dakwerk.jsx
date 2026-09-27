import DienstPage from '../../components/DienstPage'

export default function Dakwerk() {
  return (
    <DienstPage
      title="Dakwerk"
      subtitle="Dakreparaties, dakgoten, voegwerk en waterdichting in Den Haag en omgeving. Snel ingrijpen bij lekkages — uw dak in goede handen."
      icon="🏠"
      intro={[
        'Een goed dak is essentieel voor uw woning. Lekkages, kapotte dakgoten of loszittende dakpannen kunnen snel grote schade veroorzaken. D&J Bouw & Renovatie verzorgt alle soorten dakwerkzaamheden in Den Haag en omgeving.',
        'Wij reageren snel bij lekkages en geven u altijd eerlijk advies over wat er nodig is — zonder onnodige kosten. Van kleine dakreparaties tot het volledig vervangen van dakgoten of het waterdichten van een plat dak.',
      ]}
      voordelen={[
        'Snelle reactie bij lekkages',
        'Eerlijk advies, geen onnodige werkzaamheden',
        'Alle soorten dakwerkzaamheden',
        'Veilig werken op hoogte',
        'Duurzame en kwalitatieve materialen',
        'Garantie op uitgevoerd werk',
      ]}
      werkzaamheden={[
        { title: 'Dakreparatie', description: 'Vervangen van kapotte of verschoven dakpannen, dichten van lekkages en repareren van naden.' },
        { title: 'Dakgoten', description: 'Reinigen, repareren of volledig vervangen van dakgoten en regenpijpen.' },
        { title: 'Plat dak', description: 'Waterdichten van platte daken met bitumen, EPDM rubber of dakbedekking.' },
        { title: 'Voegwerk', description: 'Uitfrezen en opnieuw voegen van gevels, schoorstenen en muurdammen.' },
        { title: 'Zinkwerk', description: 'Vervangen of repareren van zinkwerk rondom schoorsteen, dakranden en gevels.' },
        { title: 'Dakisolatie', description: 'Isolatie van het dak voor meer wooncomfort en energiebesparing.' },
      ]}
      stappenPlan={[
        { title: 'Inspectie', description: 'Wij bekijken het dak en de omgeving om de oorzaak van het probleem vast te stellen.' },
        { title: 'Advies & offerte', description: 'U krijgt een eerlijk advies en een duidelijke offerte voor de noodzakelijke werkzaamheden.' },
        { title: 'Uitvoering', description: 'Onze vaklieden voeren het dakwerk snel en vakkundig uit, met oog voor veiligheid.' },
        { title: 'Controle & oplevering', description: 'Na de werkzaamheden controleren wij alles grondig en leveren wij het werk op.' },
      ]}
      prijs={{
        tekst: 'De kosten voor dakwerk zijn afhankelijk van de aard van het probleem, de grootte van het dak en de benodigde materialen. Vraag een vrijblijvende offerte aan.',
      }}
      faq={[
        { vraag: 'Komen jullie ook bij spoed bij een lekkage?', antwoord: 'Ja, wij proberen bij acute lekkages zo snel mogelijk ter plaatse te zijn. Neem direct contact op via telefoon.' },
        { vraag: 'Kunnen jullie ook zonnepanelen plaatsen rond bestaand dakwerk?', antwoord: 'Wij kunnen de dakdoorvoeren en waterdichting rondom zonnepanelen verzorgen. Voor de panelen zelf verwijzen wij door.' },
        { vraag: 'Hoe weet ik of mijn dakgoot aan vervanging toe is?', antwoord: 'Tekenen zijn: scheuren, vervormingen, overlopend water bij regen, mos of plantgroei in de goot. Wij inspecteren dit gratis.' },
        { vraag: 'Geven jullie garantie op het dakwerk?', antwoord: 'Ja, wij geven garantie op uitgevoerd dakwerk. De termijn is afhankelijk van het type werkzaamheden en materialen.' },
      ]}
    />
  )
}
