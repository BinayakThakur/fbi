import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';
import RequestOne from './RequestOne';
import ComplexGrid from './RequestOne';
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Request 123
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Sandra Adams : Request to please approve id card</Typography>
          <Button disabled></Button>
          <Button color='green' variant='contained' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '80px', minHeight: '30px'}}>Approve</Button>
          <Button></Button>
          <Button color='red' variant='contained' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '80px', minHeight: '30px'}}>Reject</Button>
        </AccordionSummary>
        <AccordionDetails>
        <ComplexGrid></ComplexGrid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Request 123
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Sandra Adams : Request to please approve id card</Typography>
          <Button disabled></Button>
          <Button color='green' variant='contained' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '80px', minHeight: '30px'}}>Approve</Button>
          <Button></Button>
          <Button color='red' variant='contained' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '80px', minHeight: '30px'}}>Reject</Button>
        </AccordionSummary>
        <AccordionDetails>
        <ComplexGrid></ComplexGrid>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Request 123
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Sandra Adams : Request to please approve id card</Typography>
          <Button disabled></Button>
          <Button color='green' variant='contained' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '80px', minHeight: '30px'}}>Approve</Button>
          <Button></Button>
          <Button color='red' variant='contained' style={{maxWidth: '30px', maxHeight: '30px', minWidth: '80px', minHeight: '30px'}}>Reject</Button>
        </AccordionSummary>
        <AccordionDetails>
          <ComplexGrid></ComplexGrid>
        </AccordionDetails>
      </Accordion>
   
    </div>
  );
}