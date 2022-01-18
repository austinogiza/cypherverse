import React, {
  ChangeEvent,
  useState,
  KeyboardEvent,
  useEffect,
  useRef,
} from "react"
import styled from "styled-components"
import { CypherTheme } from "styles/ColorStyles"
import { Body3 } from "styles/TextStyles"

const TranslatorBox = () => {
  const initial = {
    text: "",
  }
  const [message, setMessage] = useState<string>("")
  const [copied, setCopied] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(5)
  const [form, setForm] = useState(initial)

  const textareaRef = useRef<null | HTMLTextAreaElement>(null)
  const { text } = form

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })

    if (text === "") {
      setMessage("")
    } else {
      setMessage(text)
    }
  }
  const handleKeyboardEvent = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (text === "") {
      setMessage("")
    } else {
      setMessage(text)
    }
  }

  useEffect(() => {
    window.setInterval(() => {
      if (copied) {
        setTimer((timer) => timer - 1)
      }

      if (timer === 0) {
        setCopied(false)
      }
    }, 1000)
  }, [copied, timer])
  return (
    <Body>
      <Boxgrid>
        <LeftBox>
          <GridTitle> English</GridTitle>
          <TypeInput
            onKeyUp={handleKeyboardEvent}
            value={text}
            name="text"
            onChange={onChange}
          />
        </LeftBox>

        <Middle>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 20H44L32 8"
              stroke="white"
              stroke-width="4"
              stroke-linejoin="round"
            />
            <path
              d="M46 28H4L16 40"
              stroke="white"
              stroke-width="4"
              stroke-linejoin="round"
            />
          </svg>
        </Middle>
        <RightBox>
          <GridTitle> Cosmol </GridTitle>
          <TransInput
            disabled
            value={message}
            name="message"
            ref={textareaRef}
            placeholder={message}
          >
            {message}
          </TransInput>
          {/* <CopyBox onClick={copyText}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.9577 1.56836H4.45768C3.39872 1.56836 2.54102 2.42607 2.54102 3.48503V16.9017H4.45768V3.48503H15.9577V1.56836ZM18.8327 5.40169H8.29102C7.23206 5.40169 6.37435 6.2594 6.37435 7.31836V20.735C6.37435 21.794 7.23206 22.6517 8.29102 22.6517H18.8327C19.8916 22.6517 20.7493 21.794 20.7493 20.735V7.31836C20.7493 6.2594 19.8916 5.40169 18.8327 5.40169ZM18.8327 20.735H8.29102V7.31836H18.8327V20.735Z"
                fill="white"
              />
            </svg>
            {copied ? (
              <CopyText> Copied</CopyText>
            ) : (
              <CopyText> Copy Text</CopyText>
            )}
          </CopyBox> */}
        </RightBox>
      </Boxgrid>
    </Body>
  )
}

const Body = styled.div`
  margin: 24px 0 80px 0;
  width: 100%;
  padding: 24px;
`

const Boxgrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  grid-gap: 32px;
  gap: 32px;
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    align-items: center;
    justify-content: center;
  }
  /* place-items: center; */
  /* align-items: center; */
  /* justify-content: center; */
`
const LeftBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
`
const GridTitle = styled(Body3)`
  color: ${CypherTheme.white};
  margin: 8px 0;
`
const TypeInput = styled.textarea`
  height: 444px;
  max-width: 513px;
  width: 100%;
  resize: none;
  border-radius: 0px;
  border: 1px solid ${CypherTheme.border};
  background: ${CypherTheme.primary};
  outline: none;
  color: ${CypherTheme.white};
  padding: 16px;
  font-family: "Atures Regular";
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`

const TransInput = styled.textarea`
  height: 444px;
  max-width: 513px;
  width: 100%;
  border-radius: 0px;
  border: 1px solid ${CypherTheme.border};
  background: ${CypherTheme.inputBG};
  outline: none;
  color: ${CypherTheme.white};
  padding: 16px;
  text-transform: uppercase;
  resize: none;
  font-family: "CUSTOM LANG";
  font-size: 18px;
  line-height: 1.6;
  font-weight: 400;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`
const Middle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`
const RightBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    align-items: center;
    justify-content: center;
  }
`
// const CopyBox = styled.div`
//   height: 56px;
//   max-width: 513px;
//   width: 100%;
//   border-radius: 0px;
//   margin: 32px 0;
//   /* border: 1px solid ${CypherTheme.border}; */
//   background: ${CypherTheme.inputBG};
//   outline: none;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const CopyText = styled(Body4)`
//   color: ${CypherTheme.white};
//   margin: 0 8px;
// `
export default TranslatorBox