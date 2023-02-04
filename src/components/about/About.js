import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Link to="/">To main</Link>
      <p>
        A wiki (/ˈwɪki/ (listen) WIK-ee) is an online hypertext publication
        collaboratively edited and managed by its own audience, using a web
        browser. A typical wiki contains multiple pages for the subjects or
        scope of the project, and could be either open to the public or limited
        to use within an organization for maintaining its internal knowledge
        base. Wikis are enabled by wiki software, otherwise known as wiki
        engines. A wiki engine, being a form of a content management system,
        differs from other web-based systems such as blog software, in that the
        content is created without any defined owner or leader, and wikis have
        little inherent structure, allowing structure to emerge according to the
        needs of the users.[1] Wiki engines usually allow content to be written
        using a simplified markup language and sometimes edited with the help of
        a rich-text editor.[2] There are dozens of different wiki engines in
        use, both standalone and part of other software, such as bug tracking
        systems. Some wiki engines are free and open-source, whereas others are
        proprietary. Some permit control over different functions (levels of
        access); for example, editing rights may permit changing, adding, or
        removing material. Others may permit access without enforcing access
        control. Other rules may be imposed to organize content. There are
        hundreds of thousands of wikis in use, both public and private,
        including wikis functioning as knowledge management resources,
        note-taking tools, community websites, and intranets. Ward Cunningham,
        the developer of the first wiki software, WikiWikiWeb, originally
        described wiki as "the simplest online database that could possibly
        work".[3] "Wiki" (pronounced [wiki][note 1]) is a Hawaiian word meaning
        "quick".[4][5][6] The online encyclopedia project Wikipedia is the most
        popular wiki-based website, and is one of the most widely viewed sites
        in the world, having been ranked in the top twenty since 2007.[7]
        Wikipedia is not a single wiki but rather a collection of hundreds of
        wikis, with each one pertaining to a specific language. The
        English-language Wikipedia has the largest collection of articles: as of
        February 2020, it has over 6 million articles.
      </p>
    </div>
  )
}

export default About
