import PropTypes from 'prop-types'
import { StyledIconContainer, StyledCardHeader, StyledWrapper, StyledContent } from './Card.style'

const Card = ({ details, first }) => {
  const { icon, title, handle, postDate, headline, author, articleText, articleFooterTitle, articleFooterContent } = details
  return (
    <StyledWrapper first={first}>
      <StyledIconContainer>
        {icon && <img className="icon" src={icon} alt="user avatar" />}
      </StyledIconContainer>
      <main>
        <StyledCardHeader>
          <h2>{title}</h2>
          <p>@{handle}</p>
          <p>&nbsp;&bull; {postDate}</p>
        </StyledCardHeader>
        <p>{headline}</p>
      <p>{`{ author: ${author} }`}</p>
      <StyledContent hasArticleText={!!articleText} hasArticleFooter={!!articleFooterTitle || articleFooterContent}>
        {articleText && (
          <div className="top">
            <p>{articleText}</p>
          </div>
        )}
        {(articleFooterTitle || articleFooterContent) && (
        <div className="bottom">
          <h4>{articleFooterTitle}</h4>
          <p>{articleFooterContent}</p>
        </div>
        )}
      </StyledContent>
      </main>
    </StyledWrapper>
  )
}

Card.propTypes = {
  details: PropTypes.shape({
    icon: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    handle: PropTypes.string.isRequired,
    headline: PropTypes.string,
    postDate: PropTypes.string.isRequired,
    articleText: PropTypes.string,
    articleFooterTitle: PropTypes.string,
    articleFooterContent: PropTypes.string,
  }),
  first: PropTypes.bool,
}

export { Card }
