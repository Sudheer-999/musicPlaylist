import {AiOutlineDelete} from 'react-icons/ai'
import {
  ListItem,
  LeftSection,
  PlayImage,
  TrackDetails,
  Song,
  Genre,
  Option,
  RightSection,
  Duration,
  DelButton,
} from './styledComponents'

const PlayList = props => {
  const {details, onDelete} = props
  const {id, imageUrl, name, genre, duration} = details

  const onDeleteBtn = () => {
    onDelete(id)
  }

  return (
    <ListItem>
      <LeftSection>
        <PlayImage src={imageUrl} alt="track" />
        <TrackDetails>
          <Song>{name}</Song>
          <Genre>{genre}</Genre>
        </TrackDetails>
      </LeftSection>
      <RightSection>
        <Option>
          <Duration>{duration}</Duration>
          <DelButton data-testid="delete" onClick={onDeleteBtn}>
            <AiOutlineDelete />
          </DelButton>
        </Option>
      </RightSection>
    </ListItem>
  )
}
export default PlayList
