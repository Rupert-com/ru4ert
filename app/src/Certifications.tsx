import AttachFileIcon from '@mui/icons-material/AttachFile'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import LinkIcon from '@mui/icons-material/Link'
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Container, IconButton, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled } from '@mui/system'
import moment from 'moment'
import React, { FunctionComponent, useState } from 'react'
import { Helmet } from 'react-helmet'

const CusAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '& .MuiAccordionSummary-content': {
    [theme.breakpoints.down('md')]: {
      display: 'block!important',
    },
  },
}))

type ICertificationsProps = {}
type ICertificationsState = {}

type ICertificationProps = {
  issued: Date
  name: string
  description?: string
  issuer: string
  url: string
}

const cCertifications: ICertificationProps[] = [
  {
    issued: moment('2022-02-14').toDate(),
    issuer: 'Microsoft',
    name: 'Microsoft Certified: Azure Fundamentals',
    url: 'https://www.credly.com/badges/5d22e929-bd28-49b4-86c3-9fa0a8f9cf89/public_url',
    description: 'Earners of the Azure Fundamentals certification have demonstrated foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.',
  },

  {
    issued: moment('2021-05-02').toDate(),
    issuer: 'freeCodeCamp',
    name: 'Responsive Web Design',
    url: 'https://www.freecodecamp.org/certification/rupiert/responsive-web-design',
    description: 'Earners of the Responsive Web Design certification have demonstrated to build webpages with HTML and CSS.',
  },

  {
    issued: moment('2021-05-31').toDate(),
    issuer: 'mimo',
    name: 'Web Development',
    url: '/Rupert_Bogensperger_mimo-certificates-50-1.pdf',
    description: 'Understanding of the core concepts of programming using JavaScript and HTML to create web pages and to style pages using CSS',
  },

  {
    issued: moment('2022-05-31').toDate(),
    issuer: 'HTBLuVA Wien XX/ TGM',
    name: 'SAP "confirmation of participation"',
    url: '/Rupert_Bogensperger_confirmation_of_participation_SAP.pdf',
    description: `SAP introduction
    SAP UI & Navigation
    SAP-FI
    SAP-MM
    SAP-PP
    SAP-SD`,
  },
  {
    issued: moment('2019-08-14').toDate(),
    issuer: 'Feratel media technologies AG',
    name: 'Feratel media technologies: certificate of employment',
    url: '/Rupert_Bogensperger_feratel.pdf',
    description: `Programming and conception of project-related software
                  research activities
                  Data management and maintenance
                  Creation of documentation/technical concepts
                  Technical support
                  Continuous further development of web design concepts, implementation of graphic designs according to web standards
                  Supporting web application development
                  Analysis and evaluation of business processes and customer needs
                  Carrying out tests and verification of all active systems and components
                  The techniques and services used were: mariadb, java, jsp, css, javascript, html5, bootstrap, linux, apache, tomcat.`,
  },
  {
    issued: moment('2020-03-12').toDate(),
    issuer: 'Höhere Technische Bundeslehranstalt Saalfelden',
    name: 'Final exam certificate',
    url: '/Rupert_Bogensperger_final_exam_HTL_Saalfelden.pdf',
    description: `Technical school for information technology and business practice, training focus on network technology`,
  },
]

const Certification: FunctionComponent<ICertificationProps & { index: number; onExpanded: (index: number) => void; expanded: boolean }> = ({ onExpanded, expanded, issued, issuer, name, url, children, description, index }) => {
  const isFile = url.indexOf('.pdf') !== -1
  const theme = useTheme()
  const large = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Accordion expanded={expanded} onChange={() => onExpanded(index)}>
      <CusAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${1}a-content`} id={`panel${1}a-header`}>
        {large ? (
          <>
            <Typography sx={{ width: '50%', flexShrink: 0 }}>
              <Typography>{`${index + 1}. ${name}`}</Typography>
            </Typography>
            <Typography sx={{ width: '25%', flexShrink: 0, color: 'text.secondary' }}>
              issued by: <u>{issuer}</u>
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              at: <u>{moment(issued).format(moment.HTML5_FMT.DATE)}</u>
            </Typography>
          </>
        ) : (
          <>
            <Typography>{`${index + 1}. ${name}`}</Typography>
            <Typography sx={{ flexShrink: 0, color: 'text.secondary' }}>
              issued by: <u>{issuer}</u>
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              at: <u>{moment(issued).format(moment.HTML5_FMT.DATE)}</u>
            </Typography>
          </>
        )}
      </CusAccordionSummary>
      <AccordionDetails>
        {description &&
          description.split('\n').map(it => (
            <Typography>
              {description.indexOf('\n') !== -1 && <>• </>}
              {it}
            </Typography>
          ))}
      </AccordionDetails>
      <AccordionActions>
        <IconButton aria-label="url" href={url} target="_blank" rel="nofollow">
          {isFile ? <AttachFileIcon /> : <LinkIcon />}
        </IconButton>
      </AccordionActions>
    </Accordion>
  )
}

export const Certifications: FunctionComponent<ICertificationsProps> = props => {
  const [expanded, setExpanded] = useState(0)

  return (
    <>
      <Helmet>
        <title>Documents and Certifications of Rupert Bogensperger</title>
        <meta name="description" content={`Documents and Certifications of Rupert Bogensperger by: ${cCertifications.map(it => it.issuer).join('; ')}`} />
        <meta property="og:title" content="Rupert Bogensperger - Documents and Certifications" />
        <meta property="og:description" content={`Documents and Certifications of Rupert Bogensperger by: ${cCertifications.map(it => it.issuer).join('; ')}`} />
      </Helmet>

      <Container sx={{ my: 10, px: 2, mx: 'auto' }}>
        {cCertifications.map((it, index) => (
          <Certification {...it} index={index} expanded={expanded === index} onExpanded={i => setExpanded(i)} />
        ))}
      </Container>
    </>
  )
}
