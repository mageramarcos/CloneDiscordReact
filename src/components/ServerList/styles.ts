import styled from "styled-components";

export const Container = styled.div`
    grid-area: SL;

    display: flex;
    flex-direction: column;

    align-items: center;

    background-color: var(--tertiary);
    padding: 11px 0;

    max-height: 100vh;
    overflow-y: scroll;

      /* Esconde a barra de rolagem */
      ::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    /* Esconde a barra de rolagem no Firefox */
    scrollbar-width: none;

    /* Esconde a barra de rolagem no IE e Edge */
    -ms-overflow-style: none;
`;

export const Separator = styled.div`
    width: 32px;
    border-bottom: 2px solid var(--quaternary);

    margin-bottom: 8px;
`;