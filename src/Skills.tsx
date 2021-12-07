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
} from '@mui/material'
import { styled } from '@mui/system'
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
  maxHeight: '200px',
  '&.MuiCardMedia-media': {
    objectFit: 'contain',
  },
}))

const MasonryCus = styled(Masonry)(({ theme }) => ({
  '&.MuiMasonry-root': {
    // height: 'auto',
  },
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
  )
}

type ISkillsProps = {}
type ISkillsState = {}
export const Skills: FunctionComponent<ISkillsProps> = props => {
  const [values, setState] = useState<ISkillsState>({})

  const max1 = useMediaQuery('(max-width:600px)')
  const max2 = useMediaQuery('(max-width:960px)')
  const colls = max2 ? (max1 ? 1 : 2) : 3

  const splitAtIndex = (value: string, index: number) => [
    value.substring(0, index),
    value.substring(index),
  ]

  return (
    <Container id="Skills" sx={{ mb: 1 }}>
      <Paper elevation={12} sx={{ p: 3 }}>
        <Typography variant="h2" gutterBottom component="h1">
          Skills and Techniques
        </Typography>
        <MasonryCus columns={colls} spacing={{ xs: 1, sm: 2, md: 3 }}>
          {itemData.map((v, i) => (
            <Skill {...v} index={i} />
          ))}
        </MasonryCus>
      </Paper>
    </Container>
  )
}

const itemData: IData[] = [
  {
    src: docker,
    img: Docker,
    title: 'Docker',
    content: [
      <Typography>
        Docker is a virtual machine, but unlike virtual machines that create a completely separate
        operating system, Docker allows the applications to use the Linux kernel of the same machine
        on which it is installed and by taking this benefit, it can make the applications ready to
        ship to other machines that are running the same Linux OS with somewhat different
        configurations. In this way, application size is reduced significantly and at the time of
        shipping, application performance also gets improved. It is an open-source tool and anyone
        can use it to meet his or her needs even if they need any additional feature or in case if
        they need to add a feature that does not exist already in the application.
      </Typography>,
      <Typography>
        Docker is a virtual machine, but unlike virtual machines that create a completely separate
        operating system, Docker allows the applications to use the Linux kernel of the same machine
        on which it is installed and by taking this benefit, it can make the applications ready to
        ship to other machines that are running the same Linux OS with somewhat different
        configurations.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://www.janbasktraining.com/blog/what-is-docker/" target="_blank">
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: NodeJs,
    src: nodeJs,
    title: 'NodeJs',
    content: [
      <Typography>
        Node.js is an open-source server side runtime environment built on Chrome's V8 JavaScript
        engine. It provides an event driven, non-blocking (asynchronous) I/O and cross-platform
        runtime environment for building highly scalable server-side application using JavaScript.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://www.tutorialsteacher.com/nodejs/what-is-nodejs" target="_blank">
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: Apache,
    src: apache,
    title: 'Apache',
    content: [
      <Typography>
        The Apache HTTP Server Project is an effort to develop and maintain an open-source HTTP
        server for modern operating systems including UNIX and Windows. The goal of this project is
        to provide a secure, efficient and extensible server that provides HTTP services in sync
        with the current HTTP standards.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://httpd.apache.org/" target="_blank">
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: CSS,
    src: cSS,
    title: 'CSS',
    content: [
      <Typography>
        CSS is the language for describing the presentation of Web pages, including colors, layout,
        and fonts. It allows one to adapt the presentation to different types of devices, such as
        large screens, small screens, or printers.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://www.w3.org/standards/webdesign/htmlcss" target="_blank">
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: Debian,
    src: debian,
    title: 'Debian',
    content: [
      <Typography>
        Debian Linux is a brand-new kind of Linux distribution. Rather than being developed by one
        isolated individual or group, as other distributions of Linux have been developed in the
        past, Debian is being developed openly in the spirit of Linux and GNU. The primary purpose
        of the Debian project is to finally create a distribution that lives up to the Linux name.
        Debian is being carefully and conscientiously put together and will be maintained and
        supported with similar care.
      </Typography>,
      <Typography>
        Debian Linux is a brand-new kind of Linux distribution. Rather than being developed by one
        isolated individual or group, as other distributions of Linux have been developed in the
        past, Debian is being developed openly in the spirit of Linux and GNU.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://www.debian.org/doc/manuals/project-history/" target="_blank">
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
      <Typography>
        ESLint statically analyzes your code to quickly find problems. ESLint is built into most
        text editors and you can run ESLint as part of your continuous integration pipeline.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://eslint.org/" target="_blank">
          Source
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
        Flutter is an open source framework by Google for building beautiful, natively compiled,
        multi-platform applications from a single codebase.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://flutter.dev/" target="_blank">
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: Git,
    src: git,
    title: 'Git',
    content: [
      <Typography>
        Git is a free and open source distributed version control system designed to handle
        everything from small to very large projects with speed and efficiency.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://git-scm.com/" target="_blank">
          Source
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
    content: [
      <Typography>
        GraphQL is a query language for APIs and a runtime for fulfilling those queries with your
        existing data. GraphQL provides a complete and understandable description of the data in
        your API, gives clients the power to ask for exactly what they need and nothing more, makes
        it easier to evolve APIs over time, and enables powerful developer tools.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://graphql.org/" target="_blank">
          Source
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
        pages and online applications. A hypertext is a text that is used to reference other pieces
        of text, while a markup language is a series of markings that tells web servers the style
        and structure of a document.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://www.hostinger.com/tutorials/what-is-html" target="_blank">
          Source
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
        <Link href="https://www.json.org/json-en.html" target="_blank">
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: Kotlin,
    src: kotlin,
    title: 'Kotlin',
    content: [
      <Typography>
        Kotlin is an open-source statically typed programming language designed by JetBrains. It is
        object-oriented and supports functional programming features. ... That is because Google
        decided that Kotlin was its preferred language for building Android apps.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link
          href="https://www.soldevelo.com/blog/why-you-should-use-kotlin-instead-of-java-in-your-next-project/"
          target="_blank"
        >
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: Linux,
    src: linux,
    title: 'Linux',
    content: [<Typography>TODO </Typography>],
    action: (
      <Typography variant="caption">
        <Link href="https://www.janbasktraining.com/blog/what-is-docker/" target="_blank">
          Source
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
        MongoDB is an open-source document-oriented database that is designed to store a large scale
        of data and also allows you to work with that data very efficiently. It is categorized under
        the NoSQL (Not only SQL) database because the storage and retrieval of data in the MongoDB
        are not in the form of tables.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link
          href="https://www.geeksforgeeks.org/what-is-mongodb-working-and-features/"
          target="_blank"
        >
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: MySql,
    src: mySql,
    title: 'MySql',
    content: [
      <Typography>
        MySQL Database Service is a fully managed database service to deploy cloud-native
        applications.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://www.mysql.com/" target="_blank">
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: Php,
    src: php,
    title: 'PHP',
    content: [
      <Typography>
        The PHP development team announces the immediate availability of PHP 8.1.0. This release
        marks the latest minor release of the PHP language.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://www.php.net/" target="_blank">
          Source
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
        <Link href="https://prettier.io/" target="_blank">
          Source
        </Link>
      </Typography>
    ),
  },
  {
    img: Python,
    src: python,
    title: 'Python',
    content: [
      <Typography>
        Python is an interpreted high-level general-purpose programming language. Its design
        philosophy emphasizes code readability with its use of significant indentation. Its language
        constructs as well as its object-oriented approach aim to help programmers write clear,
        logical code for small and large-scale projects.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://en.wikipedia.org/wiki/Python_(programming_language)" target="_blank">
          Source
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
          monitor or TV, and uses a standard keyboard and mouse. It is a capable little device that
          enables people of all ages to explore computing, and to learn how to program in languages
          like Scratch and Python. It’s capable of doing everything you’d expect a desktop computer
          to do, from browsing the internet and playing high-definition video, to making
          spreadsheets, word-processing, and playing games.
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
          <Link href="https://www.raspberrypi.com/about/" target="_blank">
            Further information
          </Link>
        </Typography>
        <Typography variant="caption">
          <Link href="https://www.raspberrypi.org/help/what-%20is-a-raspberry-pi/" target="_blank">
            Source
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
        <Link
          href="https://www.ionos.at/digitalguide/hosting/hosting-technik/memcached-vs-redis/"
          target="_blank"
        >
          Further information
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
        <Link href="https://sass-lang.com/" target="_blank">
          Source
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
        <Link href="https://www.typescriptlang.org/" target="_blank">
          Source
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
        organizations, a full-time staff, and the public work together to develop Web standards. Led
        by Web inventor and Director Tim Berners-Lee and CEO Jeffrey Jaffe, W3C's mission is to lead
        the Web to its full potential.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://www.w3.org/Consortium/" target="_blank">
          Source
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
        Google Cloud Platform (GCP), offered by Google, is a suite of cloud computing services that
        runs on the same infrastructure that Google uses internally for its end-user products, such
        as Google Search, Gmail, Google Drive, and YouTube. Alongside a set of management tools, it
        provides a series of modular cloud services including computing, data storage, data
        analytics and machine learning.
      </Typography>,
    ],
    action: (
      <Typography variant="caption">
        <Link href="https://en.wikipedia.org/wiki/Google_Cloud_Platform" target="_blank">
          Source
        </Link>
      </Typography>
    ),
  },
]
