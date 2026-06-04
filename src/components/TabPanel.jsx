import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '../../node_modules/@mui/material/Tabs';
import Tab from '../../node_modules/@mui/material/Tab';
import Box from '../../node_modules/@mui/material/Box';
import './TabPanel.css'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      width="100%"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const { year, ...other } = props;
  const [value, setValue] = React.useState(0);

  const historyDict = { 
    1650: (
      <>
      <p>Early accounts of La Jolla praise it for its “pristine emptiness” – a picturesque, largely treeless landscape of low-lying coastal shrubs, “sweet-smelling with wildflowers and aromatic bushes”. According to early resident Ellen Mills, “La Jolla was just a beautiful expanse of grey-green sagebrush and darker chaparral from Mt. Soledad to the Cove”. Before its first permanent settlements were built, the area was a popular day trip destination for San Diego residents, who would come at low tide to admire the dramatic coastline and gather the shells and mosses that lined the seashore.</p>
      <br/>
      <p>In those days, the sounds of the gentle sea breeze and the waves crashing against the cliffs must have defined La Jolla’s soundscape to an even greater extent than they do today. The sonic contributions of flora and fauna are not to be neglected; early writings note the presence of blue jays, owls, road runners, herons, and seagulls, as well as an abundance of skunks, rabbits, rattlesnakes, ground squirrels, and various insects. An account by Ellen Browning Scripps reminisces about air “resonant with the song of the meadow lark; the drone of the bees, the chirp of the cricket and the hum of aerial insect life.”</p>
      </>
    ),
    1895: (
      <>
      <p>La Jolla’s first full-time residents built homes in 1887; by 1893, the town boasted a new hotel, railway connection to San Diego, and a few hundred residents. This rapid growth brought about many changes to village life as La Jolla transitioned from an undeveloped vacation destination to a lively small town. In addition to the ever-present roar of the sea,  sounds typical of this time period might include the vocalizations and hoofbeats of the town’s many cows and horses on dirt paths, the creaking of wooden stagecoach wheels, and the “roar and whistle” of the steam engine. Axes, saws, and other woodworking tools employed for the cutting and splitting of wood would have also been prevalent, both for the heating of homes and the construction of redwood cottages typical of the time.</p>
      <br/>
      <p>The turn of the century also brought with it the first automobiles; while these were not common in La Jolla at the time, some of its more eccentric residents embraced the new technology. Dr. Joshua Longstreth Baily Jr. identifies one Mr. Auberon Herbert as “the first resident of La Jolla to own an automobile”, who “frequently went out driving but did not so frequently drive back again”. The car was so unreliable that when it inevitably broke down, it would have to be towed back by mule! For a brief stretch of time, it was not unusual for the cracking of whips and rumbling of engines to coexist on village streets.</p>
      <br/>
      <p>Despite the real estate boom and advancements in transportation, the sounds of the largely unspoilt nature that surrounded La Jolla must have still dominated its soundscape. One significant ecological shift that occurred around this time was the planting of trees; allegedly, “one thousand palms, one thousand cedar, eucalyptus, and other trees”. The scarcity of water in La Jolla’s early days means many of these plants did not survive, but those that did would come to dominate La Jolla streets. One can imagine the array of new sounds caused by the introduction of trees into a formerly unforested environment: the creaking of branches, leaves rustling in the wind, and the birds and insects that could now call them home.</p>
      </>
    ),
    1925: (
      <>
      <p>Many affectionate recollections of 1920s La Jolla claim this period to be the town’s “Golden Age”. The town prospered during this time, and many developments and expansions went underway.  An electric streetcar connection to downtown San Diego and Pacific Beach was established in 1924, providing memorable trips to La Jolla residents commuting to downtown San Diego. Resident Norma Hacker reminisces on her morning commute: “ ‘our crowd’ even stood when necessary to be back where the laughter was… Those early mornings with the sun striking down through the tall groves of buildings which lined Broadway were happy, silly times. We laughed at nothing and at everything”.</p> 
      <br/>
      <p>The primary pastimes of La Jolla residents at this time were tennis, golf, and swimming in the ocean. These were athletic as well as social pursuits, and one can imagine the swishing of racquets and buzz of conversation emanating from the La Jolla Beach and Tennis Club. The streets must also have been rich with the sounds of daily life: perhaps starting with the clinking of milk bottles, followed by door-to-door salesmen, garbage collectors, grocery deliveries, and residents going about their days on foot, car, or horseback. The population had since grown to about four thousand people, and the shops, schools, and social clubs in town were by then well-established. For many children, the ringing of the high school bell– audible from several blocks away– established the rhythm of daily life.</p>
      <br/>
      <p>The town’s rapid growth did not suppress the dominance of natural sounds in the La Jolla of the 1920s. Hacker recalls that “It was a world of sound and taste and smell. Of lovely vistas as well but… they do not evoke the memories the other senses bring. Over all, it was the sound of the sea, breaking against the cliff, surging up the beaches and swirling in the golden cove. Sometimes it was merely a faintly heard presence but when there was a storm and the waves crashed against the land, everyone would bundle up against the cold and go down to stand and watch the spray… ”.</p>
      <br/>
      <p>In the spring, frogs dominated the soundscape at dusk: “with the coming of darkness, their falsetto croaking blended with the chirping of crickets”, followed by “owls, mice, and pack rats scurrying about” at night. In the daytime, one venturing inland might hear how “doves cooed and coveys of quail whirred up to swirl away and then emit their ka-KA-ka cries”; closer to the ocean, the streets “sounded with breaking waves, the cries of gulls and the quarter-hourly Westminster chimes from the bell tower”. By this time, eucalyptus canopies shaded Ivanhoe Avenue and Wall Street, contributing the papery sound of their leaves and bark, rattling and peeling in the wind.</p>
      <br/>
      <p>The presence of livestock was still fairly common at the time, and the vacant fields of wild oats and elderberries surrounding the town were criss-crossed by cowpaths (as were the beaches!). Chaffee King Castleton’s reflections on La Jolla’s equestrian past highlight the town’s closeness to nearby open space: “Besides tennis, and swimming at the Cove, La Jolla to many meant ‘horses’... One might ride out from Stevie’s in those days on a dear lively little horse named Billy, with no saddle, just bridle and surcingle. One cantered up Pearl Street into Fay and directly into the wilds of Muirlands… Just heather, sage, chemise everlasting, and the flickering shade of a few eucalyptus in lovely sweetness, quietness and solitude.”</p>
      </>
    ),
    1965: (
      <>
      <p>The postwar years saw tremendous expansion. Neighborhoods surrounding La Jolla Park, such as Bird Rock, Mt. Soledad, and the Muirlands, were developed and absorbed into the town of La Jolla. Construction noise, the tolling of bells in the many new churches, and the dwindling presence of nearby open space rapidly altered La Jolla’s sights and sounds. This expansion wasn’t just residential. Faced with a sudden decrease in demand and anxious to avoid another recession, the corporations that had made San Diego an industrial powerhouse during World War II worked to establish peacetime purposes for their capabilities. Most notably, General Dynamics established its General Atomics division in 1955 with the motto “harnessing the power of nuclear technologies for the benefit of man” 2. The General Atomics campus was built in the hills east of Camp Callan, just blocks away from the north edge of UC San Diego’s present-day campus.</p>
      <br/>
      <p>Backed by General Atomics’s founder, John Jay Hopkins, Roger Revelle, then Director of the Scripps Institution of Oceanography, and various San Diego civic leaders, plans for a new University of California campus in La Jolla took shape in the late 1950s. Friction between Revelle and UC Regent Edwin Pauley characterized most of the deliberation over the new campus’s location and scope of instruction. Interestingly, the question of noise pollution played a significant role here. Regent Pauley claimed that the aviation noise generated by the nearby Naval Air Station Miramar made the proposed site (which to this day lies directly under the facility’s flight path) unsuitable for an institution of higher learning. In the 1950s, the NAS Miramar was preoccupied with training fighter jet pilots for the Korean War; the cacophony caused by the roaring engines and afterburners 2 of supersonic flight were then characteristic of the region.</p>
      <br/>
      <p>Revelle eventually triumphed over Pauley, and UC San Diego was finally established in 1960. Years of UC-affiliated construction projects followed, including UCSD’s First (now Revelle) and Second (now Muir) Colleges; the Coast Apartments, originally built to house married SIO graduate students; the (unaffiliated, but very close by) Salk Institute For Biological Studies; and the UCSD Medical Campus and Veterans Administration hospital. The hills surrounding the General Atomics campus were rezoned for research and development use, attracting further construction projects from the private sector; the region is now dense with biotechnology offices and labs. Due to the University’s constant expansion and the industrial and residential projects it has attracted, the sounds of construction have since been an inescapable part of the area’s soundscape.</p>
      </>
    ),
    2026: (
      <>
      <p>In the years since the University’s founding, the sonic characteristics of La Jolla and the neighboring UCSD campus have continued to evolve, with growing industrial noise at the forefront of these changes. Perhaps most significant is the completion of the San Diego portion of Interstate 5 in the late 60s, followed by its widening from a four-lane to an eight-lane highway. The ceaseless drone of traffic noise, modulated over the years by changing engines, mufflers, and now the advent of electric motors, is a constant presence; at rush hour, a careful ear can even discern it against the sound of the waves by the seaside. This is far from the only contribution to UCSD’s noise floor. Various mechanical drones and hums from the likes of the supercomputer center, building air conditioning units, the Central Utilities Plant, and the University’s electrical infrastructure underscore every minute of daily life on campus. Despite their pervasive nature, these sounds are often only noticeable late at night and early in the morning, when one would expect something approaching total silence.</p>
      <br/>
      <p>Beginning in the 1970s and reaching its peak in the 80s and 90s, the empty fields surrounding the University saw a boom in residential development; the resulting complexes now form a bulk of the off-campus housing options available to students. The gas stations, shopping centers, schools, and recreational facilities built to support these residential developments have further stifled the sounds of nature that long dominated these areas. To counteract this, pockets of protected land– most notably the Mesa, Rose, and Sumner canyons– infuse the urban landscapes that border them with the sounds of local flora and fauna. Among their more vocal residents are coyotes and many species of songbird, whose territories, both physical and acoustic, frequently overlap with human ones. The town of La Jolla now hosts tens of thousands of inhabitants, and though the center has maintained its charm, population growth, changing infrastructure, and outward expansion have hardened its sonic characteristics and further distanced it from the nature that used to envelop it.</p>
      <br/>
      <p>Aviation noise remains a prominent feature of the UCSD campus and surrounding area. Although NAS Miramar has since moved to Virginia, the land has turned into a Marine Corps Air Station. Anyone who has spent time on campus, particularly during the summer months, is well aware that Miramar is still an active air station! The frequent passage of helicopters and fighter jets is now a commonplace (but still controversial) occurrence on campus. Although the roar of military aircraft is somewhat muffled inside University buildings, frequent overhead flights make outdoor meetings challenging, despite the attractive charms of La Jolla’s pleasant weather…</p>
      <br/>
      <p>Speaking from personal experience: the extent to which various buildings along the MCAS flightpath withstand aviation noise is an interesting way to speculate about developments in architectural noise suppression technologies. In many of UCSD’s newer buildings and lecture halls, fighter jet fly-bys appear only as distant rumbles. Some of the high-rises are not so comfortable; the first time I heard the Blue Angels from the thirteenth floor of Seventh College’s East Tower, the walls shook so violently that I thought an earthquake had started! At the most disappointing end of the noise abatement spectrum, General Atomics’s iconic Building 2 (which dates back to the mid-50s) is a two-story building that completely fails to muffle engine noise. When jets pass overhead, the sound is so deafening that all meetings and conversations must be put on pause for a matter of seconds.</p>
      </>
    )
  };

  const ecologyAbstract = (
    <>
    <p>Noise pollution is an increasingly recognized ecological stressor with documented effects on wildlife communication, behavior, reproduction, and physiology. This website summarizes current research on how anthropogenic noise affects avian species found in the La Jolla, California coastal ecosystem, with a focus on both predatory raptors and prey bird species.  </p>
    <br/>
    <p>Half of all US land sits within 382 meters of a road, and only 3% is more than 5 kilometers away. Road influence zones extend hundreds of meters outward. Phantom road test (a half-kilometer line of speakers broadcasting traffic noise) have been conducted, which found that bird abundance dropped 28% when the speakers were on. The cedar waxwing and yellow warbler nearly disappeared with traffic noise. Traffic noise affects bird species through both decibel-based and frequency-based mechanisms.</p>
    <br/>
    <p>Loud noise acts as an “acoustic blanket,” muffling the audio cues birds rely on to detect predators, competitors and their own species. A 10-decibel increase in noise above natural levels can shrink animals’ listening area by 90 percent. Sounds exceeding 45 dB start to mask bird songs, while levels around 60 dB can drastically reduce mating success, and noise over 90 dB causes severe behavioral disruption. Birds living near persistent noise sources show stress hormone patterns similar to humans with PTSD. The louder the noise, the lower the birds’ baseline corticosterone levels. Corticosterone lowers the reproductive hormones and thyroid signals that control breeding and growth. It also raises blood sugar, cholesterol, and fat level. Nestlings in the noisiest environments develop smaller bodies and poorer feathers. In wild birds, loud noise above about 70 decibels shrank body size and feathers and hurt egg hatching.</p>
    <br/>
    <p>Bird’s response to noise varies depending on their vocalization frequency. Transportation noise has a wide range, dominated by low frequencies below 2kHz but can reach up to 5kHz. Body size and vocal frequency are inversely linked. Therefore larger species tend to be affected by the transportation noise, while smaller birds actually gain positive effects due to leaving of large competitors.</p>
    </>
  )

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'forestgreen' }}>
        <Tabs value={value} onChange={handleChange} textColor='inherit' indicatorColor='inherit'>
          <Tab label="Ecological Impact" {...a11yProps(0)} />
          <Tab label="Historical Context" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {ecologyAbstract}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {historyDict[year]}
      </CustomTabPanel>
    </Box>
  );
}
