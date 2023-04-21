import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100%;
  background-color: #152850;
  font-family: Roboto;
  color: #ffffff;
  margin: 0px;
`
export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  background-position: center;
  height: 40vh;
  padding: 50px;
  padding-bottom: 30px;
`
export const Name = styled.h1`
  font-size: 40px;
  margin-bottom: 5px;
`
export const Profession = styled.p`
  font-size: 30px;
  margin-top: 0px;
`
export const BottomContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const PlayListItemsContainer = styled.ul`
  list-style: none;
  margin-left: 0px;
  padding-left: 0px;
  height: 65vh;
  overflow: auto;
`
export const Input = styled.input`
  height: 30px;
  background-color: transparent;
  border-width: 0px;
  padding: 0px 5px;
  font-size: 16px;
  outline: none;
  color: #ffffff;
`
export const Left = styled.h1`
  font-size: 28px;
  font-weight: 500;
`
export const Right = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  height: 37px;
  padding: 0px 8px;
`
export const NoTracksContainer = styled.div`
  display: flex;
  height: 65vh;
  align-items: center;
  justify-content: center;
`
export const Text = styled.p`
  font-size: 40px;
  font-weight: 500;
`
