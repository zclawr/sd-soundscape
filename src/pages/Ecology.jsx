import { useState } from 'react'
import './Page.css'
import Navbar from '../components/AppBar'

function Ecology() {
  return (
    <>
      <Navbar/>
      <section id="center">
        <div>
          <h1>The Changing Avian Ecology of La Jolla</h1>
        </div>
        <div>
          <h2>Industrialization and Bioacoustics: General Impacts of Noise on Birds</h2>
          <br/>
          <p>Half of all US land sits within 382 meters of a road, and only 3% is more than 5 kilometers away (3). Road influence zones extend hundreds of meters outward. A phantom road test (a half-kilometer line of speakers broadcasting traffic noise). Bird abundance dropped 28% when the speakers were on. The cedar waxwing and yellow warbler nearly disappeared with traffic noise (2).</p>
          <br/>
          <p>Traffic noise affects bird species through both decibel and frequency mechanisms.</p>
          <h3>Decibel:</h3>
          <p>Loud noise acting as an “acoustic blanket,” muffling the audio cues birds rely on to detect predators, competitors and their own species (5). A 10-decibel increase in noise above natural levels can shrink animals’ listening area by 90 percent. Sounds exceeding 45 dB start to mask bird songs, while levels around 60 dB can drastically reduce mating success, and noise over 90 dB causes severe behavioral disruption (4). Birds living near persistent noise sources show stress hormone patterns similar to humans with PTSD. The louder the noise, the lower the birds’ baseline corticosterone levels (5). Corticosterone lowers the reproductive hormones and thyroid signals that control breeding and growth. It also raises blood sugar, cholesterol, and fat level. Nestlings in the noisiest environments develop smaller bodies and poorer feathers (6). In wild birds, loud noise above about 70 decibels shrank body size and feathers and hurt egg hatching.</p>
          <img src="feather_comparison.png" width="60%" style={{padding: "40px"}}/>
          <p>a: G1 (Control Group) showing normal patterns in the feather of non-breeding quail; b: G2 (Traffic Noise Group) showing ptilochronology in non-breeding quail; c: G3 (Military Noise Group) showing ptilochronology in non-breeding quail; d: G4 (Human activities Noise Group) showing ptilochronology in non-breeding quail.</p>
          <br/>
          <h3>Frequency:</h3>
          <p>Bird’s response to noise varies depending on their vocalization frequency. Transportation noise has a wide range, dominated by low frequencies below 2kHz but can reach up to 5kHz. Body size and vocal frequency are inversely linked (1). Therefore larger species tend to be affected by the transportation noise, while smaller birds actually gain positive effects due to leaving of large competitors.</p>
          <br/>
          <h3>Decibel - Birds Population Model:</h3>
          <p>Any noise below 45dB does not affect bird population, since it's below the masking threshold. The population drops to 72% (-28% reduction) at 55 dB comes from the phantom-road experiment (2). 34% fewer birds at noisy compressors that typically operate at 70dB (7). So we estimate about 2.5% decrease in bird population per decibel above 44 dB.</p>
          <br/>
          <h2>Annotated Bibliography</h2>
          <br/>
          <p> (1) Benedetti, Y., et al. (2023). Effects of light and noise pollution on avian communities of European cities are correlated with the species’ diet. Scientific Reports, 13(1), 4361. https://www.nature.com/articles/s41598-023-31337-w</p>
          <br/>
          <p>This peer-reviewed study from the Czech University of Life Sciences examines how anthropogenic light and noise affect breeding bird communities across 14 European cities. Using data from 127 species and 1,349 point counts distributed along gradients of urbanization, the authors found that a species’ tolerance for noise and light pollution correlates significantly with its diet. Insectivorous species were the most sensitive to urban pollution, while granivorous and omnivorous birds were more resilient. The study is valuable for contextualizing which functional groups of birds are most at risk from urban noise expansion.</p>
          <br/>
          <p> (2) Van Hoose, N. (2018, January 8). Noise pollution causes chronic stress in birds, with health consequences for young. Florida Museum of Natural History, University of Florida. https://www.floridamuseum.ufl.edu/science/noise-pollution-causes-stress-in-birds/</p>
          <br/>
          <p>This research news article from the Florida Museum of Natural History summarizes findings on how chronic noise exposure elevates corticosterone levels in birds and cascades into serious developmental harm for their offspring. Key findings include that mother birds unable to reliably detect predators through sound face impossible trade-offs between nest defense and foraging, resulting in malnourished offspring with reduced survival rates. At very high noise levels the body paradoxically suppresses baseline stress response as a self-protective mechanism. The article also highlights that a 10 dB increase above natural ambient noise shrinks an animal’s effective listening area by roughly 90%. This source highlights how the physiological stress can affect the bird species in multiple different ways</p>
          <br/>
          <p> (3) Francis, C. D., Ortega, C. P., & Cruz, A. (2009). Noise pollution changes avian communities and species interactions. Current Biology, 19(16), 1415–1419. https://www.sciencedirect.com/science/article/pii/S0960982209013281</p>
          <br/>
          <p>A peer-reviewed study from the University of Colorado at Boulder, this paper uses a natural experiment in New Mexico, a gas well compressor stations as noise sources, to isolate the effects of noise from other urban surroundings. The authors found that chronic noise significantly reduced nesting species richness and restructured bird community composition. Interestingly, the altered communities experienced fewer nest failures due to reduced nest predator presence, expressing the complex indirect effects of noise on species interactions. </p>
          <br/>
          <p> (4) Schommer, L. (2022, May 24). How loud is too loud? Investigating how noise affects birds. Center for Environmental Management of Military Lands (CEMML), Colorado State University. https://cemml.colostate.edu/how-loud-is-too-loud-investigating-how-noise-affects-birds/</p>
          <br/>
          <p> This article from Colorado State University’s CEMML describes an applied field study examining ambient noise levels and bird nesting behavior at Travis Air Force Base in California. Researchers found that ambient noise levels dropped significantly during the COVID-19 pandemic in 2020, coinciding with greater numbers of nesting raptors compared to 2021, when noise returned to pre-pandemic levels. The study reveals real-world evidence of the correlation between reduced anthropogenic noise and improved raptor nesting success.</p>
          <br/>
          <p> (5) California Living Museum (CALM). (n.d.). Western Screech Owl species profile. CALM Zoo. https://calmzoo.org/blog/animals/western-screech-owl/</p>
          <br/>
          <p>This species profile from the California Living Museum provides accessible natural history information on the Western Screech Owl , including its hunting strategies, vocalizations, habitat preferences, and ecological role. The profile confirms the owl as a “sit-and-wait” predator that relies almost entirely on acute hearing to detect prey, making it one of the most noise-sensitive raptor species in the La Jolla area.</p>
          <br/>
          <p> (6) Senzaki, M., Yamaura, Y., Francis, C. D., & Nakamura, F. (2016). Traffic noise reduces foraging efficiency in wild owls. Scientific Reports, 6, 30602. https://www.sciencedirect.com/science/article/abs/pii/S0006320716301343</p>
          <br/>
          <p>This peer-reviewed field study from Hokkaido University provides the first empirical evidence that traffic noise reduces foraging efficiency in wild owls. Using Long-eared Owls (Asio otus) in natural settings, the research found that foraging efficiency declined with increasing traffic noise due to noise masking and behavioral aversion. The noise effects extended more than 120 meters from roads, a larger impact zone than previously estimated from captive experiments. The study expresses how owls’ hunting success drops by approximately 8% per 1 dB increase in ambient noise, and that success falls to near zero at approximately 60–61 dB.</p>
          <br/>
          <p> (7) Tandem Global. (n.d.). 4 ways that noise pollution can impact wildlife—and 4 ways to help. Tandem Global. https://tandemglobal.org/4-ways-that-noise-pollution-can-impact-wildlife-and-4-ways-to-help/</p>
          <br/>
          <p>This overview article from Tandem Global summarizes four major categories of noise pollution impacts on wildlife: communication masking, chronic physiological stress, prey detection interference, and habitat abandonment. The article synthesizes findings from multiple scientific studies and is useful as a general reference for the cross-species noise impacts. </p>
          <br/>
          <p> (8) San Diego Zoo Wildlife Alliance. (n.d.). Red-tailed Hawk. San Diego Zoo. https://animals.sandiegozoo.org/animals/red-tailed-hawk</p>
          <br/>
          <p>This species profile from the San Diego Zoo Wildlife Alliance provides foundational natural history information on the Red-tailed Hawk , including its sensory capabilities, vocalizations, and ecological behavior. The species’ ability to perceive ultraviolet wavelengths in addition to visible color, which is an adaptation that becomes increasingly important when acoustic foraging cues are disrupted by noise. Adult vocalizations used in courtship and chick vocalizations are also described, providing evidence for how noise may disrupt inter-generational communication.</p>
          <br/>
          <p> (9) National Park Service. (n.d.). Effects of noise on wildlife. U.S. Department of the Interior, Natural Sounds Program. https://www.nps.gov/subjects/sound/effects_wildlife.htm</p>
          <br/>
          <p>Published by the U.S. National Park Service’s Natural Sounds Program, evidence-based overview of how anthropogenic noise affects wildlife. It includes topics of acoustic masking, stress physiology, reproductive disruption, and habitat displacement. Scientific research is used to explain how noise degrades the “listening area” of animals, the effective acoustic space within which they can detect relevant sounds, and documents the downstream effects on hunting, breeding, and survival. </p>
          <br/>
          <p> (10) Dowd, T. (2021, May 2). New Osprey Cam on Scripps Pier gives bird lovers closeup view of Sea-Hawks. Times of San Diego. https://timesofsandiego.com/life/2021/05/02/new-osprey-cam-on-scripps-pier-gives-bird-lovers-closeup-view-of-sea-hawks/</p>
          <br/>
          <p>This local news article from the Times of San Diego documents the presence and nesting of Osprey at the Scripps Institution of Oceanography Pier in La Jolla, confirming this species as a year-round resident of the San Diego coastal area. </p>
          <br/>
          <p> (11) García, M. J. (2024, April 26). The impact of noise pollution on birds. FLAAR Mesoamerica. https://flaar-mesoamerica.org/2024/04/26/the-impact-of-noise-pollution-on-birds/</p>
          <br/>
          <p>This 2024 article from FLAAR Mesoamerica synthesizes current understanding of how human-generated noise, affects bird physiology and behavior. The article covers behavioral disruption, nesting abandonment, reproductive failure, and physical auditory damage from prolonged noise exposure. It expresses specific connections between chronic moderate-level noise and acute high-intensity noise. </p>
          <br/>
          <p> (12) University of Michigan School for Environment and Sustainability. (n.d.). Noise pollution affecting birds’ reproduction, stress levels and more—good news: we can fix it. SEAS News. https://seas.umich.edu/news/noise-pollution-affecting-birds-reproduction-stress-levels-and-more-good-news-we-can-fix-it</p>
          <br/>
          <p>This news piece from the University of Michigan School for Environment and Sustainability summarizes research findings on the multi-dimensional harms of noise pollution on bird populations, including reproductive suppression, elevated stress hormones, and communication interference. Importantly, it also highlights evidence that these effects are reversible when noise is reduced, offering a constructive perspective for conservation policy.</p> 
          <br/>
          <p> (13) Cornell Lab of Ornithology. (n.d.). Anna’s Hummingbird—Life history. All About Birds. https://www.allaboutbirds.org/guide/Annas_Hummingbird/lifehistory</p>
          <br/>
          <p>The Cornell Lab of Ornithology’s All About Birds database is one of incredible resources. This information on the Anna’s Hummingbird details the species’ life history, including its year-round residency (unlike most hummingbirds, which migrate), its diet, and its use of torpor to survive cold temperatures, and its role as a pollinator. This source is used to inform of Anna's Hummingbird and examining how noise pollution disrupts its foraging, communication, and energy balance in the La Jolla context.</p>
          <br/>
          <p> (14) Brancaccio-Pérez, E., & Ortiz-Pulido, R. (2024). Urban noise effects on foraging activity of a hummingbird community. The Wilson Journal of Ornithology, 136(2), 254–261. https://doi.org/10.1676/23-00029 https://bioone.org/journals/the-wilson-journal-of-ornithology/volume-136/issue-2/23-00029/Urban-noise-effects-on-foraging-activity-of-a-hummingbird-community/10.1676/23-00029.short</p>
          <br/>
          <p>This sources uses empirically tests on the effect of urban noise specifically on hummingbird foraging behavior. Conducted in central Mexico, the study evaluated a community of urban hummingbirds and found measurable reductions in foraging activity in loud environments. The study supports claims about noise-driven foraging disruption and energy imbalance in this species.</p>
          <br/>
          <p> (15) San Diego Plant Atlas – Bird Atlas. (n.d.). Surfbird species account. San Diego Natural History Museum. https://sdplantatlas.org/birdatlas/pdf/Surfbird.pdf</p>
          <br/>
          <p>This species account from the San Diego Natural History Museum’s Bird Atlas expresses the Surfbird in the La Jolla region, confirming its status as a migratory shorebird with prime migration during April and May. This source is used to establish the Surfbird’s geographic presence in the La Jolla coastal ecosystem and to provide the ecological baseline related to how noise levels of approximately 65 dBA degrade its communication, predator detection, and stress physiology during critical migratory staging periods.</p>
          <br/>
        </div>
      </section>
    </>
  )
}

export default Ecology
