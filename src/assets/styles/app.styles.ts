import styled from 'styled-components'

export const SCard = styled.div`
  //max-width: 600px;
  min-width: 300px;
  display: flex;
  border: 1px solid darkgrey;
  border-radius: 15px;
  padding: 10px 15px;
  margin: 1em;
  :hover {
    box-shadow: 10px 10px 15px 5px rgba(0, 0, 255, 0.2);
  }
`

export const SCardList = styled.div`
  display: flex;
  //align-items: center;
  margin: 0 auto;
  width: 95%;
  flex-wrap: wrap;
`

export const SCardContent = styled.div`
  //background: lightgray;
  width: 350px;
  margin: 0 5px;
`

export const SLoading = styled.div`
  text-align: center;
  margin-top: 250px;
`

export const ErrorText = styled.p`
  color: #3a3838;
`

export const ReadMoreBtn = styled.button`
  border: none;
  cursor: pointer;
  background: inherit;
  color: blue;
`

export const CreateButton = styled.button`
  position: fixed;
  bottom: 0;
  right: 0;
  border: none;
  background: blue;
  color: #fff;
  border-radius: 50%;
  margin-right: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  padding: 15px;
  cursor: pointer;
  :hover {
    box-shadow: 10px 10px 40px 30px rgba(0, 0, 255, 0.2);
  }
`

export const ModalLayout = styled.article`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  //pointer-events: none;
`

export const ModalContent = styled.section`
  background: #fff;
  min-width: 300px;
  border-radius:  15px;
  padding: 15px;
  margin: 0 auto;
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
`

export const CloseButton = styled.button`
  border: none;
  background: inherit;
  cursor: pointer;
`

export const ModalMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const SInput = styled.input`
  border: 1px solid lightgray; 
  border-radius: 15px;
  padding: 5px 10px;
  max-width: 500px;
  min-width: 180px;
`

export const SButton = styled.button`
  border: 1px solid lightgray;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 0 5px;
  cursor: pointer;
`

export const SInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`

export const SLabel = styled.label`
  display: flex;
  justify-content: space-between; 
  align-items: center;
`