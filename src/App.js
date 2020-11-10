import { CardList } from './components/CardList/CardList'
import { Card } from './components/Card/Card'

const cardOne = {
  icon: '/social-card-icon.png',
  title: 'The Practical Dev',
  author: 'sean',
  handle: 'ThePracticalDev',
  headline: 'headline',
  postDate: '10 Nov 2020',
  articleFooterTitle: 'Learning React?',
  articleFooterContent: 'Here are some things to help you.'
}

const cardTwo = {
  title: 'title Two',
  author: 'sean',
  handle: 'handle',
  headline: 'headline',
  postDate: '10 Nov 2020',
  articleText: 'Learning React? Cool.',
  articleFooterTitle: 'Learning React?',
  articleFooterContent: 'Here are some things to help you.'
}

const cardThree = {
  icon: '/social-card-icon.png',
  title: 'The Practical Dev',
  author: 'sean',
  handle: 'ThePracticalDev',
  headline: 'headline',
  postDate: '10 Nov 2020',
  articleText: 'Learning React? Cool.',
}

const App = () => {
  return (
    <CardList>
      <Card details={cardOne} first />
      <Card details={cardTwo} />
      <Card details={cardThree} />
    </CardList>
  );
}

export default App;
