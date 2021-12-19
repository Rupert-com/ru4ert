import Masonry from '@mui/lab/Masonry'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Link,
  Paper,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  Box,
} from '@mui/material'
import Helmet from 'react-helmet'
import { styled, keyframes } from '@mui/system'
import React, { FunctionComponent, ReactNode, useState } from 'react'
import apache, { ReactComponent as Apache } from './@static/media/apache.svg'
import cSS, { ReactComponent as CSS } from './@static/media/CSS.svg'
import debian, { ReactComponent as Debian } from './@static/media/debian.svg'
import docker, { ReactComponent as Docker } from './@static/media/docker.svg'
import eslint, { ReactComponent as Eslint } from './@static/media/eslint.svg'
import flutter, { ReactComponent as Flutter } from './@static/media/flutter.svg'
import git, { ReactComponent as Git } from './@static/media/git.svg'
import github, { ReactComponent as Github } from './@static/media/github.svg'
import graphql, { ReactComponent as Graphql } from './@static/media/graphql.svg'
import hTML, { ReactComponent as HTML } from './@static/media/HTML.svg'
import instagram, { ReactComponent as Instagram } from './@static/media/instagram.svg'
import java, { ReactComponent as Java } from './@static/media/Java.svg'
import javaScript, { ReactComponent as JavaScript } from './@static/media/javaScript.svg'
import json, { ReactComponent as Json } from './@static/media/Json.svg'
import kotlin, { ReactComponent as Kotlin } from './@static/media/kotlin.svg'
import linkedIn, { ReactComponent as LinkedIn } from './@static/media/linkedIn.svg'
import linux, { ReactComponent as Linux } from './@static/media/Linux.svg'
import mongoDB, { ReactComponent as MongoDB } from './@static/media/mongoDB.svg'
import mySql, { ReactComponent as MySql } from './@static/media/MySql.svg'
import nodeJs, { ReactComponent as NodeJs } from './@static/media/nodeJs.svg'
import php, { ReactComponent as Php } from './@static/media/php.svg'
import prettier, { ReactComponent as Prettier } from './@static/media/prettier.svg'
import python, { ReactComponent as Python } from './@static/media/Python.svg'
import raspberryPi, { ReactComponent as RaspberryPi } from './@static/media/raspberryPi.svg'
import redis, { ReactComponent as Redis } from './@static/media/Redis.svg'
import sass, { ReactComponent as Sass } from './@static/media/Sass.svg'
import typescript, { ReactComponent as Typescript } from './@static/media/typescript.svg'
import w3C, { ReactComponent as W3C } from './@static/media/W3C.svg'
import gCP, { ReactComponent as GCP } from './@static/media/Google-cloud-platform.svg'
import { ReadMore } from './util/ReadMore'
export const FILE = __filename

const Label = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  border: '1px solid black',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const CardMediaCus = styled(CardMedia)(({ theme }) => ({
  margin: 'auto',
  padding: 4,
  maxHeight: '80px',
  '&.MuiCardMedia-media': {
    objectFit: 'contain',
    width: 'auto',
  },
}))

const MasonryCus = styled(Masonry)(({ theme }) => ({
  '&.MuiMasonry-root': {},
}))

type IData = {
  img: any
  title: string
  content: ReactNode[]
  action?: ReactNode
  src: any
}
const Skill: FunctionComponent<IData & { index: number }> = ({
  action,
  img,
  title,
  content,
  src,
  index,
}) => {
  const [more, setMore] = useState(false)

  const [children] = content

  let pre = undefined
  if (content.length > 1) pre = content[1]
  return (
    <section>
      <Paper key={index}>
        <Card>
          <CardActionArea onClick={() => setMore(!more)}>
            {/* @ts-ignore */}
            <CardMediaCus title={title} src={src} component="img" />
            <CardHeader title={title}></CardHeader>
            <CardContent>
              <ReadMore pre={pre} more={more} key={`${more}`}>
                {children}
              </ReadMore>
            </CardContent>
          </CardActionArea>
          {action && <CardActions>{action}</CardActions>}
        </Card>
      </Paper>
    </section>
  )
}

type ISkillsProps = {}
type ISkillsState = {}
export const Skills: FunctionComponent<ISkillsProps> = props => {
  const [values, setState] = useState<ISkillsState>({})

  const max1 = useMediaQuery('(max-width:600px)')
  const max2 = useMediaQuery('(max-width:960px)')
  const colls = max2 ? (max1 ? 1 : 2) : 4

  const splitAtIndex = (value: string, index: number) => [
    value.substring(0, index),
    value.substring(index),
  ]

  return (
    <>
      <Helmet>
        <title>Skills and Techniques</title>
        <meta
          name="description"
          content="Rupert Bogensperger has serveral quality Skills. He uses TypeScript and JavaScript for webdevelopment, Python and C# for Desktop and Kotlin or Java for Android developing. Further, he uses Linux as operation system for Enterprise."
        />
        <meta property="og:title" content="Rupert Bogensperger - Skills and Techniques" />
        <meta
          property="og:description"
          content="Rupert Bogensperger has serveral quality Skills. He uses TypeScript and JavaScript for webdevelopment, Python and C# for Desktop and Kotlin or Java for Android developing. Further, he uses Linux as operation system for Enterprise."
        />
      </Helmet>
      <Typography variant="h1" sx={{ my: 10, px: 2 }}>
        Rupert Bogensperger - Skills and Techniques
      </Typography>
      <Container id="Skills" sx={{ mb: 1 }}>
        <Paper elevation={12} sx={{ p: 3 }}>
          <MasonryCus columns={colls} spacing={{ xs: 1, sm: 2, md: 3 }}>
            {itemData.map((v, i) => (
              <Skill {...v} index={i} />
            ))}
          </MasonryCus>
        </Paper>
      </Container>
    </>
  )
}
const itemData: IData[] = [
  {
    src: docker,
    img: Docker,
    title: 'Docker',
    content: [
      <Typography>
        Docker is a virtual machine, allowing to develop and run applications in the same
        envirement. Futher, it runs applications on the same Linux kernel. Thereforece, it has a
        performance benefit.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://www.docker.com/" target="_blank">
          Docker
        </Link>
      </Typography>
    ),
  },
  {
    img: NodeJs,
    src: nodeJs,
    title: 'NodeJs',
    content: [<Typography>Node.js is a server side runtime enviroment for JavaScript.</Typography>],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://nodejs.org/en/" target="_blank">
          NodeJs
        </Link>
      </Typography>
    ),
  },
  {
    img: Apache,
    src: apache,
    title: 'Apache',
    content: [<Typography>Apache HTTP Server is a HTTP Server</Typography>],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://httpd.apache.org/" target="_blank">
          Apache
        </Link>
      </Typography>
    ),
  },
  {
    img: CSS,
    src: cSS,
    title: 'CSS',
    content: [
      <Box
        sx={{
          background: `linear-gradient(
          90deg,
          rgba(255, 0, 0, 1) 0%,
          rgba(255, 154, 0, 1) 10%,
          rgba(208, 222, 33, 1) 20%,
          rgba(79, 220, 74, 1) 30%,
          rgba(63, 218, 216, 1) 40%,
          rgba(47, 201, 226, 1) 50%,
          rgba(28, 127, 238, 1) 60%,
          rgba(95, 21, 242, 1) 70%,
          rgba(186, 12, 248, 1) 80%,
          rgba(251, 7, 217, 1) 90%,
          rgba(255, 0, 0, 1) 100%
      )`,
          backgroundSize: '200% auto',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: `${keyframes`
          to {
            background-position: 200% center;
          }`} 1s linear infinite`,
        }}
      >
        <Typography>CSS styles your HTML Documents</Typography>
      </Box>,
    ],
    action: (
      <Typography variant="caption">
        <Link
          title="see more"
          href="https://www.w3.org/standards/webdesign/htmlcss"
          target="_blank"
        >
          CSS
        </Link>
      </Typography>
    ),
  },
  {
    img: Debian,
    src: debian,
    title: 'Debian',
    content: [
      <Typography>Debian is a common Linux Distribution with serveral use cases.</Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link
          title="see more"
          href="https://www.debian.org/doc/manuals/project-history/"
          target="_blank"
        >
          History & Source
        </Link>
      </Typography>
    ),
  },
  {
    img: Eslint,
    src: eslint,
    title: 'Eslint',
    content: [
      <Typography>ESLint statically analyzes your code to quickly find problems.</Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://eslint.org/" target="_blank">
          Eslint
        </Link>
      </Typography>
    ),
  },
  {
    img: Flutter,
    src: flutter,
    title: 'Flutter',
    content: [
      <Typography>
        Flutter builds beautiful, natively compiled, multi-platform applications from a single
        codebase.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://flutter.dev/" target="_blank">
          Flutter
        </Link>
      </Typography>
    ),
  },
  {
    img: Git,
    src: git,
    title: 'Git',
    content: [<Typography>Git is a version control system.</Typography>],
    action: (
      <Typography title="see more" variant="caption">
        <Link href="https://git-scm.com/" target="_blank">
          Git
        </Link>
      </Typography>
    ),
  },
  {
    img: Github,
    src: github,
    title: 'Github',
    content: [<Typography>Git + Cloud = hosting service for code.</Typography>],
  },
  {
    img: Graphql,
    src: graphql,
    title: 'Graphql',
    content: [<Typography>GraphQL is a query language to request server APIs</Typography>],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://graphql.org/" target="_blank">
          Graphql
        </Link>
      </Typography>
    ),
  },
  {
    img: HTML,
    src: hTML,
    title: 'HTML',
    content: [
      <Typography>
        HTML (stands for Hypertext Markup Language) is a computer language that makes up most web
        pages and online applications.
        <br />
        <strong>Current HTML Version: 5.2</strong>
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link
          title="see more"
          href="https://web.cs.wpi.edu/~kal/fs/htmlstuff/FShtml1.html"
          target="_blank"
        >
          HTML 1.0
        </Link>
      </Typography>
    ),
  },
  {
    img: Java,
    src: java,
    title: 'Java',
    content: [
      <Typography>
        The motto of Java is "write once, run anywhere." It's true. You find Java code anywhere. It
        is used in Android app development, web development, game development, smart devices, and so
        much more.
      </Typography>,
    ],
  },
  {
    img: JavaScript,
    src: javaScript,
    title: 'JavaScript',
    content: [
      <Typography>
        JavaScript is the world's most popular programming language. JavaScript is the programming
        language of the Web.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link
          href="https://www.codecademy.com/resources/blog/javascript-history-popularity/"
          target="_blank"
          title="see more"
        >
          JavaScript: How Did It Get So Popular?
        </Link>
      </Typography>
    ),
  },
  {
    img: Json,
    src: json,
    title: 'JSON',
    content: [
      <Typography>
        {
          '{"info": "JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. "}'
        }
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://www.json.org/json-en.html" target="_blank" title="see more">
          JSON
        </Link>
      </Typography>
    ),
  },
  {
    img: Kotlin,
    src: kotlin,
    title: 'Kotlin',
    content: [
      <>
        <Typography gutterBottom>
          Kotlin runs like Java on the JRE. The big flex is that you can use Java Classes. Further,
          your developing speed increases highly and your file size shrinks.
        </Typography>
        <Typography gutterBottom>Example:</Typography>
        <Typography gutterBottom>
          Java:
          <br />
          <i>{`if(mitglied != null && mitglied.getLastname() != null){
length = mitglied.getLastname().length()
}`}</i>
        </Typography>
        <Typography gutterBottom>
          Kotlin:
          <br />
          <i>{`val length?: Int = mitglied?.lastname?.length`}</i>
          <br />
          or with a fallback value
          <i>{`val length: Int = mitglied?.lastname?.length ?: 0`}</i>
          Kotlin is NullExeption safe in contrast to Java
        </Typography>
      </>,
      <Typography gutterBottom>
        Kotlin runs like Java on the JRE. The big flex is that you can use Java Classes. Further,
        your developing speed increases highly and your file size shrinks.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://kotlinlang.org/" target="_blank" title="see more">
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: Linux,
    src: linux,
    title: 'Linux',
    content: [
      <Typography>Linux is an open source and high performance operation system. </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link
          href="https://upload.wikimedia.org/wikipedia/commons/b/b5/Linux_Distribution_Timeline_21_10_2021.svg"
          target="_blank"
          title="see more"
        >
          See how many Linux Distribution exists on a Timeline
        </Link>
      </Typography>
    ),
  },
  {
    img: MongoDB,
    src: mongoDB,
    title: 'MongoDB',
    content: [
      <Typography>
        MongoDB is a document-oriented database that is designed to store a large scale of data.
        MongoDB is a NoSQL database.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://www.mongodb.com/" title="see more" target="_blank">
          MongoDB
        </Link>
      </Typography>
    ),
  },
  {
    img: MySql,
    src: mySql,
    title: 'MySql',
    content: [<Typography>MySQL is a Database Service relational database.</Typography>],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://www.mysql.com/" target="_blank">
          MySQL
        </Link>
      </Typography>
    ),
  },
  {
    img: Php,
    src: php,
    title: 'PHP',
    content: [
      <Typography>PHP is the old-fashion whay of dynamic HTML Document generation.</Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://www.php.net/" target="_blank">
          PHP
        </Link>
      </Typography>
    ),
  },
  {
    img: Prettier,
    src: prettier,
    title: 'Prettier',
    content: [
      <Typography>
        • An opinionated code formatter
        <br />
        • Supports many languages
        <br />
        • Integrates with most editors
        <br />• Has few options
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://prettier.io/" target="_blank">
          Prettier
        </Link>
      </Typography>
    ),
  },
  {
    img: Python,
    src: python,
    title: 'Python',
    content: [<Typography>Python is a widespread programming language.</Typography>],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://www.python.org/" target="_blank">
          Python
        </Link>
      </Typography>
    ),
  },
  {
    img: RaspberryPi,
    src: raspberryPi,
    title: 'Raspberry Pi',
    content: [
      <>
        <Typography>
          The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer
          monitor or TV, and uses a standard keyboard and mouse.
        </Typography>
        <iframe
          style={{ width: '100%' }}
          loading="lazy"
          onLoad={event => {
            const height = (event.currentTarget.clientWidth * 9) / 16
            event.currentTarget.style.height = height + 'px'
          }}
          src="https://www.youtube.com/embed/5Oz78pxED80"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </>,
      <Typography>
        The Raspberry Pi is a low cost, credit-card sized computer that plugs into a computer
        monitor or TV, and uses a standard keyboard and mouse.
      </Typography>,
    ],
    action: (
      <>
        <Typography variant="caption">
          <Link title="see more" href="https://www.raspberrypi.com/about/" target="_blank">
            Raspberry Pi
          </Link>
        </Typography>
      </>
    ),
  },
  {
    img: Redis,
    src: redis,
    title: 'Redis',
    content: [<Typography>Redis is a high-performance in-memory database.</Typography>],
    action: (
      <Typography variant="caption">
        <Link href="https://redis.io/" target="_blank" title="see more">
          Redis
        </Link>
      </Typography>
    ),
  },
  {
    img: Sass,
    src: sass,
    title: 'Sass',
    content: [
      <Typography>
        Sass is the most mature, stable, and powerful professional grade CSS extension language in
        the world. Sass is the mature version of CSS
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://sass-lang.com/" target="_blank">
          Sass
        </Link>
      </Typography>
    ),
  },
  {
    img: Typescript,
    src: typescript,
    title: 'TypeScript',
    content: [
      <>
        <Typography>
          TypeScript adds additional syntax to JavaScript to support a tighter integration with your
          editor. Catch errors early in your editor.
        </Typography>
        <Typography>
          TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser,
          on Node.js or Deno and in your apps.
        </Typography>
        <Typography>
          TypeScript is a strongly typed programming language that builds on JavaScript, giving you
          better tooling at any scale.
        </Typography>
      </>,
    ],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://www.typescriptlang.org/" target="_blank">
          TypeScript
        </Link>
      </Typography>
    ),
  },
  {
    img: W3C,
    src: w3C,
    title: 'W3C',
    content: [
      <Typography>
        The World Wide Web Consortium (W3C) is an international community where Member
        organizations, a full-time staff, and the public work together to develop Web standards.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link title="see more" href="https://www.w3.org/Consortium/" target="_blank">
          W3C
        </Link>
      </Typography>
    ),
  },
  {
    img: GCP,
    src: gCP,
    title: 'Google Cloud Platform',
    content: [
      <Typography>
        Google Cloud Platform, a service by google to build all kind of IT-Projects
      </Typography>,
    ],
  },
]
