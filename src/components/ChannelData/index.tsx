import React, {useRef,useEffect} from "react";
import ChannelMessage, {Mention} from "../ChannelMessage";
import { Container, Messages,InputWrapper,Input,InputIcon} from "./styles";


const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    
    useEffect(() => {
        const div = messageRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef]);

    return (
        <Container>
           <Messages ref={messageRef}>
            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />


            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />


            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="03/01/2024"
            content="Sextou Carai!"
            />

            <ChannelMessage
            author="Magera"
            date="21/06/2020"
            content={
                <>
                <Mention>@Magera</Mention>, me carrega no LoL e CS de novo por favor?
                </>
            }
            hasMention
            isBot
            />

           </Messages>

           <InputWrapper>
           <Input type ="text" placeholder="Conversar em Chat-Livre #"/>
              <InputIcon/>
           </InputWrapper>
        </Container>
    )
};

export default ChannelData;