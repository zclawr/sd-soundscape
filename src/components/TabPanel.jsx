import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
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
      <p></p>
    ),
    2026: (
      <p></p>
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
