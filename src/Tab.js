import { useParams } from 'react-router-dom';

import { Fade } from '@mui/material';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';

import NewsSearch from './NewsSearch';
import Live3 from './Live3';
import GetBtc from './btc_ticker';
import GetWisdom from './random_wisdom';

export default function Tab() {
    const params = useParams();

    const TabContent = {
        '1':<Typography mx="auto"  textAlign='center' variant='h2' > 
                <GetBtc/>
                <GetWisdom/>
            </Typography>,

        '2':<NewsSearch/>,

        '3':<Live3/>
    }

    return (
    <Fade in={true} timeout={700}>
        <TabPanel value={params.value}>
            {TabContent[params.value]}
        </TabPanel>
    </Fade>
    )
}

